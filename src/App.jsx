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

export default function App() {
    return (<>
        <div className='main-container'>
            <NavBar></NavBar>
            <StrikeLogo></StrikeLogo>
            <MemberShipPlane></MemberShipPlane>
            <Whatweoffer></Whatweoffer>
            <WhyChooseUs></WhyChooseUs>
            <AboutCompany></AboutCompany>
            <AboutMentor></AboutMentor>
            <Review></Review>
            <Questions></Questions>
            <FooterSection></FooterSection>
        </div>
    </>)
}