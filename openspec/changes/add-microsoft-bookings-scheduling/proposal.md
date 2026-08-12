# Propuesta: agendamiento con Microsoft Bookings

## Problema
La landing de Orketech dirige la conversión principal al formulario de contacto. Los prospectos no pueden reservar de inmediato una reunión de diagnóstico en el calendario comercial.

## Objetivo
Incorporar Microsoft Bookings como la ruta principal de agendamiento de una reunión de diagnóstico de 30 minutos, conservando el formulario de contacto como alternativa.

## Alcance
- Reemplazar el CTA principal del hero por un enlace a Microsoft Bookings.
- Añadir un CTA de agendamiento en la sección Contacto, sin eliminar el formulario actual.
- Abrir Bookings en una pestaña nueva y aplicar protección `noopener noreferrer`.
- Usar el enlace público verificado:
  `https://outlook.office.com/bookwithme/user/7cb24523f73846c6a63c62ad95369a27@orketech.com/meetingtype/Nu8D66Mg20OZBPT4xUgzOA2?anonymous`

## Flujo esperado
1. El visitante selecciona “Agenda una reunión sin costo de 30 min”.
2. Se abre la página pública de Microsoft Bookings.
3. El visitante elige un bloque libre y confirma sus datos.
4. Bookings crea el evento en el calendario Orketech y envía la confirmación.

## No incluido
- Cambios al backend del formulario `/api/contact`.
- Analítica de clics, píxeles o UTMs de Bookings.
- Cambios en la configuración de Microsoft 365/Bookings.
- Sustituir o eliminar el formulario de contacto.

## Riesgos y dependencias
- La disponibilidad pública depende de los eventos marcados como ocupados en el calendario principal de Orketech.
- Microsoft Bookings es un servicio externo; la landing solo enlaza a su URL pública.

## Criterios de aceptación
- El CTA del hero abre la reunión de diagnóstico de Microsoft Bookings en una pestaña nueva.
- Contacto conserva el formulario y ofrece un CTA de agenda visible.
- Los enlaces externos usan `rel="noopener noreferrer"`.
- La aplicación compila y las verificaciones disponibles pasan.
