import { formatCLP, normalize } from './format'

// Convierte caracteres UTF-8 comunes en español a códigos octales WinAnsiEncoding de PDF
const toPdfText = (str) => {
  const winAnsiMap = {
    'á': '\\341', 'é': '\\351', 'í': '\\355', 'ó': '\\363', 'ú': '\\372',
    'Á': '\\301', 'É': '\\311', 'Í': '\\315', 'Ó': '\\323', 'Ú': '\\332',
    'ñ': '\\361', 'Ñ': '\\321', 'ü': '\\374', 'Ü': '\\334',
    '°': '\\260', 'º': '\\272', 'ª': '\\252', '·': '\\267', '–': '-', '—': '-',
    '“': '"', '”': '"', '‘': "'", '’': "'"
  }

  return String(str)
    .replace(/[\\()]/g, (match) => `\\${match}`)
    .replace(/[^\x20-\x7E]/g, (ch) => winAnsiMap[ch] || '')
}

export function downloadCurriculumPdf (career) {
  const pageWidth = 842 // A4 Horizontal (Landscape) para malla por semestres
  const pageHeight = 595
  const ops = []

  // Encabezado institucional USM
  ops.push('0.043 0.184 0.357 rg') // #0b2f5b
  ops.push(`0 ${pageHeight - 78} ${pageWidth} 78 re f`)

  ops.push('0.949 0.718 0.020 rg') // #f2b705 (línea acento USM)
  ops.push(`0 ${pageHeight - 82} ${pageWidth} 4 re f`)

  // Título en blanco
  ops.push('1 1 1 rg')
  ops.push(`BT /F2 18 Tf 32 ${pageHeight - 34} Td (${toPdfText(`Malla Curricular — ${career.name}`)}) Tj ET`)
  ops.push('0.88 0.92 0.98 rg')
  ops.push(
    `BT /F1 10 Tf 32 ${pageHeight - 54} Td (${toPdfText(
      `Universidad Técnica Federico Santa María · ${career.degree} · Duración: ${career.duration}`
    )}) Tj ET`
  )
  ops.push(
    `BT /F1 9 Tf 32 ${pageHeight - 68} Td (${toPdfText(
      `Sedes: ${career.campus} · Puntaje de corte referencial: ${career.cutoffScore} pts · Arancel anual: ${formatCLP(career.tuition.annual)}`
    )}) Tj ET`
  )

  // Grilla de semestres (2 filas de hasta 6 columnas)
  const semesters = career.curriculum
  const colsPerRow = 6
  const marginX = 28
  const gapX = 10
  const colWidth = Math.floor((pageWidth - marginX * 2 - gapX * (colsPerRow - 1)) / colsPerRow)
  const rowHeight = 205
  const startYTop = pageHeight - 102

  const cycleColors = {
    'plan-comun': '0.043 0.184 0.357',
    especialidad: '0.110 0.365 0.600',
    titulacion: '0.090 0.450 0.340'
  }

  semesters.forEach((sem, idx) => {
    const row = Math.floor(idx / colsPerRow)
    const col = idx % colsPerRow
    const x = marginX + col * (colWidth + gapX)
    const topY = startYTop - row * (rowHeight + 16)
    const boxBottomY = topY - rowHeight

    // Fondo de tarjeta de semestre
    ops.push('0.965 0.973 0.984 rg')
    ops.push('0.84 0.87 0.91 RG 0.8 w')
    ops.push(`${x} ${boxBottomY} ${colWidth} ${rowHeight} re B`)

    // Cabecera de semestre
    const headerColor = cycleColors[sem.cycle] || '0.043 0.184 0.357'
    ops.push(`${headerColor} rg`)
    ops.push(`${x} ${topY - 24} ${colWidth} 24 re f`)

    ops.push('1 1 1 rg')
    ops.push(`BT /F2 9.5 Tf ${x + 8} ${topY - 16} Td (${toPdfText(sem.semester)}) Tj ET`)

    // Lista de asignaturas del semestre
    let courseY = topY - 40
    sem.courses.forEach((course) => {
      const cleanCourse = course.trim()
      // Dividir en 2 líneas si el nombre del ramo es largo
      const maxChars = 22
      let lines = [cleanCourse]
      if (cleanCourse.length > maxChars) {
        const words = cleanCourse.split(' ')
        let line1 = ''
        let line2 = ''
        words.forEach((w) => {
          if ((line1 + ' ' + w).trim().length <= maxChars) {
            line1 = (line1 + ' ' + w).trim()
          } else {
            line2 = (line2 + ' ' + w).trim()
          }
        })
        lines = line2 ? [line1, line2] : [line1]
      }

      const boxH = lines.length > 1 ? 26 : 19
      ops.push('1 1 1 rg')
      ops.push('0.86 0.89 0.93 RG 0.6 w')
      ops.push(`${x + 5} ${courseY - boxH + 6} ${colWidth - 10} ${boxH} re B`)

      ops.push('0.06 0.11 0.18 rg')
      ops.push(`BT /F1 7.5 Tf ${x + 9} ${courseY - 5} Td (${toPdfText(lines[0])}) Tj ET`)
      if (lines[1]) {
        ops.push(`BT /F1 7.5 Tf ${x + 9} ${courseY - 14} Td (${toPdfText(lines[1])}) Tj ET`)
      }

      courseY -= boxH + 4
    })
  })

  // Pie de página con leyenda
  ops.push('0.33 0.38 0.46 rg')
  ops.push(
    `BT /F1 8.5 Tf 28 24 Td (${toPdfText(
      'Documento informativo generado desde el Portal de Admisión USM (admision.usm.cl). Plan de estudios sujeto a actualizaciones académicas.'
    )}) Tj ET`
  )

  const contentStream = ops.join('\n')

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n`,
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n',
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n',
    `6 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`
  ]

  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((obj) => {
    offsets.push(pdf.length)
    pdf += obj
  })

  const xrefStart = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += '0000000000 65535 f \n'
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

  const blob = new Blob([pdf], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const slug = normalize(career.name).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const link = document.createElement('a')
  link.href = url
  link.download = `Malla-Curricular-${slug}-USM.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}

