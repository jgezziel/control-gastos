import { useState } from 'react'

import Header from './components/Header'
import IconoNuevoGasto from './assets/ico-plus.svg'
import Modal from './components/Modal'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
  }

  return (
    <>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
      <div className='container py-6 md:py-8 mt-10 md:mt-8'>
        <div className='__row'>
          <div className='__col text-center'>
            <h1 className='font-normal text-slate-800'>Developed by jgezziel</h1>
          </div>
        </div>
      </div>
      {isValidPresupuesto && (
        <div className='absolute right-6 bottom-[calc(100%/2)] __651-ico'>
          <img title='Añadir Gasto' className='w-full' src={IconoNuevoGasto} alt='Icono Nuevo Gasto' onClick={handleNuevoGasto}/>
        </div>
      )}
      {modal && <Modal setModal={setModal} />}
    </>
  )
}

export default App
