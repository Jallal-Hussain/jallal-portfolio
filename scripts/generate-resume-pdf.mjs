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
  'MERN Stack Developer & AI/ML/DL Enthusiast',
  'jalal143880@gmail.com  |  +92 340 8095 062',
  'linkedin.com/in/jalalhussain  |  github.com/jallal-hussain',
  '',
  'PROFESSIONAL SUMMARY',
  'A highly motivated Computer Science student with a proven aptitude for designing and implementing AI and Deep Learning systems. Focused on turning theoretical concepts into robust, functional applications, demonstrated by practical experience spanning Conversational AI (LLM RAG systems) and Computer Vision (ArcFace-based recognition/OCR). I utilize Python (FastAPI) and the MERN stack to architect and deploy systems that are both high-performance and user-friendly. Eager to stand with the modern era of research, I seek to apply my hands-on experience and problem-solving skills to foundational challenges.',
  '',
  'EDUCATION',
  'BS (Computer Science) — University of Baltistan, Skardu (2023 – Present)',
  'FSC (Pre-Medical) — Public School and College Skardu (2022 – 2023)',
  '',
  'EXPERIENCES',
  'MERN-Stack Developer — NetBots (SMC-Private) Limited (Mar 2025 – Oct 2025)',
  '- Developing scalable web applications using the MERN stack.',
  '- Responsible for full-stack implementation and prototyping of client requirements.',
  '',
  'MERN-Stack Developer (Internship) — NetBots (SMC-Private) Limited (Jun 2024 – Dec 2024)',
  '- Gained hands-on experience in full-stack web development.',
  '- Assisted in designing and deploying client-side and server-side architectures.',
  '',
  'PROJECTS',
  'Python FastAPI and LLM RAG System (2025)',
  'The project is organized into Backend (Python FastAPI) and Frontend (React/Vite) components that allow users to upload PDF documents, extract their content, and interact with them using a Large Language Model (LLM).',
  '- Features: User Authentication, PDF Upload & Management, Document Querying, Conversational AI, Document Summarization.',
  '',
  'Tour & Travel Web Application (2025)',
  'Developed a tour and travel web application for a client using Next.js and the MERN stack with SEO implementation.',
  '- Key Features: Trips, Blogs, Testimonials, Dashboard for data management.',
  '- Deployment: Hosting and deployment managed on a VPS server.',
  '',
  'Face Recognition Attendance System (2025)',
  'Developed a dual-mode attendance system utilizing Deep Learning-based Face Recognition (ArcFace embeddings and a trained classifier) and OCR. This project required the practical application of state-of-the-art vision models and multi-modal data processing.',
  '- Tech Stack: MongoDB, Express, React, Node.js.',
  '- Features: Admin Dashboard, Data Management, Reporting.',
  '',
  'Hotel Management System (2023)',
  'Developed using the MERN stack to streamline hotel operations. Features full CRUD functionality for bookings, inventory, and staff management.',
  '',
  'SKILLS',
  '- Languages: Python, JavaScript, HTML, CSS',
  '- Frontend: React, Next.js, Redux, Tailwind CSS, Bootstrap, Material UI',
  '- Backend: Node.js, Express, FastAPI',
  '- Database: MongoDB, MySQL, PostgreSQL, SQLite',
  '- AI & ML: Deep Learning, LLM, RAG Systems, Computer Vision (ArcFace, OCR)',
  '- Tools & DevOps: Git, GitHub, VPS Hosting and Deployment',
  '',
  'CERTIFICATIONS',
  '- Basic Python Development — Hope to Skills (Apr 2025)',
  '- MERN Stack Front to Back — Coursera (Feb 2025)',
  '- MERN Stack Web Development — NetBots (Apr 2024)',
  '- HTML, CSS & JavaScript for Web Developers — Coursera (Aug 2023)',
  '',
  'INTERESTS',
  'Artificial Intelligence, Agentic AI, Deep Learning Research, Full-Stack Prototyping',
  '',
  'LANGUAGES',
  '- English: Conversational',
  '- Urdu: Native Fluent',
  '',
  'REFERENCES',
  'References are available upon request.',
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

  const wrap = (text, size, f, indent = 0) => {
    const words = text.split(' ')
    let line = ''
    for (const word of words) {
      const test = line ? `${line} ${word}` : word
      if (f.widthOfTextAtSize(test, size) > maxWidth - indent) {
        if (line) {
          page.drawText(line, { x: margin + indent, y, size, font: f, color: rgb(0.12, 0.1, 0.18) })
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
      page.drawText(line, { x: margin + indent, y, size, font: f, color: rgb(0.12, 0.1, 0.18) })
      y -= lineHeight
    }
  }

  const drawDivider = () => {
    page.drawLine({
      start: { x: margin, y: y + 4 },
      end: { x: margin + maxWidth, y: y + 4 },
      thickness: 0.5,
      color: rgb(0.7, 0.7, 0.75),
    })
  }

  for (const raw of lines) {
    if (y < margin + lineHeight) {
      page = doc.addPage([612, 792])
      y = 742
    }

    // blank line — small gap
    if (!raw) {
      y -= 6
      continue
    }

    const isName = raw === 'JALAL HUSSAIN'
    const isHeading =
      !isName &&
      raw === raw.toUpperCase() &&
      raw.length < 40 &&
      !raw.includes('@') &&
      !raw.includes('|') &&
      !raw.startsWith('-')
    const isSubtitle = raw === 'MERN Stack Developer & AI/ML/DL Enthusiast'
    const isContact =
      raw.includes('@') || raw.includes('linkedin') || raw.includes('github')
    const isBullet = raw.startsWith('-')
    const isProjectTitle =
      !isBullet &&
      !isHeading &&
      !isName &&
      !isSubtitle &&
      !isContact &&
      /\(\d{4}.*\)$/.test(raw) &&
      raw.split(' ').length < 12
    const isExpTitle =
      !isBullet &&
      !isHeading &&
      !isName &&
      !isSubtitle &&
      !isContact &&
      !isProjectTitle &&
      raw.includes(' — ') &&
      raw.includes('NetBots')

    if (isName) {
      page.drawText(raw, { x: margin, y, size: 20, font: bold, color: rgb(0.1, 0.22, 0.42) })
      y -= 24
    } else if (isSubtitle) {
      page.drawText(raw, { x: margin, y, size: 11, font, color: rgb(0.3, 0.3, 0.35) })
      y -= 15
    } else if (isContact) {
      page.drawText(raw, { x: margin, y, size: 9.5, font, color: rgb(0.25, 0.35, 0.55) })
      y -= 13
    } else if (isHeading) {
      y -= 3
      drawDivider()
      y -= 2
      page.drawText(raw, { x: margin, y, size: 10.5, font: bold, color: rgb(0.1, 0.22, 0.42) })
      y -= 16
    } else if (isExpTitle) {
      page.drawText(raw, { x: margin, y, size: 10, font: bold, color: rgb(0.12, 0.1, 0.18) })
      y -= lineHeight
    } else if (isProjectTitle) {
      page.drawText(raw, { x: margin, y, size: 10, font: bold, color: rgb(0.12, 0.1, 0.18) })
      y -= lineHeight
    } else if (isBullet) {
      wrap(raw, 10, font, 8)
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
