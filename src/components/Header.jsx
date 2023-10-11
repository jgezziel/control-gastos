import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header className='py-5 lg:py-8 bg-purple-700 sticky top-0 border-b-2 border-purple-500 z-10'>
        <div className='container'>
            <div className='__row justify-center'>
                <div className='__col w-full mb-8'>
                    <h3 className=' text-3xl md:text-4xl lg:text-5xl font-semibold text-center uppercase'>Control de Gastos</h3>
                </div>
                <div className='__col w-full md:w-9/12 lg:w-6/12 2xl:w-5/12'>
                  <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header