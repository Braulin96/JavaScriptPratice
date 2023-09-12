import React, { useState } from "react";

function App() {
  const alertCompra = () => {
    window.alert("Compra realizada com sucesso");
  };
  const alertVenda = () => {
    window.alert("Venda realizada com sucesso");
  };

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedAction, setSelectedAction] = useState("");

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
    setSelectedAction(""); // Reset the selected action when the product changes
  };

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  return (
    <>
      <div className="App">
        <h1>Selecione o produto desejado</h1>
        <select id="productSelect" onChange={handleProductChange}>
          <option value="">Selecione um Produto</option>
          <option value="batata">Batata</option>
          <option value="mandioca">Mandioca</option>
          <option value="repolho">Repolho</option>
        </select>
        {selectedProduct && (
          <>
            <p>O produto selecionado foi {selectedProduct}</p>
            <label>Selecione a ação desejada</label>
            <select id="actionSelect" onChange={handleActionChange}>
              <option value="">Selecione uma Ação</option>
              <option value="compra">Compra</option>
              <option value="venda">Venda</option>
            </select>
          </>
        )}
        {selectedAction && (
          <>
            <label>Selecione a opção desejada</label>
            {selectedAction === "compra" && (
              <button onClick={alertCompra}>Comprar</button>
            )}
            {selectedAction === "venda" && (
              <button onClick={alertVenda}>Vender</button>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
