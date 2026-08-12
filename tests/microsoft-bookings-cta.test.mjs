import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const bookingUrl = 'https://outlook.office.com/bookwithme/user/7cb24523f73846c6a63c62ad95369a27@orketech.com/meetingtype/Nu8D66Mg20OZBPT4xUgzOA2?anonymous';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('booking URL is defined once as the public Microsoft Bookings meeting', async () => {
  const booking = await source('src/constants/booking.ts');

  assert.match(booking, new RegExp(bookingUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
});

test('hero directs the main CTA to Microsoft Bookings securely', async () => {
  const hero = await source('src/sections/Hero.tsx');

  assert.match(hero, /MICROSOFT_BOOKINGS_URL/);
  assert.match(hero, /Agenda una reunión sin costo de 30 min/);
  assert.match(hero, /target="_blank"/);
  assert.match(hero, /rel="noopener noreferrer"/);
});

test('contact section preserves the form and offers Microsoft Bookings securely', async () => {
  const contact = await source('src/sections/Contacto.jsx');

  assert.match(contact, /<form/);
  assert.match(contact, /MICROSOFT_BOOKINGS_URL/);
  assert.match(contact, /Agenda una reunión sin costo de 30 min/);
  assert.match(contact, /target="_blank"/);
  assert.match(contact, /rel="noopener noreferrer"/);
});
