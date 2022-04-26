import React from 'react'
import Content from '../components/Content/Content'
import SecondaryContent from '../components/Content/SecondaryContent/SecondaryContent'
import DisplayContent from '../components/DisplayContent/DisplayContent'
import Footer from '../components/Footer/Footer'
//import { Section } from '../components/section/Section'
import SupportSection from '../components/SupportSection/SupportSection'




function Home() {
  return (
    <div>
        <Content />
        
        {/* <Section /> */}
        <DisplayContent />
        <SecondaryContent
          headingBefore="Call our store and takeaway when it" 
          headingAfter="you best." 
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
          btnText="Ph +61 233 2333"
          image="home.png"
        />
        <SupportSection />
        <Footer />
    </div>
  )
}

export default Home