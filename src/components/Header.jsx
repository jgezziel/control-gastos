import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header className='py-5 lg:py-8 bg-purple-700 sticky top-0 border-b-2 border-purple-500 z-10'>
        <div className='container'>
            <div className='__row justify-center'>
                <div className='__col w-full mb-8'>
                    <h3 className=' text-3xl md:text-4xl lg:text-5xl font-semibold text-center uppercase'>Control de Gastos</h3>
                </div>
                {isValidPresupuesto ?(
                  <div className='__col w-full md:w-8/12'>
                    <ControlPresupuesto presupuesto={presupuesto}/>
                  </div>
                ):(
                  <div className='__col w-full md:w-9/12 lg:w-6/12 2xl:w-5/12'>
                    <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/>
                  </div>
                )}
            </div>
        </div>
    </header>
  )
}

export default Header