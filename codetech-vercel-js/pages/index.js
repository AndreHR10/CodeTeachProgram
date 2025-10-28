
import Head from 'next/head'
import { useState } from 'react'
import Plans from '../components/Plans'

export default function Home() {
  const [lang, setLang] = useState('es')

  const texts = {
    es: { title: 'Bienvenido a CodeTech', subtitle: 'Impulsa tu carrera como desarrollador' },
    en: { title: 'Welcome to CodeTech', subtitle: 'Boost your developer career' },
    pt: { title: 'Bem-vindo ao CodeTech', subtitle: 'Impulsione sua carreira de desenvolvedor' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-gray-800">
      <Head><title>CodeTech</title></Head>
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">CodeTech</h1>
        <select className="border p-2 rounded" value={lang} onChange={(e)=>setLang(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">{texts[lang].title}</h2>
        <p className="mt-4 text-lg">{texts[lang].subtitle}</p>
      </div>
      <Plans lang={lang}/>
    </div>
  )
}
