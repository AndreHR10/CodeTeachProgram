
export default function Plans({ lang }) {
  const plans = [
    { name: {es:'Básico', en:'Basic', pt:'Básico'}, price:'Gratis' },
    { name: {es:'Plus', en:'Plus', pt:'Plus'}, price:'$9.99/mes' },
    { name: {es:'Pro', en:'Pro', pt:'Pro'}, price:'$19.99/mes' }
  ]

  const texts = {
    es: 'Suscribirme',
    en: 'Subscribe',
    pt: 'Assinar'
  }

  const handleSelect = (planName) => {
    alert(`Has seleccionado el plan ${planName}. ¡Gracias por tu preferencia!`);
  }

  return (
    <div className="mt-10 grid md:grid-cols-3 gap-6 px-10">
      {plans.map((plan, idx)=>(
        <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-200">
          <h3 className="text-2xl font-semibold text-blue-600">{plan.name[lang]}</h3>
          <p className="text-gray-500 mt-2">{plan.price}</p>
          <button onClick={()=>handleSelect(plan.name[lang])}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            {texts[lang]}
          </button>
        </div>
      ))}
    </div>
  )
}
