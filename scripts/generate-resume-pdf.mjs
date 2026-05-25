/**
 * Generates public/Jalal_Hussain_Resume.pdf from portfolio data.
 * Run: node scripts/generate-resume-pdf.mjs
 */
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outPath = path.join(__dirname, '../public/Jalal_Hussain_Resume.pdf')

const lines = [
  'JALAL HUSSAIN',
  'MERN Stack Developer & AI/ML Enthusiast',
  'jalal143880@gmail.com  |  +92 340 8095 062  |  Skardu, Pakistan',
  'github.com/Jallal-Hussain  |  linkedin.com/in/jalalhussain',
  '',
  'SUMMARY',
  '- MERN developer with production experience at NetBots — full-stack apps and AI systems.',
  '- Shipped FastAPI/LLM RAG, Next.js tour sites, ArcFace attendance, VPS deployments.',
  '',
  'EXPERIENCE',
  'MERN Stack Developer — NetBots (Mar 2025 – Oct 2025)',
  '- MERN apps: Express APIs, MongoDB, React/Next.js for client delivery.',
  '- CAG (Chat with Your PDF): FastAPI, PDF ingestion, LLM chat, auth, summarization.',
  '- Tour agency site: Next.js, Tailwind, Express, MongoDB, VPS deployment.',
  '',
  'MERN Stack Developer Internship — NetBots (Jun 2024 – Dec 2024)',
  '- MERN certification; Hotel Management admin panel; REST APIs & React UIs.',
  '',
  'PROJECTS',
  '- CAG — FastAPI + LLM RAG (Hope_to_skills_Python_Project)',
  '- Tour & Travel Web App (NextJs_project)',
  '- Face Recognition Attendance — ArcFace, OCR, Gradio',
  '- Hotel Management System — MERN (Rinor_Project_1)',
  '',
  'CERTIFICATIONS',
  '- Basic Python Development — Hope to Skills (Apr 2025)',
  '- MERN Stack Front to Back — Coursera (Feb 2025)',
  '- MERN Stack Web Development — NetBots (Apr 2024)',
  '- HTML, CSS & JavaScript — Coursera (Aug 2023)',
  '',
  'EDUCATION',
  'BS Computer Science — University of Baltistan, Skardu (2023 – Present)',
]

async function main() {
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)

  let page = doc.addPage([612, 792])
  const margin = 50
  let y = 742
  const lineHeight = 14
  const maxWidth = 512

  const wrap = (text, size, f) => {
    const words = text.split(' ')
    let line = ''
    for (const word of words) {
      const test = line ? `${line} ${word}` : word
      if (f.widthOfTextAtSize(test, size) > maxWidth) {
        if (line) {
          page.drawText(line, { x: margin, y, size, font: f, color: rgb(0.12, 0.1, 0.18) })
          y -= lineHeight
          if (y < margin) {
            page = doc.addPage([612, 792])
            y = 742
          }
        }
        line = word
      } else {
        line = test
      }
    }
    if (line) {
      page.drawText(line, { x: margin, y, size, font: f, color: rgb(0.12, 0.1, 0.18) })
      y -= lineHeight
    }
  }

  for (const raw of lines) {
    if (y < margin + lineHeight) {
      page = doc.addPage([612, 792])
      y = 742
    }
    if (!raw) {
      y -= 6
      continue
    }
    const isHeading =
      raw === raw.toUpperCase() && raw.length < 40 && !raw.includes('@') && !raw.includes('-')
    const isTitle = raw === 'JALAL HUSSAIN'
    if (isTitle) {
      page.drawText(raw, { x: margin, y, size: 18, font: bold, color: rgb(0.18, 0.1, 0.26) })
      y -= 22
    } else if (isHeading) {
      y -= 4
      page.drawText(raw, { x: margin, y, size: 11, font: bold, color: rgb(0.18, 0.1, 0.26) })
      y -= 16
    } else {
      wrap(raw, 10, font)
    }
  }

  const bytes = await doc.save()
  fs.writeFileSync(outPath, bytes)
  console.log('Wrote', outPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
