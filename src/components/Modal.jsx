import CloseButton from '../assets/ico-close.svg'

const Modal = ({ setModal }) => {
  const ocultarModal = () => {
    setModal(false)
  }
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-20 bg-slate-900'>
      <div className='container py-8'>
        <div className='__row justify-end'>
          <div className='__col w-full'>
            <div className='max-w-[85px] ml-auto __651-ico'>
              <img className='w-full' src={CloseButton} alt='Cerrar' onClick={ocultarModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal