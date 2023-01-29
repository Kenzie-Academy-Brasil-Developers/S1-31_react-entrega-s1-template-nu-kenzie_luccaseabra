import styles from './style.module.css'
import '../../styles/index.css'
import logo from './../../assets/logo.svg'
import landinPageImage from './../../assets/landingPageImage.svg'

function LandingPage({setPage}) {


    function handlePage(event) {
        event.preventDefault()

        setPage('HomePage')
    }

    return (
        <main className={styles.landingPage}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <img src={logo} alt="Logo da NuKenzie"/>
                    <h1 className='title'>Centralize o controle das suas finanças</h1>
                    <p className='headline'>de forma rápida e segura</p>

                    <button className='pinkButton' onClick={handlePage}>Iniciar</button>
                </div>

                <img src={landinPageImage} alt="Ilustração" />
            </div>

        
        </main>
    )
}

export default LandingPage;