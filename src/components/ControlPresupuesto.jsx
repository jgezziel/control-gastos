import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, setGastos ,presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        
        const totalDisponible = presupuesto - totalGastado

        const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto) * 100).toFixed(2)

        setDisponible(totalDisponible)
        setGastado(totalGastado)

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000);
    }, [gastos])

    const formatCantidad=(cantidad)=> {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    const handleResetApp = () => {
        const confirm = window.confirm('¿Estas seguro de resetear la app?')
        if(confirm) {
            setPresupuesto(0)
            setGastos([])
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='__651-card text-black'>
            <div className='__651-card-body'>
                <div className='__row justify-center items-center md:justify-around'>
                    <div className='__col w-10/12 md:w-4/12 lg:w-5/12 xl:w-5/12 mb-6'>
                       <CircularProgressbar
                       styles={buildStyles({
                            pathColor: porcentaje > 100 ? 'rgba(239, 68, 68)' : `rgba(126, 34, 206, ${porcentaje / 100})`,
                            trailColor: '#eeeeee',
                            textColor: porcentaje > 100 ? 'rgba(239, 68, 68)' : '#7e22ce',
                            textSize: '10px'
                          })}
                       value={porcentaje}
                       text={`${porcentaje}% gastado`}
                       />
                    </div>
                    <div className='__col md:w-6/12'>
                        <button className='__btn-reset text-white mb-3' type="button" onClick={handleResetApp}>Resetear App</button>
                        <p className="text-2xl mb-4"><span className=' font-bold text-purple-800'>Presupuesto:</span> {formatCantidad(presupuesto)}</p>
                        <p className="text-2xl mb-4"><span className={`font-bold ${disponible < 0 ? 'text-red-500' : 'text-purple-800'}`}>Disponible:</span> <span className={`${disponible < 0 ? 'text-red-500 font-bold' : ''}`}>{formatCantidad(disponible)}</span> </p>
                        <p className="text-2xl mb-4"><span className=' font-bold text-purple-800'>Gastado:</span> {formatCantidad(gastado)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ControlPresupuesto