import '../../styles/index.css'
import styles from './index.module.css'

import { v4 as uuid} from 'uuid'

import Header from "../../components/Header";
import Select from '../../components/Select';
import EmptyCard from '../../components/EmptyCard';
import Card from '../../components/Card';
import { useState } from 'react';

function HomePage({listTransactions, setListTransactions, setPage}){

    const [description, setDescription] = useState('')
    const [type, setType] = useState('entrada');
    const [transactionValue, setTransactionValue] = useState('')

    function totalValue() {
        let transactionsValues = listTransactions.map(transaction => transaction.value)
        let finalValue = transactionsValues.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

        return finalValue

    }

    function handleDescription(event) {
        setDescription(event.target.value)
    }

    function handleValue(event) {
        setTransactionValue(event.target.value)
    }

    function addTransaction(event) {
        event.preventDefault()
        
        if(description.length === 0 || isNaN(parseInt(transactionValue))){

            return alert('Dados incompletos');

        } else {

            const newTransaction = {
                id: uuid(),
                description: description,
                type: type,
                value: parseInt(transactionValue)
            }
        
            if(type === 'saída'){
                newTransaction.value *= -1
            }
            
            setListTransactions([...listTransactions, newTransaction])
            setDescription('')
            setTransactionValue('')

        }


    }

    function getMonth() {
        const date = Date();
        const month = date.slice(4,7);

        if(month === 'Jan'){
            return 'Janeiro'
        } else if(month === 'Fev'){
            return 'Fevereiro'
        } else if(month === 'Mar'){
            return 'Março'
        } else if(month === 'Abr'){
            return 'Abril'
        } else if(month === 'Mai'){
            return 'Maio'
        } else if(month === 'Jun'){
            return 'Junho'
        } else if(month === 'Jul'){
            return 'Julho'
        } else if(month === 'Ago'){
            return 'Agosto'
        } else if(month === 'Set'){
            return 'Setembro'
        } else if(month === 'Out'){
            return 'Outubro'
        } else if(month === 'Nov'){
            return 'Novembro'
        } else if(month === 'Dez'){
            return 'Dezembro'
        }
    }


    return (
        <>
            <Header setPage={setPage}/>

            <main className={styles.homeMain}>

                <div className={styles.formAndTotal}>
                    <form className={styles.formAddNewLaunch} onSubmit={addTransaction}>
                        <h2 className="title three">Descrição</h2>
                        <div className={styles.inputContainer}>
                            <input placeholder='Digite aqui sua descrição' type='text' value={description} onChange={handleDescription}/>
                        </div>
                        <p className={styles.example}>Ex: Compra de roupas</p>
                        <div className={styles.valueAndType}>
                            <div className={styles.value}>
                                <p>Valor</p>
                                <div className={styles.inputContainer}>
                                    <input type='number' placeholder={'1'} value={transactionValue} onChange={handleValue}/>
                                    <p className='currency'>R$</p>
                                </div>
                            </div>
                            <div className={styles.select}>
                                <p>Tipo de valor</p>
                                <Select type={type} setType={setType}/>
                            </div>
                        </div>
                        <button className='pinkButton'>Inserir valor</button>
                    </form>

                    {listTransactions.length > 0 ? (

                        <div className={styles.totalValue}>
                            <h3 className='tittle three'>Valor total:</h3>
                            <p className={styles.valueReference}>O valor se refere ao saldo</p>
                            <p className={styles.value}>R$ {totalValue()}</p>
                        </div>

                    ):(<></>)}
                </div>


                <div className={styles.resume}>
                    <h2 className='title three'>Resumo Financeiro</h2>
                    <div className={styles.launchContainer}>
                        {listTransactions.length > 0 ? (
                            <>
                               {listTransactions.map(transaction => (
                                    <Card 
                                        key={transaction.id}
                                        id={transaction.id}
                                        description={transaction.description}
                                        type={transaction.type}
                                        value={transaction.value}
                                        month={getMonth()}
                                        listTransactions={listTransactions}
                                        setListTransactions={setListTransactions}
                                    />
                               ))}
                            </>
                            // listTransactions.map(transaction => )
                        ) : (
                            <>
                                <h3 className='title two'>Você ainda não possui nenhum lançamento</h3>
                                <EmptyCard />
                                <EmptyCard />
                                <EmptyCard />
                            </>
                        )}
                    </div>
                </div>


            </main>

        </>
    )
}

export default HomePage;