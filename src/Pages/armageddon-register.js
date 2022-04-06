import { ArmageddonModal } from '../Components/ArmageddonModal/ArmageddonModal'
import NavBar from '../Components/Navbar/Navbar';

const ArmageddonRegister = () => {
    return (
        <div className='mainWrapperArma'>
            <NavBar type="arma" />
            <div class="arma-wrapper">
                <ArmageddonModal />
            </div>
        </div>
    )
}

export default ArmageddonRegister;