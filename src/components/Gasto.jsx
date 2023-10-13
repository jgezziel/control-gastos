import {formatearFecha} from '../helpers'

const Gasto = ({gasto}) => {
  const {id, nombre, cantidad, categoria, fecha} = gasto
  return (
    <div className="__col w-10/12 border mb-6">
      <p>{nombre}</p>
      <p>{cantidad}</p>
      <p>{categoria}</p>
      <p>{formatearFecha(fecha)}</p>
    </div>
  )
}

export default Gasto