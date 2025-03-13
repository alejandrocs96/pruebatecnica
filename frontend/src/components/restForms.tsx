import { useState, useEffect } from "react";

export default function RestFormPage() {
    const [formData, setFormData] = useState({
        TransactionId: 0,
        PersonId: "",
        CoinType: "",
        Amount: "",
        CreatedDate: "2025-03-12T22:02:05.966Z",
        UpdatedDate: "2025-03-12T22:02:05.966Z",
        State: 1,
        PersonTransaction: "",
        DigitalSignature: ""
      });
  const [transactions, setTransactions] = useState([]);

  const [transactionsHistory, setTransactionsHistory] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7020/api/transaction/getAllTransaction/20")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return res.json();
      })
      .then((data) => setTransactionsHistory(data))
      .catch((error) => console.error("Error al obtener transacciones:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://localhost:7020/api/transaction/generateTransaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    setTransactions([...transactions, result]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 container mx-auto">
      <div className="bg-white  rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Formulario</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Persona"
            disabled 
            value='20'
            onChange={(e) => setFormData({ ...formData, PersonId: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Moneda (Ej: USD)"
            value={formData.CoinType}
            onChange={(e) => setFormData({ ...formData, CoinType: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Monto (Ej: 1000)"
            value={formData.Amount}
            onChange={(e) => setFormData({ ...formData, Amount: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Cliente a quien envia (Ej: 10)"
            value={formData.PersonTransaction}
            onChange={(e) => setFormData({ ...formData, PersonTransaction: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Firma digital (Token)"
            value={formData.DigitalSignature}
            onChange={(e) => setFormData({ ...formData, DigitalSignature: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </form>
      </div>

      <div className="bg-white  rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Histórico</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Tran ID</th>
              <th className="border px-4 py-2">Person ID</th>
              <th className="border px-4 py-2">Coin Type</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Created</th>
              <th className="border px-4 py-2">State</th>
            </tr>
          </thead>
          <tbody>
            {transactionsHistory.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.transactionId}</td>
                <td className="border px-4 py-2">{item.idPerson}</td>
                <td className="border px-4 py-2">{item.coinType}</td>
                <td className="border px-4 py-2">{item.amount}</td>
                <td className="border px-4 py-2">{item.createdDate}</td>
                <td className="border px-4 py-2">{item.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
