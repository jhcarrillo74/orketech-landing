# Tareas de implementación

- [x] Definir una constante reutilizable para la URL pública de Microsoft Bookings.
- [x] Reemplazar el CTA del hero por el CTA de agenda definido en la especificación.
- [x] Agregar CTA de agenda a la sección Contacto, manteniendo el formulario actual.
- [x] Verificar atributos de seguridad de enlaces externos.
- [x] Ejecutar prueba focalizada, `npm run lint` y `npm run build`.
- [x] Levantar la landing localmente y verificar los CTA y su destino en el navegador.

## Evidencia de validación

- `node --test tests/microsoft-bookings-cta.test.mjs`: 3 pruebas aprobadas.
- `npm run build`: aprobado.
- Validación en navegador local: ambos CTA renderizan, apuntan al enlace público correcto y usan `target="_blank"` + `rel="noopener noreferrer"`.
- `npm run typecheck` y `npm run lint` continúan bloqueados por errores preexistentes ajenos a esta feature: declaraciones faltantes para componentes `.jsx` importados desde `App.tsx` y variable `error` sin uso en `api/contact.ts`.
