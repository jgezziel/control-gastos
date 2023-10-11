import {useState} from 'react'
import  Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto=(e)=>{
    e.preventDefault()
    if(!presupuesto|| presupuesto <= 0){
      setMensaje('El presupuesto no es valido')
      return
    }
    setMensaje('')

  }

  return (
    <div className='bg-white shadow-md shadow-slate-600 rounded-md -mb-[75px]'>
      <div className='p-6 md:p-10'>
        <form onSubmit={handlePresupuesto}>
          <div className='relative pt-7'>
            <label className='block text-2xl font-semibold text-purple-800 -mt-6 mb-2 text-center'>Definir Presupuesto</label>
            <input className='w-full rounded border border-slate-300 px-2 py-3 md:text-3xl font-bold text-black text-center hover:border-purple-500 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 placeholder:text-slate-300'
            type='number' placeholder='Añade tu presupuesto' min='0' value={presupuesto} onChange={e=>setPresupuesto(Number(e.target.value))}/>
          </div>
          <div className='relative pt-7'>
            <input className='bg-purple-600 px-6 py-3 w-full rounded-md shadow-md shadow-purple-600/50 cursor-pointer hover:bg-purple-700 hover:shadow-purple-700/50 transition-colors'
            type='submit' value='añadir'/>
          </div>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
        </form>
      </div>
    </div>
  )
}

export default NuevoPresupuesto