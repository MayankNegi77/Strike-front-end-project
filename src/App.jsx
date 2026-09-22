import NavBar from '../component/nar-bar/navbar.jsx'
import StrikeLogo from '../component/Body/strikelogo.jsx'
import MemberShipPlane from '../component/Body/memberShipPlans.jsx'
import Whatweoffer from '../component/Body/whatweoffer.jsx'
import WhyChooseUs from '../component/Body/whyChooseus.jsx'
import AboutCompany from '../component/Body/aboutcompany.jsx'

export default function App() {
    return (<>
        <div className='main-container'>
            <NavBar></NavBar>
            <StrikeLogo></StrikeLogo>
            <MemberShipPlane></MemberShipPlane>
            <Whatweoffer></Whatweoffer>
            <WhyChooseUs></WhyChooseUs>
            <AboutCompany></AboutCompany>
        </div>
    </>)
}