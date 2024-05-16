import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#474593" offset="0%" />
              <stop stopColor="#8A63D2" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 relative z-10">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-center" data-aos="zoom-y-out">Transformando ideias em <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#474593] to-purple-400">Soluções</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Na SyncUp Brasil, transformamos ideias em soluções digitais personalizadas para impulsionar o seu negócio. Conte conosco para inovar e se destacar no mercado!</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-[#474593] hover:bg-[#474190] w-full mb-4 sm:w-auto sm:mb-0" href="mailto:contato@syncupbrasil.tech">Fale conosco</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/register">Mande sua ideia</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}