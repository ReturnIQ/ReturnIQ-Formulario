import React from 'react';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Simulacion de enviado: OK');
  };

  return (
    <main className="container">
      <h1>Formulario de devolucion</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Numero de orden
          <input type="text" name="numeroOrden" placeholder="Ej: ORD-12345" required />
        </label>

        <label>
          Tipo de devolucion
          <select name="tipoDevolucion" required defaultValue="">
            <option value="" disabled>
              Selecciona un tipo
            </option>
            <option value="total">Total</option>
            <option value="parcial">Parcial</option>
          </select>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
