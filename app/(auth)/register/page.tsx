export const metadata = {
  title: 'Sua ideia - SyncUp',
  description: 'Na SyncUp Brasil, transformamos ideias em soluções digitais personalizadas para impulsionar o seu negócio. Conte conosco para inovar e se destacar no mercado!',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bem-vindo. Conte mais sobre sua ideia.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nome <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Digite seu name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Digite seu endereço de email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="tel">Celular <span className="text-red-600">*</span></label>
                  <input id="tel" type="text" className="form-input w-full text-gray-800" placeholder="Digite seu celular" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="tel">Sua ideia <span className="text-red-600">*</span></label>
                  <textarea className="form-input w-full text-gray-800" placeholder="Digite sua ideia para entendermos melhor" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-[#2c29a4] hover:bg-[#232183] w-full">Enviar</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                Para enviar o registro, você aceita os <a className="underline" href="#0">termos & condições</a>, e a <a className="underline" href="#0">política de privacidade</a>.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
