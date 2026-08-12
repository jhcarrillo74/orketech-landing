# Booking CTA Specification

## ADDED Requirements

### Requirement: CTA principal hacia Microsoft Bookings
La landing DEBE ofrecer un CTA principal para agendar una reunión de diagnóstico de automatización con IA de 30 minutos mediante Microsoft Bookings.

#### Scenario: Visitante agenda desde el hero
- **WHEN** un visitante selecciona el CTA principal del hero
- **THEN** el navegador abre la página pública configurada de Microsoft Bookings en una pestaña nueva
- **AND** la pestaña de la landing permanece abierta.

### Requirement: Agendamiento disponible desde Contacto
La sección Contacto DEBE mantener el formulario de contacto existente y DEBE presentar además un CTA visible de agendamiento.

#### Scenario: Visitante prefiere reservar sin escribir un mensaje
- **WHEN** un visitante llega a la sección Contacto
- **THEN** puede seleccionar el CTA de agenda sin completar el formulario
- **AND** es dirigido a Microsoft Bookings en una pestaña nueva.

### Requirement: Copia comercial consistente
Los CTA de agenda DEBEN comunicar claramente la oferta de una reunión sin costo de 30 minutos.

#### Scenario: El visitante evalúa la acción
- **WHEN** visualiza un CTA de agenda
- **THEN** lee “Agenda una reunión sin costo de 30 min” o una variante semánticamente equivalente
- **AND** comprende que la acción corresponde a una reunión de diagnóstico.

### Requirement: Enlace externo seguro
Todo enlace a Microsoft Bookings DEBE abrirse en una nueva pestaña con `noopener noreferrer`.

#### Scenario: Navegación al proveedor externo
- **WHEN** el visitante selecciona un CTA de Microsoft Bookings
- **THEN** el enlace usa `target="_blank"`
- **AND** incluye `rel="noopener noreferrer"`.
