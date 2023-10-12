const ControlPresupuesto = ({ presupuesto }) => {

    const formatCantidad=(cantidad)=> {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    return (
        <div className='__651-card text-black'>
            <div className='__651-card-body'>
                <div className='__row'>
                    <div className='__col md:w-6/12'>
                        <p className=' font-semibold'>Grafica de Presupuesto</p>
                    </div>
                    <div className='__col md:w-6/12'>
                        <p className="text-2xl mb-4"><span className=' font-bold text-purple-800'>Presupuesto:</span> {formatCantidad(presupuesto)}</p>
                        <p className="text-2xl mb-4"><span className=' font-bold text-purple-800'>Disponible:</span> {formatCantidad(0)} </p>
                        <p className="text-2xl mb-4"><span className=' font-bold text-purple-800'>Gastado:</span> {formatCantidad(0)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlPresupuesto