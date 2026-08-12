# Propuesta: política de privacidad pública para captación de contactos

## Problema
LinkedIn Lead Gen Forms exige una URL pública de política de privacidad. Orketech no dispone hoy de una ruta pública específica que informe el tratamiento de datos de potenciales clientes.

## Objetivo
Publicar una política de privacidad en `https://orketech.com/politica-de-privacidad`, apta para vincular desde formularios de generación de contactos de LinkedIn y accesible desde el pie de página de la landing.

## Alcance
- Crear una vista pública y navegable en la ruta `/politica-de-privacidad`.
- Informar qué datos se pueden recopilar desde LinkedIn y desde formularios de contacto de Orketech.
- Informar la finalidad comercial: responder consultas, contactar al prospecto y coordinar diagnósticos de automatización.
- Declarar que los datos no se venden y que se aplican medidas razonables de seguridad.
- Habilitar solicitudes de acceso, corrección o eliminación mediante `jhcarrillo@orketech.com`.
- Añadir un enlace visible a la política desde el footer.

## No incluido
- Consent management platform, cookies banner, píxeles publicitarios ni tracking adicional.
- Asesoría legal ni declaración de cumplimiento regulatorio más allá del contenido informativo de la política.
- Cambios a la recolección, almacenamiento o backend del formulario existente.

## Dependencias
- La URL solo estará disponible públicamente después de commit, push y despliegue de Vercel.
- La política será usada en el Lead Gen Form de LinkedIn una vez desplegada.

## Criterios de aceptación
- `https://orketech.com/politica-de-privacidad` carga una política legible en español.
- El contenido identifica a Orketech, las categorías de datos, finalidades, protección, no venta y canal de derechos.
- El footer permite acceder a la ruta desde la landing.
- La landing y la ruta compilan correctamente.
