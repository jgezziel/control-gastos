import { useState } from 'react'

import Header from './components/Header'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
      <div className='container py-6 md:py-8 mt-10 md:mt-8'>
        <div className='__row'>
          <div className='__col text-center'>
            <h1 className='font-normal text-slate-800'>Developed by jgezziel</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
