const Filtros = ({filtro, setFiltro}) => {

  return (
    <div className="container">
      <div className="__row justify-center">
        <div className="__col md:w-10/12 mb-8">
          <div className="__651-card mb-[0]">
            <div className="__651-card-body">
              <form>
                <div className="relative pt-7 mb-4">
                  <label className="__label">Filtrar Gastos</label>
                  <select className="__input" value={filtro} onChange={e=>setFiltro(e.target.value)}>
                    <option value="">Todas las categorias</option>
                    <option value="alimentacion">Alimentación</option>
                    <option value="diversion">Diversion</option>
                    <option value="hogar">Hogar</option>
                    <option value="otros">Otros</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtros;
