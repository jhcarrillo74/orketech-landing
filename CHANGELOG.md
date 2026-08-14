# Changelog

Todos los cambios relevantes de este proyecto se documentan aquí.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.3] - 2026-08-14

### Corregido
- Los CTA de agendamiento ahora dirigen a la página pública compartida de Orketech en Microsoft Bookings.

### Validación
- Pruebas automatizadas de los CTA y build de producción aprobados.

## [1.0.2] - 2026-08-12

### Corregido
- Rutas públicas directas de Vercel ahora cargan la aplicación, incluida `/politica-de-privacidad`.

## [1.0.1] - 2026-08-12

### Añadido
- Política de privacidad pública en `/politica-de-privacidad`, preparada para formularios de generación de contactos de LinkedIn.
- Enlace visible desde el pie de página a la política de privacidad.

### Corregido
- Navegación desde la política de privacidad hacia las secciones de la landing.
- Logo del encabezado: ahora es legible y enlaza al inicio de Orketech.

### Validación
- Pruebas automatizadas de política, navegación y CTA de Microsoft Bookings.

## [1.0.0] - 2026-08-12

### Añadido
- Landing pública de Orketech para servicios de automatización de procesos con IA.
- Secciones de servicios, proyectos, metodología de trabajo y contacto.
- Formulario de contacto.
- CTA de agenda de diagnóstico de 30 minutos integrado con Microsoft Bookings en el hero y la sección de contacto.
- Pruebas automatizadas para los CTA de agenda y sus atributos de seguridad.

### Seguridad
- Los enlaces a Microsoft Bookings abren en una nueva pestaña con `rel="noopener noreferrer"`.

[1.0.3]: https://github.com/jhcarrillo74/orketech-landing/releases/tag/v1.0.3
[1.0.2]: https://github.com/jhcarrillo74/orketech-landing/releases/tag/v1.0.2
[1.0.1]: https://github.com/jhcarrillo74/orketech-landing/releases/tag/v1.0.1
[1.0.0]: https://github.com/jhcarrillo74/orketech-landing/releases/tag/v1.0.0
