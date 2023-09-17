import ContactBanner from "@/components/ContactBanner/ContactBanner"
import ContactForm from "@/components/ContactForm/ContactForm"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import React from 'react'

const contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Header/>
      <ContactBanner/>
      <ContactForm/>
      <Footer />
    </div>
  )
}

export default contact