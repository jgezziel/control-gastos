const Mensaje = ({children, tipo}) => {

  return (
    <div className='relative pt-4 mb-4'>
      <div className={`__alert __alert-${tipo}`}>
        <p className='font-medium'>{children}</p>
      </div>         
    </div>
  )
}

export default Mensaje