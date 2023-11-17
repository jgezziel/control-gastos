import { useState } from 'react'

import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './assets/ico-plus.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto =gasto=>{
    gasto.id = generarId()
    gasto.fecha= Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)

  }

  return (
    <div className={modal && 'overflow-hidden h-screen'}>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
      <div className='container py-6 md:py-8 mt-10 md:mt-8'>
        <div className='__row'>
          <div className='__col text-center'>
            <h1 className='font-normal text-slate-800'>Developed by jgezziel</h1>
          </div>
        </div>
      </div>
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos}/>
          </main>
          <div className='fixed right-6 bottom-[calc(100%/2)] __651-ico'>
            <img title='Añadir Gasto' className='w-full' src={IconoNuevoGasto} alt='Icono Nuevo Gasto' onClick={handleNuevoGasto}/>
          </div>
        </>
      )}
      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto}/>}
    </div>
  )
}

export default App
