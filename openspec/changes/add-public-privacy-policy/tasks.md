# Tareas de implementación

- [x] Implementar la vista pública `/politica-de-privacidad` y su contenido requerido.
- [x] Resolver la ruta directa sin introducir una dependencia de router innecesaria.
- [x] Añadir enlace de la política en el footer.
- [x] Agregar prueba focalizada para ruta y contenido mínimo.
- [x] Ejecutar pruebas focalizadas y build de producción.
- [x] Verificar la ruta en navegador local.

## Evidencia de validación

- `node --test tests/privacy-policy.test.mjs tests/microsoft-bookings-cta.test.mjs`: 6 pruebas aprobadas.
- `npm run build`: aprobado.
- Navegador local: `/politica-de-privacidad` renderiza el contenido requerido y el footer expone el enlace público.
