import './../../styles/index.css'
import styles from './index.module.css'
import logo from './../../assets/logoBlack.svg'


function Header({setPage}) {

    function handlePage(event) {
        event.preventDefault()

        setPage('LandingPage')
    }
    return (
        <header>
            <div className={styles.container}>
                <img src={logo} alt="Logo da NuKenzie" />
                <button className='greyButton' onClick={handlePage}>Inicio</button>
            </div>
        </header>
    )
}

export default Header;