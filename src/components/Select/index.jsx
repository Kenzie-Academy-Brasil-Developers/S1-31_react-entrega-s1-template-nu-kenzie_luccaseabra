import '../../styles/index.css'
import styles from './index.module.css'

function Select({type, setType}) {

    function handleType(event) {
        setType(event.target.value)
    }

    return (
        <select className={styles.select} value={type} onChange={handleType}>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
        </select>
    )
}

export default Select;