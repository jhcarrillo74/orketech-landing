import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const projectRoot = new URL('..', import.meta.url);

async function source(path) {
  return readFile(new URL(path, projectRoot), 'utf8');
}

test('privacy policy route is rendered for direct navigation', async () => {
  const main = await source('src/main.tsx');
  assert.match(main, /politica-de-privacidad/);
  assert.match(main, /PrivacyPolicy/);
});

test('privacy policy contains the LinkedIn lead form disclosures', async () => {
  const policy = await source('src/PrivacyPolicy.tsx');
  for (const requiredText of [
    'Orketech SpA',
    'formularios de generación de contactos de LinkedIn',
    'no vende tus datos personales',
    'acceso, corrección o eliminación',
    'jhcarrillo@orketech.com',
  ]) {
    assert.ok(policy.includes(requiredText), `Missing: ${requiredText}`);
  }
});

test('footer links to the public privacy policy and landing sections', async () => {
  const footer = await source('src/components/Footer.jsx');
  assert.match(footer, /href="\/politica-de-privacidad"/);
  assert.match(footer, /href=\{`\/\$\{href\}`\}/);
});

test('navigation links return to landing sections from the privacy policy route', async () => {
  const navbar = await source('src/components/Navbar.tsx');
  assert.match(navbar, /href=\{isHomePage \? link\.href : `\/\$\{link\.href\}`\}/);
  assert.match(navbar, /onClick=\{isHomePage \? \(e\) => handleNavClick\(e, link\.href\) : undefined\}/);
});

test('navbar logo is legible and links to the landing home', async () => {
  const navbar = await source('src/components/Navbar.tsx');
  assert.match(navbar, /href="\/"/);
  assert.match(navbar, /aria-label="Ir al inicio de Orketech"/);
  assert.match(navbar, /Orketech_symbol_white\.png/);
  assert.match(navbar, />\s*Orketech\s*<\/span>/);
});

test('Vercel rewrites direct public routes to the SPA entry point', async () => {
  const config = JSON.parse(await source('vercel.json'));
  assert.deepEqual(config.rewrites, [
    { source: '/(.*)', destination: '/index.html' },
  ]);
});
