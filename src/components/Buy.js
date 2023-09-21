import { useState } from "react";
const Buy = () => {
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
    <div className="p-5 bg-gray-200 w-[500px] aspect-square rounded-2xl space-y-5 min-w-[300px]">
      <div>
        <h1 className="text-2xl pb-2">Selecione o produto desejado</h1>
        <select className="p-2 rounded-md border-2 border-gray-300" id="productSelect" onChange={handleProductChange}>
          <option value="">Selecione um Produto</option>
          <option value="batata">Batata</option>
          <option value="mandioca">Mandioca</option>
          <option value="repolho">Repolho</option>
        </select>
      </div>
      {selectedProduct && (
        <>
          <h2 className="text-xl pb-2">
            O produto selecionado foi {selectedProduct}
          </h2>
          <p>Selecione a ação desejada</p>
          <select  className="p-2 rounded-md border-2 border-gray-300" id="actionSelect" onChange={handleActionChange}>
            <option value="">Selecione uma Ação</option>
            <option value="compra">Compra</option>
            <option value="venda">Venda</option>
          </select>
        </>
      )}
      {selectedAction && (
        <>
          <p>A opçao desejada selecionada foi </p>
          {selectedAction === "compra" && (
            <button
              className="px-10 py-2 bg-gray-800 text-white rounded-3xl hover:bg-gray-700"
              onClick={alertCompra}
            >
              Comprar
            </button>
          )}
          {selectedAction === "venda" && (
            <button
              className="px-10 py-2 bg-gray-800 text-white rounded-3xl hover:bg-gray-700"
              onClick={alertVenda}
            >
              Vender
            </button>
          )}
        </>
      )}
    </div>
  );
};
export default Buy;
