import NavBar from '../component/nar-bar/navbar.jsx'
import StrikeLogo from '../component/Body/strikelogo.jsx'
import MemberShipPlane from '../component/Body/memberShipPlans.jsx'
export default function App() {
    return (<>
        <div className='main-container'>
            <NavBar></NavBar>
            <StrikeLogo></StrikeLogo>
            <MemberShipPlane></MemberShipPlane>
        </div>
    </>)
}