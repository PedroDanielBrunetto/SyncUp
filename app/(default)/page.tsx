export const metadata = {
  title: 'SyncUp Brasil',
  description: 'Na SyncUp Brasil, transformamos ideias em soluções digitais personalizadas para impulsionar o seu negócio. Conte conosco para inovar e se destacar no mercado!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
