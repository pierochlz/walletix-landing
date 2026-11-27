# Walletix - Landing Page

Página de presentación de **Walletix**, la aplicación de finanzas personales del proyecto *Arquitectura de Aplicaciones Web* (UPC).

- Aplicación web: https://pierochlz.github.io/walletix-web/
- API (Swagger): https://walletix-jbsb.onrender.com/swagger-ui/index.html

## Sistema de diseño (compartido con la web app)
- **Colores:** la misma paleta de la web app, generada con Angular Material. La landing usa su versión oscura:
  fondos gris azulado (`#031427`, `#102034`), menta `#7bd8b1` para botones y acentos, esmeralda `#006c4e`
  para la marca y la tarjeta de saldo, y azul `#b2c5ff` como acento secundario.
- **Tipografía:** Inter, con números alineados en los montos.
- **Marca:** el ícono de billetera de la app sobre un cuadro esmeralda (`assets/walletix-mark.svg`).
- **Accesibilidad:** contraste WCAG AA, enlace para saltar al contenido, animaciones desactivadas si el sistema pide menos movimiento.

## Estructura
- `index.html`: la landing (Tailwind CSS por CDN y JavaScript sin frameworks).
- `assets/i18n.js`: español (es-419) e inglés (en-US); recuerda el idioma con la misma clave que la app.
- `login.html`: redirige al inicio de sesión de la web app.
