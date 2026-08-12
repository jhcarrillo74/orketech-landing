# Especificación: política de privacidad pública

## Requisito: ruta pública de política de privacidad
La aplicación DEBE servir una página pública en `/politica-de-privacidad` sin requerir autenticación.

### Escenario: acceso directo desde LinkedIn
- **Dado** que una persona abre la URL configurada en un formulario de LinkedIn,
- **Cuando** navega a `https://orketech.com/politica-de-privacidad`,
- **Entonces** visualiza la política de privacidad de Orketech en español.

## Requisito: información mínima de tratamiento
La página DEBE indicar: responsable, categorías de datos, finalidades, origen desde LinkedIn y canales propios, no venta de datos, medidas razonables de protección y contacto para ejercer solicitudes.

### Escenario: prospecto revisa sus datos antes de enviar un formulario
- **Dado** que un prospecto considera enviar sus datos en un Lead Gen Form,
- **Cuando** consulta la política,
- **Entonces** puede identificar qué datos se podrían usar, para qué y cómo solicitar acceso, rectificación o eliminación.

## Requisito: acceso desde el footer
El footer de la landing DEBE incluir un enlace visible a `/politica-de-privacidad`.

### Escenario: navegación desde la landing
- **Dado** que un visitante está en la landing principal,
- **Cuando** selecciona “Política de privacidad” en el footer,
- **Entonces** navega a la página pública de la política.
