import {LeadingActions, SwipeableList, SwipeableListItem,SwipeAction, TrailingActions} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import {formatearFecha} from '../helpers'

import IcoAlimentacion from '../assets/ico_alimentacion.svg'
import IcoDiversion from '../assets/ico_diversion.svg'
import IcoHogar from '../assets/ico_hogar.svg'
import IcoOtros from '../assets/ico_otros.svg'
import IcoSalud from '../assets/ico_salud.svg'
import IcoSuscripciones from '../assets/ico_suscripciones.svg'

const iconos = {
  alimentacion: IcoAlimentacion,
  diversion: IcoDiversion,
  hogar: IcoHogar,
  otros: IcoOtros,
  salud: IcoSalud,
  suscripciones: IcoSuscripciones
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
  const {id, nombre, cantidad, categoria, fecha} = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={()=>setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={()=>eliminarGasto(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList className="__col mb-8">
        <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
          <div className="__651-card mb-[0]">
              <div className="__651-card-body text-black">
                <div className="__row justify-center items-center">
                  <div className="__col w-6/12 sm:w-3/12 md:w-2/12 mb-4">
                    <img className='w-full' src={iconos[categoria]} alt="Icono Gasto"/>
                  </div>
                  <div className="__col w-full sm:w-8/12 md:w-8/12 text-center sm:text-left mb-4">
                    <p className="text-xl font-medium text-gray-500 uppercase">{categoria}</p>
                    <p className="text-2xl font-semibold my-1">{nombre}</p>
                    <p className="text-lg font-normal text-gray-400">Agregado el: {formatearFecha(fecha)}</p>
                  </div>
                  <div className="__col w-full md:w-2/12">
                    <p className="text-2xl font-semibold text-center sm:text-left text-slate-800">${cantidad}</p>
                  </div>
                </div>
              </div>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto