import { useState } from 'react'
import Mensaje from './Mensaje'
import CloseButton from '../assets/ico-close.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

  const [mensaje, setMensaje] = useState('')

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')
      }, 2500)
      return
    }

    guardarGasto({nombre,cantidad,categoria})
    
  }

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-20 bg-slate-900'>
      <div className='container py-8'>
        <div className='__row justify-end'>
          <div className='__col w-full mb-10'>
            <div className='max-w-[85px] ml-auto __651-ico'>
              <img className='w-full' src={CloseButton} alt='Cerrar' onClick={ocultarModal} />
            </div>
          </div>
        </div>
        <div className='__row justify-center'>
          <div className='__col w-full md:w-6/12'>
            <div className={`__651-card text-black __form __form-${animarModal ?  'open': 'close'}`}>
              <div className='__651-card-body'>
                <form onSubmit={handleSubmit}>
                  <legend className="text-3xl font-semibold text-slate-900 text-center pb-3 mb-3 border-b">Nuevo Gasto</legend>
                  {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
                  <div className='relative pt-7 mb-4'>
                    <label className='__label' htmlFor='nombre'>Nombre del gasto</label>
                    <input className='__input' id='nombre' type='text' placeholder='Escribe el nombre del gasto' value={nombre} onChange={e=>setNombre(e.target.value)}/>
                  </div>
                  <div className='relative pt-7 mb-4'>
                    <label className='__label' htmlFor='cantidad'>Cantidad</label>
                    <input className='__input' id='cantidad' type='number' placeholder='Escribe la cantidad' value={cantidad} onChange={e=>setCantidad(Number(e.target.value))}/>
                  </div>
                  <div className='relative pt-7 mb-4'>
                    <label className='__label' htmlFor='categoria'>Categoria</label>
                    <select className='__input' id='categoria' value={categoria} onChange={e=>setCategoria(e.target.value)}>
                      <option value=''>Selecciona una opción</option>
                      <option value='alimentacion'>Alimentación</option>
                      <option value='diversion'>Diversion</option>
                      <option value='hogar'>Hogar</option>
                      <option value='otros'>Otros</option>
                      <option value='salud'>Salud</option>
                      <option value='suscripciones'>Suscripciones</option>
                    </select>
                  </div>
                  <div className='relative pt-7 mb-4'>
                    <input className='__btn text-white' type='submit' value='Añadir Gasto'/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal