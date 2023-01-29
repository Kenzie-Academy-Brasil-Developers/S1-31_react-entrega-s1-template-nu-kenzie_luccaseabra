function Form () {


    return (
        <form>
            <input type='text' placeholder = 'Valor' />
            <input type='text' placeholder = 'Description' />

            <select name="" id="">
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
            </select>

            <button type="submit"></button>

        </form>
    )
}

export default Form