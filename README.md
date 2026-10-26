# Portafolio · Jhonatan Cruz

Mi web personal: [jhonatancrruzz.com](https://jhonatancrruzz.com)

Presenta quién soy, mis habilidades, mi formación y experiencia, mis proyectos y un formulario de contacto. Desde ahí también se descarga mi CV.

## Tecnologías

- HTML, CSS y JavaScript (módulos ES), sin frameworks.
- [Vite](https://vitejs.dev/) para el entorno de desarrollo.
- Formulario de contacto con [Formspree](https://formspree.io/).
- Publicado con GitHub Pages y dominio propio.

## Estructura

```
.
├── index.html              # Página principal
├── styles/                 # reset, fuentes y estilos de la página
├── scripts/                # menú, descarga del CV y formulario
├── cv/cv.html              # Fuente del CV (se exporta a PDF)
└── assets/                 # imágenes, fuentes, iconos y el CV en PDF
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Regenerar el CV en PDF

El CV se escribe en `cv/cv.html` y se exporta a `assets/pdf/CV_Jhonatan_Cruz.pdf` con el modo sin interfaz de Edge o Chrome:

```bash
msedge --headless --no-pdf-header-footer --print-to-pdf=assets/pdf/CV_Jhonatan_Cruz.pdf cv/cv.html
```
