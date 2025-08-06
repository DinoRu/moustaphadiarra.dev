// app/cv/page.tsx
'use client'

import { useRef } from 'react'
import html2pdf from 'html2pdf.js'

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = () => {
    if (!cvRef.current) return

    const opt = {
      margin: 0.5,
      filename: 'CV_Moustapha_Diarra.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    }

    html2pdf().set(opt).from(cvRef.current).save()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Mon CV</h1>
        <button
          onClick={handleDownloadPDF}
          className="rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800"
        >
          Télécharger en PDF
        </button>
      </div>

      <div
        ref={cvRef}
        className="rounded-lg bg-white p-6 text-gray-800 shadow-md print:bg-white print:p-0 print:shadow-none"
      >
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Profil</h2>
          <p>
            Ingénieur en génie logiciel avec une expertise en développement web et mobile. Passionné
            par les systèmes distribués, les API REST et les architectures modernes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Expérience professionnelle</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">DagEnergi – Ingénieur programmeur</h3>
              <p className="text-sm text-gray-500">Russie — Depuis 2023</p>
              <ul className="list-inside list-disc">
                <li>Développement d'applications internes (facturation, gestion)</li>
                <li>Utilisation de FastAPI, Flutter, PostgreSQL, Docker</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">DAGTOUR – Développeur backend</h3>
              <p className="text-sm text-gray-500">Russie — 2018 à 2023</p>
              <ul className="list-inside list-disc">
                <li>Conception du backend d’une plateforme touristique</li>
                <li>Création d’API REST sécurisées et performantes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Formation</h2>
          <div>
            <h3 className="font-bold">Master en Génie Logiciel</h3>
            <p className="text-sm text-gray-500">Université Polytechnique du Daghestan</p>
            <p>Mention excellente – Diplômé en 2023</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Compétences</h2>
          <ul className="list-inside list-disc columns-2 gap-4">
            <li>Python, FastAPI, Django</li>
            <li>Flutter, Dart</li>
            <li>Docker, Kubernetes</li>
            <li>PostgreSQL, MongoDB</li>
            <li>Linux, Git, CI/CD</li>
            <li>React, Tailwind CSS</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Langues</h2>
          <ul className="list-inside list-disc">
            <li>Français (langue maternelle)</li>
            <li>Russe (courant)</li>
            <li>Anglais (technique)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
