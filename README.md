# Integrantes

Bastián Ríos  rol: 202351551-5
Elismar Suárez rol: 202304535-7

# MVP Portal de Admisión USM

MVP interactivo mobile-first en **React + Tailwind CSS** (con Vite) e íconos de `lucide-react`.
Las vistas (Home y Detalle de Carrera) se controlan con estado de React, sin librerías de enrutamiento.

### Requisitos

- Node >= 18

### Inicio rápido

```
npm install
npm run dev
```

click en control y la dirección localhost que aparece en terminal

### Estructura

```
src/
├── index.jsx              # Punto de entrada
├── App.jsx                # Estado: carrera seleccionada + búsqueda
├── views/
│   ├── HomeView.jsx       # Banner, buscador y grilla de carreras
│   └── CareerDetailView.jsx
├── components/
│   ├── SiteHeader.jsx
│   ├── AdmissionBanner.jsx
│   ├── CareerSearch.jsx
│   ├── CareerCard.jsx
│   ├── CurriculumSection.jsx
│   └── TuitionSection.jsx
├── data/careers.js        # Datos simulados
├── utils/format.js        # formatCLP, normalize
└── styles/index.css       # Tailwind + tokens de color
```
