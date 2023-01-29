
import styles from './index.module.css';
import removeBtn from '../../assets/removeBtn.svg'


function Card({id, description, type, value, month, listTransactions, setListTransactions}) {

    function removeTransaction(event){
        const itemId = event.target.id
        setListTransactions(listTransactions.filter(transaction => transaction.id !== itemId))
    }

    return (
        <div className={styles.card}>
            <div className={type === 'entrada' ? (styles.greenBar):(styles.redBar)}></div>
            <div className={styles.content}>

                <div className={styles.descriptionAndType}>
                    <h3 className='title three'>{description} - Mês de {month}</h3>
                    <p className={styles.type}>{type}</p>
                </div>

                <div className={styles.valueAndButton}>
                    <p className={styles.value}>R$ {value}</p>
                    <button id={id} onClick={removeTransaction}><img id={id} src={removeBtn} alt="botão de remover" /></button>
                </div>
                
            </div>
        </div>
    )
}

export default Card;