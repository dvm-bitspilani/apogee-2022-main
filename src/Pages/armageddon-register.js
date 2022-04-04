import { ArmageddonModal } from '../Components/ArmageddonModal/ArmageddonModal'
import NavBar from '../Components/Navbar/Navbar';

const ArmageddonRegister = () => {
    return (
        <>
            <NavBar type="arma" />
            <div class="arma-wrapper">
                <ArmageddonModal />
            </div>
        </>
    )
}

export default ArmageddonRegister;