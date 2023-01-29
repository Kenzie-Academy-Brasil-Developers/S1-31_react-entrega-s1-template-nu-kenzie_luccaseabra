import bar  from "../../assets/emptyCardBar.svg"
import styles from "./style.module.css"

function EmptyCard() {
    return (
        <div className={styles.emptyCard}>
            <div className={styles.bigBar} src={bar} alt="Barra maior"></div>

            <div className={styles.smallBar} src={bar} alt="Barra menor"></div>
        </div>
    )
}

export default EmptyCard