import { MainPhoto } from '@/components/main-photo'
import { TextPhoto } from '@/components/text-photo'
import { Info } from '@/components/info'
import { ContactUs } from '@/components/contact-us'
import { useState } from 'react'
import { Footer } from '@/components/footer'

export default function Home() {
  const [lang, setLang] = useState<string>("RU")
  return (
    <>
      <MainPhoto lang={lang} setLang={setLang} />
      <TextPhoto lang={lang} />
      <Info lang={lang} />
      <ContactUs lang={lang} />
      <Footer />
    </>
  )
}
