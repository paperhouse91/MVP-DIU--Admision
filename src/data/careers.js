const commonFinancing = [
  {
    name: 'Gratuidad',
    description: 'Cubre arancel y matrícula para estudiantes del 60% de menores ingresos según el Registro Social de Hogares.'
  },
  {
    name: 'Beca Bicentenario',
    description: 'Cubre hasta el arancel de referencia para estudiantes del 70% de menores ingresos con buen puntaje PAES.'
  },
  {
    name: 'Crédito con Garantía Estatal (CAE)',
    description: 'Financia hasta el 100% del arancel de referencia, con pago diferido tras el egreso.'
  },
  {
    name: 'Beca Excelencia USM',
    description: 'Descuento de 25% a 100% del arancel para ingresos destacados por puntaje o ranking.'
  }
]

export const careers = [
  {
    id: 'ing-civil-quimica',
    name: 'Ingeniería Civil Química',
    area: 'Ingeniería',
    campus: 'Casa Central, Valparaíso',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Químico/a',
    summary: 'Diseña y optimiza procesos industriales que transforman materias primas en productos de valor.',
    description:
      'Forma profesionales capaces de diseñar, operar y optimizar procesos químicos, bioquímicos y energéticos a escala industrial, con foco en sustentabilidad, seguridad y eficiencia. Los egresados se desempeñan en minería, celulosa, alimentos, energía y tratamiento de aguas.',
    curriculum: [
      { label: '1° año', courses: ['Matemática I y II', 'Química General', 'Física General', 'Programación', 'Introducción a la Ingeniería'] },
      { label: '2° año', courses: ['Cálculo Multivariable', 'Química Orgánica', 'Termodinámica', 'Ecuaciones Diferenciales', 'Fisicoquímica'] },
      { label: '3° año', courses: ['Fenómenos de Transporte', 'Balance de Materia y Energía', 'Química Analítica', 'Estadística'] },
      { label: '4° año', courses: ['Operaciones Unitarias', 'Cinética y Reactores', 'Control de Procesos', 'Ingeniería Ambiental'] },
      { label: '5°–6° año', courses: ['Diseño de Plantas', 'Evaluación de Proyectos', 'Práctica Profesional', 'Memoria de Título'] }
    ],
    tuition: { annual: 6120000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-civil-informatica',
    name: 'Ingeniería Civil Informática',
    area: 'Ingeniería',
    campus: 'Casa Central, Valparaíso · San Joaquín, Santiago',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Informático/a',
    summary: 'Desarrolla software, sistemas y soluciones basadas en datos para resolver problemas complejos.',
    description:
      'Prepara especialistas en desarrollo de software, ciencia de datos, inteligencia artificial y arquitectura de sistemas. La carrera combina fundamentos matemáticos sólidos con proyectos reales junto a la industria tecnológica.',
    curriculum: [
      { label: '1° año', courses: ['Matemática I y II', 'Física General', 'Programación', 'Estructuras Discretas'] },
      { label: '2° año', courses: ['Estructuras de Datos', 'Lenguajes de Programación', 'Arquitectura de Computadores', 'Probabilidad'] },
      { label: '3° año', courses: ['Bases de Datos', 'Sistemas Operativos', 'Análisis de Algoritmos', 'Redes de Computadores'] },
      { label: '4° año', courses: ['Ingeniería de Software', 'Inteligencia Artificial', 'Computación Distribuida', 'Seguridad Informática'] },
      { label: '5°–6° año', courses: ['Proyecto de Software', 'Gestión de Proyectos TI', 'Práctica Profesional', 'Memoria de Título'] }
    ],
    tuition: { annual: 6340000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-civil-mecanica',
    name: 'Ingeniería Civil Mecánica',
    area: 'Ingeniería',
    campus: 'Casa Central, Valparaíso',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Mecánico/a',
    summary: 'Diseña máquinas, sistemas térmicos y soluciones de manufactura para la industria.',
    description:
      'Forma ingenieros para el diseño, fabricación y mantenimiento de sistemas mecánicos y energéticos, con énfasis en energías renovables, manufactura avanzada y gestión de activos industriales.',
    curriculum: [
      { label: '1° año', courses: ['Matemática I y II', 'Física General', 'Dibujo de Ingeniería', 'Programación'] },
      { label: '2° año', courses: ['Mecánica Racional', 'Termodinámica', 'Resistencia de Materiales', 'Ciencia de Materiales'] },
      { label: '3° año', courses: ['Mecánica de Fluidos', 'Transferencia de Calor', 'Diseño Mecánico', 'Electrotecnia'] },
      { label: '4° año', courses: ['Máquinas Térmicas', 'Vibraciones', 'Procesos de Manufactura', 'Mantenimiento'] },
      { label: '5°–6° año', courses: ['Energías Renovables', 'Proyecto Mecánico', 'Práctica Profesional', 'Memoria de Título'] }
    ],
    tuition: { annual: 6080000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'arquitectura',
    name: 'Arquitectura',
    area: 'Arquitectura y Diseño',
    campus: 'Casa Central, Valparaíso',
    duration: '10 semestres',
    degree: 'Arquitecto/a',
    summary: 'Proyecta espacios habitables integrando diseño, técnica constructiva y territorio.',
    description:
      'Combina taller de proyectos, tecnología de la construcción y urbanismo para formar arquitectos con alta capacidad técnica, sensibles al contexto y la sustentabilidad.',
    curriculum: [
      { label: '1° año', courses: ['Taller de Proyectos I', 'Representación Arquitectónica', 'Geometría', 'Historia de la Arquitectura'] },
      { label: '2° año', courses: ['Taller de Proyectos II', 'Estructuras I', 'Materiales de Construcción', 'Teoría de la Arquitectura'] },
      { label: '3° año', courses: ['Taller de Proyectos III', 'Estructuras II', 'Instalaciones', 'Urbanismo'] },
      { label: '4° año', courses: ['Taller de Proyectos IV', 'Construcción Sustentable', 'Gestión Inmobiliaria'] },
      { label: '5° año', courses: ['Taller de Título', 'Práctica Profesional', 'Proyecto de Título'] }
    ],
    tuition: { annual: 5760000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-comercial',
    name: 'Ingeniería Comercial',
    area: 'Negocios',
    campus: 'San Joaquín, Santiago',
    duration: '10 semestres',
    degree: 'Ingeniero/a Comercial',
    summary: 'Gestiona organizaciones con herramientas cuantitativas, finanzas y estrategia.',
    description:
      'Entrega una formación en economía, finanzas, marketing y gestión con un fuerte componente analítico y tecnológico, sello de la USM.',
    curriculum: [
      { label: '1° año', courses: ['Cálculo', 'Introducción a la Economía', 'Contabilidad', 'Administración'] },
      { label: '2° año', courses: ['Microeconomía', 'Estadística', 'Costos', 'Comportamiento Organizacional'] },
      { label: '3° año', courses: ['Macroeconomía', 'Finanzas Corporativas', 'Marketing', 'Econometría'] },
      { label: '4° año', courses: ['Estrategia', 'Evaluación de Proyectos', 'Gestión de Operaciones'] },
      { label: '5° año', courses: ['Emprendimiento', 'Práctica Profesional', 'Seminario de Título'] }
    ],
    tuition: { annual: 5420000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-civil-electrica',
    name: 'Ingeniería Civil Eléctrica',
    area: 'Ingeniería',
    campus: 'Casa Central, Valparaíso',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Electricista',
    summary: 'Diseña sistemas de energía eléctrica, control y automatización.',
    description:
      'Forma profesionales en sistemas eléctricos de potencia, electrónica de potencia, control automático y redes inteligentes, claves para la transición energética.',
    curriculum: [
      { label: '1° año', courses: ['Matemática I y II', 'Física General', 'Programación', 'Química General'] },
      { label: '2° año', courses: ['Circuitos Eléctricos', 'Electromagnetismo', 'Ecuaciones Diferenciales'] },
      { label: '3° año', courses: ['Máquinas Eléctricas', 'Electrónica', 'Señales y Sistemas'] },
      { label: '4° año', courses: ['Sistemas de Potencia', 'Control Automático', 'Electrónica de Potencia'] },
      { label: '5°–6° año', courses: ['Redes Inteligentes', 'Proyecto Eléctrico', 'Práctica Profesional', 'Memoria de Título'] }
    ],
    tuition: { annual: 6080000, enrollment: 342000 },
    financing: commonFinancing
  }
]

export const specialAdmission = {
  title: 'Admisión Especial 2027',
  description: 'Postula sin depender solo de la PAES: vías para deportistas, PACE, talentos STEM, estudiantes extranjeros y titulados.',
  dates: [
    { label: 'Postulación', value: '3 nov – 15 dic 2026' },
    { label: 'Resultados', value: '8 ene 2027' },
    { label: 'Matrícula', value: '12 – 16 ene 2027' }
  ]
}
