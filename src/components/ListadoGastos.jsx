import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="container">
      <div className="__row">
        {filtro ? (
          <>
            <div className="__col mb-5">
                <h3 className="text-3xl font-semibold">
                {gastosFiltrados.length ? "Gastos" : "Aun no hay gastos en esta categoria"}
                </h3>
            </div>
            {gastosFiltrados.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <div className="__col mb-5">
                <h3 className="text-3xl font-semibold">
                {gastosFiltrados.length ? "Gastos" : "Aun no hay gastos"}
                </h3>
            </div>
            {gastos.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoGastos;
