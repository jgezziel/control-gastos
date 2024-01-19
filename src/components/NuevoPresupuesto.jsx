import {useState} from 'react'
import  Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto=(e)=>{
    e.preventDefault()
    if(!presupuesto|| presupuesto <= 0){
      setMensaje('El presupuesto no es valido')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className='__651-card'>
      <div className='__651-card-body'>
        <form onSubmit={handlePresupuesto}>
          <div className='relative pt-7'>
            <label className='__label text-center'>Definir Presupuesto</label>
            <input className='__input text-center'
            type='number' placeholder='Añade tu presupuesto' min='0' value={presupuesto} onChange={e=>setPresupuesto(Number(e.target.value))}/>
          </div>
          <div className='relative pt-7 mb-4'>
            <input className='__btn'
            type='submit' value='Añadir'/>
          </div>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
        </form>
      </div>
    </div>
  )
}

export default NuevoPresupuesto