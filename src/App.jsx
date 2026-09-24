import React, { useState } from 'react'
import NavBar from '../component/nar-bar/navbar.jsx'
import StrikeLogo from '../component/Body/strikelogo.jsx'
import MemberShipPlane from '../component/Body/memberShipPlans.jsx'
import Whatweoffer from '../component/Body/whatweoffer.jsx'
import WhyChooseUs from '../component/Body/whyChooseus.jsx'
import AboutCompany from '../component/Body/aboutcompany.jsx'
import AboutMentor from '../component/Body/aboutmentor.jsx'
import Review from '../component/Body/review.jsx'
import Questions from '../component/Body/questioans.jsx'
import FooterSection from '../component/footer/footersection.jsx'
import TorchBoyWidget from '../component/Body/torchBoyWidget.jsx'
import ScrollReveal from '../component/common/ScrollReveal.jsx'
import Card from '../component/Body/commentCard.jsx'
export default function App() {
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);

    return (<>
        <div className='main-container'>
            <NavBar />
            <StrikeLogo />
            <ScrollReveal animation="scroll-open">
                <MemberShipPlane isDiscountApplied={isDiscountApplied} />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <Whatweoffer />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <WhyChooseUs />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <AboutCompany />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <AboutMentor />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <Review />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <Questions />
            </ScrollReveal>

            <ScrollReveal animation="scroll-open">
                <FooterSection />
            </ScrollReveal>

            <TorchBoyWidget onApplyDiscount={() => setIsDiscountApplied(true)} />
        </div>
    </>)
}