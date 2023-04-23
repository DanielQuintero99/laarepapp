import React, { useState } from "react";
import "../../../css/calculoUtilidades.css"

function RegistroIngresosGastos() {
  const [ventas, setVentas] = useState("");
  const [servicios, setServicios] = useState("");
  const [pedidos, setPedidos] = useState("");
  const [gas, setGas] = useState("");
  const [salarios, setSalarios] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "ventas":
        setVentas(Number(value));
        break;
      case "servicios":
        setServicios(Number(value));
        break;
      case "pedidos":
        setPedidos(Number(value));
        break;
      case "gas":
        setGas(Number(value));
        break;
      case "salarios":
        setSalarios(Number(value));
        break;
      default:
        break;
    }
  };

  const handleAddVentas = () => {
    setVentas(ventas + "");
  };

  const handleAddServicios = () => {
    setServicios(servicios + "");
  };

  const handleAddPedidos = () => {
    setPedidos(pedidos + "");
  };

  const handleAddGas = () => {
    setGas(gas + "");
  };

  const handleAddSalarios = () => {
    setSalarios(salarios + "");
  };

  const totalIngresos = ventas;
  const totalGastos = servicios + pedidos + gas + salarios;

  const calcularUtilidades = () => {
    return totalIngresos - totalGastos;
  };


  return (
    <div className="container RegistroIngresosGastos">
      <div>
        <label htmlFor="ventas">Ventas:</label>
        <input type="number" id="ventas" name="ventas" placeholder="Ingresa un valor" value={ventas} onChange={handleInputChange} />
        <button onClick={handleAddVentas}>Agregar</button>
      </div>
      <div>
        <label htmlFor="servicios">Servicios:</label>
        <input type="number" id="servicios" name="servicios" placeholder="Ingresa un valor" value={servicios} onChange={handleInputChange} />
        <button onClick={handleAddServicios}>Agregar</button>
      </div>
      <div>
        <label htmlFor="pedidos">Pedidos:</label>
        <input type="number" id="pedidos" name="pedidos" placeholder="Ingresa un valor" value={pedidos} onChange={handleInputChange} />
        <button onClick={handleAddPedidos}>Agregar</button>
      </div>
      <div>
        <label htmlFor="gas">Gas:</label>
        <input type="number" id="gas" name="gas" placeholder="Ingresa un valor" value={gas} onChange={handleInputChange} />
        <button onClick={handleAddGas}>Agregar</button>
      </div>
      <div>
        <label htmlFor="salarios">Salarios:</label>
        <input type="number" id="salarios" name="salarios" placeholder="Ingresa un valor" value={salarios} onChange={handleInputChange} />
        <button onClick={handleAddSalarios}>Agregar</button>
      </div>
      <div>
        <h3>Total de ingresos: {totalIngresos}</h3>
        <h3>Total de gastos: {totalGastos}</h3>
<h3>Utilidades: {calcularUtilidades()}</h3>
</div>

</div>
);
}

export default RegistroIngresosGastos;