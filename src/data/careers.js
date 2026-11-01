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
    description: 'Descuento de 25% a 100% del arancel para ingresos destacados por puntaje PAES o ranking de notas.'
  }
]

const engineeringWeights = [
  { label: 'NEM', value: '15%' },
  { label: 'Ranking', value: '25%' },
  { label: 'Comp. Lectora', value: '10%' },
  { label: 'Matemática 1 (M1)', value: '25%' },
  { label: 'Matemática 2 (M2)', value: '15%' },
  { label: 'Ciencias', value: '10%' }
]

export const careers = [
  {
    id: 'ing-civil-quimica',
    name: 'Ingeniería Civil Química',
    area: 'Ingeniería',
    regime: 'Pregrado Diurno',
    campus: 'Casa Central, Valparaíso · San Joaquín, Santiago',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Químico/a',
    cutoffScore: 715.4,
    minPaesScore: 550,
    requiresM2: true,
    paesWeights: engineeringWeights,
    synonyms: [
      'quimica', 'procesos', 'industrial', 'planta', 'reactores', 'bioquimica',
      'mineria', 'energia', 'alimentos', 'celulosa', 'aguas', 'sustentabilidad',
      'valpo', 'valparaiso', 'santiago', 'diurno', 'icq'
    ],
    summary: 'Diseña y optimiza procesos industriales que transforman materias primas en productos sustentables de alto valor.',
    description:
      'Forma profesionales capaces de diseñar, operar y optimizar procesos químicos, bioquímicos y energéticos a escala industrial, con foco en sustentabilidad, seguridad y eficiencia. Los egresados se desempeñan en minería, celulosa, alimentos, hidrógeno verde, energía y tratamiento de aguas.',
    curriculum: [
      { semester: 'I Semestre', cycle: 'plan-comun', courses: ['Matemática I', 'Introducción a la Física', 'Química y Sociedad', 'Programación', 'Introducción a la Ingeniería', 'Educación Física I'] },
      { semester: 'II Semestre', cycle: 'plan-comun', courses: ['Matemática II', 'Física General I', 'Química Básica', 'Taller de Ingeniería Química', 'Educación Física II'] },
      { semester: 'III Semestre', cycle: 'plan-comun', courses: ['Matemática III', 'Física General II', 'Química Inorgánica', 'Balance de Materia', 'Inglés I'] },
      { semester: 'IV Semestre', cycle: 'plan-comun', courses: ['Matemática IV', 'Termodinámica Química', 'Química Orgánica', 'Balance de Energía', 'Inglés II'] },
      { semester: 'V Semestre', cycle: 'especialidad', courses: ['Fenómenos de Transporte', 'Termodinámica de Equilibrio', 'Fisicoquímica', 'Métodos Numéricos', 'Humanístico I'] },
      { semester: 'VI Semestre', cycle: 'especialidad', courses: ['Mecánica de Fluidos', 'Transferencia de Calor', 'Química Analítica e Instrumental', 'Estadística Aplicada', 'Humanístico II'] },
      { semester: 'VII Semestre', cycle: 'especialidad', courses: ['Transferencia de Materia', 'Cinética y Diseño de Reactores I', 'Termodinámica Aplicada', 'Economía I'] },
      { semester: 'VIII Semestre', cycle: 'especialidad', courses: ['Operaciones Unitarias I', 'Diseño de Reactores II', 'Control Automático de Procesos', 'Ingeniería Ambiental'] },
      { semester: 'IX Semestre', cycle: 'titulacion', courses: ['Operaciones Unitarias II', 'Diseño de Procesos y Plantas', 'Seguridad de Procesos', 'Evaluación de Proyectos'] },
      { semester: 'X Semestre', cycle: 'titulacion', courses: ['Taller de Diseño de Plantas', 'Simulación y Optimización', 'Electivo de Especialidad I', 'Gestión de Operaciones'] },
      { semester: 'XI Semestre', cycle: 'titulacion', courses: ['Memoria de Título', 'Práctica Profesional Industrial', 'Electivo de Especialidad II'] }
    ],
    tuition: { annual: 6120000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-civil-informatica',
    name: 'Ingeniería Civil Informática',
    area: 'Ingeniería',
    regime: 'Pregrado Diurno',
    campus: 'Casa Central, Valparaíso · San Joaquín, Santiago',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Informático/a',
    cutoffScore: 788.2,
    minPaesScore: 550,
    requiresM2: true,
    paesWeights: engineeringWeights,
    synonyms: [
      'computacion', 'programacion', 'software', 'sistemas', 'datos', 'ia',
      'inteligencia artificial', 'ciberseguridad', 'desarrollo', 'web', 'codigo',
      'tecnologia', 'it', 'ti', 'informatica', 'ici', 'valpo', 'santiago', 'diurno'
    ],
    summary: 'Desarrolla software, inteligencia artificial y arquitecturas de sistemas para resolver desafíos complejos.',
    description:
      'Prepara especialistas en ingeniería de software, ciencia de datos, inteligencia artificial, ciberseguridad y arquitectura de sistemas. La carrera combina fundamentos matemáticos y algorítmicos con proyectos reales junto a la industria tecnológica.',
    curriculum: [
      { semester: 'I Semestre', cycle: 'plan-comun', courses: ['Matemática I', 'Introducción a la Física', 'Programación', 'Introducción a la Ingeniería', 'Educación Física I'] },
      { semester: 'II Semestre', cycle: 'plan-comun', courses: ['Matemática II', 'Física General I', 'Química y Sociedad', 'Estructuras Discretas', 'Educación Física II'] },
      { semester: 'III Semestre', cycle: 'plan-comun', courses: ['Matemática III', 'Física General II', 'Estructuras de Datos', 'Arquitectura y Organización de Computadores', 'Inglés I'] },
      { semester: 'IV Semestre', cycle: 'plan-comun', courses: ['Matemática IV', 'Probabilidad y Estadística', 'Lenguajes de Programación', 'Autómatas y Computabilidad', 'Inglés II'] },
      { semester: 'V Semestre', cycle: 'especialidad', courses: ['Bases de Datos', 'Sistemas Operativos', 'Análisis y Diseño de Algoritmos', 'Optimización', 'Humanístico I'] },
      { semester: 'VI Semestre', cycle: 'especialidad', courses: ['Ingeniería de Software', 'Redes de Computadores', 'Inteligencia Artificial', 'Economía I', 'Humanístico II'] },
      { semester: 'VII Semestre', cycle: 'especialidad', courses: ['Diseño de Interfaces Usuarias', 'Sistemas Distribuidos', ' Ciencia de Datos', 'Gestión de Proyectos Informáticos'] },
      { semester: 'VIII Semestre', cycle: 'especialidad', courses: ['Taller de Ingeniería de Software', 'Seguridad Informática', 'Arquitectura de Software', 'Evaluación de Proyectos'] },
      { semester: 'IX Semestre', cycle: 'titulacion', courses: ['Feria de Software I', 'Computación en la Nube', 'Electivo de Especialidad I', 'Gestión Estratégica TI'] },
      { semester: 'X Semestre', cycle: 'titulacion', courses: ['Feria de Software II', 'Electivo de Especialidad II', 'Electivo de Especialidad III', 'Ética y Legislación TI'] },
      { semester: 'XI Semestre', cycle: 'titulacion', courses: ['Memoria de Título', 'Práctica Profesional'] }
    ],
    tuition: { annual: 6340000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-civil-mecanica',
    name: 'Ingeniería Civil Mecánica',
    area: 'Ingeniería',
    regime: 'Pregrado Diurno',
    campus: 'Casa Central, Valparaíso · San Joaquín, Santiago',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Mecánico/a',
    cutoffScore: 724.0,
    minPaesScore: 550,
    requiresM2: true,
    paesWeights: engineeringWeights,
    synonyms: [
      'mecanica', 'maquinas', 'motores', 'termica', 'manufactura', 'robotica',
      'materiales', 'energia', 'mantenimiento', 'fluidos', 'estructuras', 'icm',
      'valpo', 'santiago', 'diurno'
    ],
    summary: 'Diseña máquinas, sistemas térmicos, robótica y soluciones de manufactura avanzada para la industria.',
    description:
      'Forma ingenieros para el diseño, fabricación, simulación y mantenimiento de sistemas mecánicos y energéticos, con énfasis en energías renovables, manufactura avanzada y gestión de activos industriales.',
    curriculum: [
      { semester: 'I Semestre', cycle: 'plan-comun', courses: ['Matemática I', 'Introducción a la Física', 'Programación', 'Introducción a la Ingeniería', 'Educación Física I'] },
      { semester: 'II Semestre', cycle: 'plan-comun', courses: ['Matemática II', 'Física General I', 'Química y Sociedad', 'Dibujo de Ingeniería Mecánica', 'Educación Física II'] },
      { semester: 'III Semestre', cycle: 'plan-comun', courses: ['Matemática III', 'Física General II', 'Estática y Dinámica', 'Ciencia de Materiales', 'Inglés I'] },
      { semester: 'IV Semestre', cycle: 'plan-comun', courses: ['Matemática IV', 'Termodinámica I', 'Resistencia de Materiales', 'Procesos de Manufactura I', 'Inglés II'] },
      { semester: 'V Semestre', cycle: 'especialidad', courses: ['Mecánica de Fluidos', 'Termodinámica II', 'Elementos de Máquinas', 'Métodos Numéricos', 'Humanístico I'] },
      { semester: 'VI Semestre', cycle: 'especialidad', courses: ['Transferencia de Calor', 'Vibraciones Mecánicas', 'Procesos de Manufactura II', 'Electrotecnia', 'Humanístico II'] },
      { semester: 'VII Semestre', cycle: 'especialidad', courses: ['Máquinas Térmicas', 'Diseño Mecánico', 'Automatización y Control', 'Economía I'] },
      { semester: 'VIII Semestre', cycle: 'especialidad', courses: ['Turbomáquinas', 'Ingeniería de Mantenimiento', 'Simulación por Elementos Finitos', 'Evaluación de Proyectos'] },
      { semester: 'IX Semestre', cycle: 'titulacion', courses: ['Energías Renovables', 'Proyecto de Sistemas Mecánicos', 'Gestión de Activos', 'Electivo de Especialidad I'] },
      { semester: 'X Semestre', cycle: 'titulacion', courses: ['Taller de Diseño Mecánico', ' Sustentabilidad Energética', 'Electivo de Especialidad II'] },
      { semester: 'XI Semestre', cycle: 'titulacion', courses: ['Memoria de Título', 'Práctica Profesional Industrial'] }
    ],
    tuition: { annual: 6080000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'arquitectura',
    name: 'Arquitectura',
    area: 'Arquitectura y Diseño',
    regime: 'Pregrado Diurno',
    campus: 'Casa Central, Valparaíso · San Joaquín, Santiago',
    duration: '10 semestres',
    degree: 'Arquitecto/a',
    cutoffScore: 731.5,
    minPaesScore: 520,
    requiresM2: false,
    paesWeights: [
      { label: 'NEM', value: '15%' },
      { label: 'Ranking', value: '25%' },
      { label: 'Comp. Lectora', value: '15%' },
      { label: 'Matemática 1 (M1)', value: '35%' },
      { label: 'Ciencias o Historia', value: '10%' }
    ],
    synonyms: [
      'arquitectura', 'diseno', 'construccion', 'urbanismo', 'edificios', 'ciudad',
      'territorio', 'estructuras', 'proyectos', 'sustentable', 'habitat', 'arq',
      'valpo', 'santiago', 'diurno'
    ],
    summary: 'Proyecta espacios habitables y ciudades integrando diseño arquitectónico, ingeniería estructural y territorio.',
    description:
      'Combina taller de proyectos, tecnología de la construcción, cálculo estructural y urbanismo para formar arquitectos con alta capacidad técnica, sensibles al contexto patrimonial y la sustentabilidad ambiental.',
    curriculum: [
      { semester: 'I Semestre', cycle: 'plan-comun', courses: ['Taller de Introducción a la Arquitectura', 'Medios de Expresión I', 'Matemática Aplicada I', 'Teoría e Historia I', 'Educación Física I'] },
      { semester: 'II Semestre', cycle: 'plan-comun', courses: ['Taller de Espacio y Forma', 'Geometría Arquitectónica', 'Matemática Aplicada II', 'Física para Arquitectura', 'Educación Física II'] },
      { semester: 'III Semestre', cycle: 'plan-comun', courses: ['Taller de Lugar y Clima', 'Sistemas Constructivos I', 'Estática y Estructuras I', 'Historia de la Arquitectura Moderna'] },
      { semester: 'IV Semestre', cycle: 'plan-comun', courses: ['Taller de Vivienda y Ciudad', 'Sistemas Constructivos II', 'Estructuras II', 'Teoría Urbana', 'Inglés I'] },
      { semester: 'V Semestre', cycle: 'especialidad', courses: ['Taller de Equipamiento Público', 'Acondicionamiento Ambiental', 'Estructuras de Hormigón y Acero', 'Urbanismo I'] },
      { semester: 'VI Semestre', cycle: 'especialidad', courses: ['Taller Urbano y Territorio', 'Instalaciones y Energía', 'Modelado BIM', 'Urbanismo II'] },
      { semester: 'VII Semestre', cycle: 'especialidad', courses: ['Taller de Complejidad Estructural', 'Construcción Sustentable', 'Diseño Sísmico', 'Economía y Gestión de Obras'] },
      { semester: 'VIII Semestre', cycle: 'especialidad', courses: ['Taller Avanzado de Arquitectura', 'Patrimonio y Rehabilitación', 'Evaluación de Proyectos Inmobiliarios', 'Electivo I'] },
      { semester: 'IX Semestre', cycle: 'titulacion', courses: ['Taller de Investigación Proyectual', 'Legislación Urbana', 'Electivo de Especialidad II', 'Práctica Profesional'] },
      { semester: 'X Semestre', cycle: 'titulacion', courses: ['Proyecto de Título de Arquitectura'] }
    ],
    tuition: { annual: 5760000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-comercial',
    name: 'Ingeniería Comercial',
    area: 'Negocios y Gestión',
    regime: 'Pregrado Diurno',
    campus: 'Casa Central, Valparaíso · Vitacura, Santiago',
    duration: '10 semestres',
    degree: 'Ingeniero/a Comercial',
    cutoffScore: 742.8,
    minPaesScore: 520,
    requiresM2: true,
    paesWeights: [
      { label: 'NEM', value: '15%' },
      { label: 'Ranking', value: '25%' },
      { label: 'Comp. Lectora', value: '15%' },
      { label: 'Matemática 1 (M1)', value: '25%' },
      { label: 'Matemática 2 (M2)', value: '10%' },
      { label: 'Ciencias o Historia', value: '10%' }
    ],
    synonyms: [
      'comercial', 'negocios', 'economia', 'finanzas', 'empresas', 'administracion',
      'marketing', 'emprendimiento', 'gestion', 'contabilidad', 'inversiones', 'ico',
      'vitacura', 'valpo', 'santiago', 'diurno'
    ],
    summary: 'Lidera organizaciones y emprendimientos con herramientas cuantitativas, finanzas, analítica y estrategia.',
    description:
      'Entrega una sólida formación en economía, finanzas corporativas, marketing, ciencia de datos para negocios y dirección estratégica, con el sello cuantitativo y tecnológico de la USM.',
    curriculum: [
      { semester: 'I Semestre', cycle: 'plan-comun', courses: ['Álgebra y Cálculo I', 'Introducción a la Economía', 'Administración de Empresas', 'Programación para Negocios', 'Educación Física I'] },
      { semester: 'II Semestre', cycle: 'plan-comun', courses: ['Cálculo II', 'Contabilidad Financiera', 'Microeconomía I', 'Taller de Emprendimiento', 'Educación Física II'] },
      { semester: 'III Semestre', cycle: 'plan-comun', courses: ['Álgebra Lineal', 'Probabilidad y Estadística', 'Macroeconomía I', 'Contabilidad de Costos', 'Inglés de Negocios I'] },
      { semester: 'IV Semestre', cycle: 'plan-comun', courses: ['Estadística Inferencial', 'Microeconomía II', 'Comportamiento Organizacional', 'Derecho Empresarial', 'Inglés de Negocios II'] },
      { semester: 'V Semestre', cycle: 'especialidad', courses: ['Econometría', 'Finanzas I', 'Marketing Estratégico', 'Investigación de Operaciones', 'Humanístico I'] },
      { semester: 'VI Semestre', cycle: 'especialidad', courses: ['Macroeconomía II', 'Finanzas Corporativas', 'Investigación de Mercados', 'Gestión de Personas', 'Humanístico II'] },
      { semester: 'VII Semestre', cycle: 'especialidad', courses: ['Evaluación de Proyectos', 'Mercado de Capitales', 'Gestión de Operaciones y Logística', 'Business Analytics'] },
      { semester: 'VIII Semestre', cycle: 'especialidad', courses: ['Dirección Estratégica', 'Marketing Digital', 'Innovación y Modelos de Negocio', 'Electivo Profesional I'] },
      { semester: 'IX Semestre', cycle: 'titulacion', courses: ['Simulación de Negocios', 'Gobierno Corporativo y Ética', 'Electivo Profesional II', 'Práctica Profesional'] },
      { semester: 'X Semestre', cycle: 'titulacion', courses: ['Seminario de Título', 'Taller de Consultoría Estratégica', 'Electivo Profesional III'] }
    ],
    tuition: { annual: 5420000, enrollment: 342000 },
    financing: commonFinancing
  },
  {
    id: 'ing-civil-electrica',
    name: 'Ingeniería Civil Eléctrica',
    area: 'Ingeniería',
    regime: 'Pregrado Diurno',
    campus: 'Casa Central, Valparaíso · San Joaquín, Santiago',
    duration: '11 semestres',
    degree: 'Ingeniero/a Civil Electricista',
    cutoffScore: 719.6,
    minPaesScore: 550,
    requiresM2: true,
    paesWeights: engineeringWeights,
    synonyms: [
      'electrica', 'energia', 'potencia', 'circuitos', 'automatizacion', 'control',
      'redes', 'renovable', 'solar', 'eolica', 'electromovilidad', 'electronica',
      'ice', 'valpo', 'santiago', 'diurno'
    ],
    summary: 'Diseña sistemas de energía eléctrica, redes inteligentes, electromovilidad y control automático.',
    description:
      'Forma profesionales líderes en sistemas eléctricos de potencia, electrónica de potencia, energías renovables, electromovilidad y redes inteligentes (Smart Grids), fundamentales para la transición energética del país.',
    curriculum: [
      { semester: 'I Semestre', cycle: 'plan-comun', courses: ['Matemática I', 'Introducción a la Física', 'Programación', 'Introducción a la Ingeniería', 'Educación Física I'] },
      { semester: 'II Semestre', cycle: 'plan-comun', courses: ['Matemática II', 'Física General I', 'Química y Sociedad', 'Taller de Ingeniería Eléctrica', 'Educación Física II'] },
      { semester: 'III Semestre', cycle: 'plan-comun', courses: ['Matemática III', 'Física General II', 'Teoría de Circuitos I', 'Mediciones Eléctricas', 'Inglés I'] },
      { semester: 'IV Semestre', cycle: 'plan-comun', courses: ['Matemática IV', 'Teoría Electromagnética', 'Teoría de Circuitos II', 'Sistemas Digitales', 'Inglés II'] },
      { semester: 'V Semestre', cycle: 'especialidad', courses: ['Señales y Sistemas', 'Electrónica General', 'Conversión Electromecánica', 'Métodos Numéricos', 'Humanístico I'] },
      { semester: 'VI Semestre', cycle: 'especialidad', courses: ['Máquinas Eléctricas', 'Control Automático I', 'Análisis de Sistemas de Potencia', 'Economía I', 'Humanístico II'] },
      { semester: 'VII Semestre', cycle: 'especialidad', courses: ['Electrónica de Potencia', 'Sistemas de Transmisión y Distribución', 'Accionamientos Eléctricos', 'Probabilidad y Procesos Estocásticos'] },
      { semester: 'VIII Semestre', cycle: 'especialidad', courses: ['Protecciones Eléctricas', 'Subestaciones y Alta Tensión', 'Energías Renovables y Almacenamiento', 'Evaluación de Proyectos'] },
      { semester: 'IX Semestre', cycle: 'titulacion', courses: ['Mercados Eléctricos y Regulación', 'Redes Inteligentes (Smart Grids)', 'Proyecto de Ingeniería Eléctrica', 'Electivo I'] },
      { semester: 'X Semestre', cycle: 'titulacion', courses: ['Taller de Proyectos Eléctricos', 'Electromovilidad', 'Electivo de Especialidad II'] },
      { semester: 'XI Semestre', cycle: 'titulacion', courses: ['Memoria de Título', 'Práctica Profesional Industrial'] }
    ],
    tuition: { annual: 6080000, enrollment: 342000 },
    financing: commonFinancing
  }
]

export const specialAdmission = {
  title: 'Admisión Especial 2027',
  description: 'Postula sin depender exclusivamente de la PAES: ingreso para deportistas destacados, mujeres en STEM, cambio de universidad, estudios en el extranjero y titulados.',
  dates: [
    { label: 'Postulación online', value: '3 nov – 15 dic 2026' },
    { label: 'Publicación de resultados', value: '8 ene 2027' },
    { label: 'Periodo de matrícula', value: '12 – 16 ene 2027' }
  ],
  requirements: [
    'Licencia de Enseñanza Media y concentración de notas (NEM mínimo 5.5 según vía).',
    'Cédula de identidad o pasaporte vigente.',
    'Certificado o carpeta de antecedentes según vía (Deportista Destacado, Mujeres Líderes STEM, Traslado de Universidad o Diploma IB).'
  ]
}
