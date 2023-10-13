import Gasto from "./Gasto"

const ListadoGastos = ({gastos}) => {
    return (
        <div className="container">
            <div className="__row">
                <div className="__col mb-5">
                    <h3 className="text-3xl font-semibold">{gastos.length ? 'Gastos':'Aun no hay gastos'}</h3>
                </div>
                {gastos.map(gasto=>(
                    <Gasto key={gasto.id} gasto={gasto}/>))}
            </div>
        </div>
    )
}

export default ListadoGastos