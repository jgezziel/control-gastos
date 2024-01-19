import { useState, useEffect } from 'react'

import Header from './components/Header'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './assets/ico-plus.svg'

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    const presupuestoLS= Number(localStorage.getItem('presupuesto')) ?? 0
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      
      setGastosFiltrados(gastosFiltrados)
    }

  }, [filtro])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto =gasto=>{
    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState=>gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }else{
      gasto.id = generarId()
      gasto.fecha= Date.now()
      setGastos([...gastos, gasto])
    }
   
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)

  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'overflow-hidden h-screen' : ''}>
      <Header 
      gastos={gastos}
      setGastos={setGastos}
      presupuesto={presupuesto} setPresupuesto={setPresupuesto} 
      isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
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
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto} filtro={filtro} gastosFiltrados={gastosFiltrados}/>
          </main>
          <div className='fixed right-6 bottom-[calc(100%/2-8.3rem)] md:bottom-[calc(100%/2)] __651-ico z-10'>
            <img title='Añadir Gasto' className='w-full' src={IconoNuevoGasto} alt='Icono Nuevo Gasto' onClick={handleNuevoGasto}/>
          </div>
        </>
      )}
      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} gastoEditar={gastoEditar} setGastoEditar={setGastoEditar}/>}
    </div>
  )
}

export default App
