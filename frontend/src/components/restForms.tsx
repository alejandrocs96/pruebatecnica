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

  useEffect(() => {
    fetch("/api/transaction/history")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Formulario</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            placeholder="Persona"
            value={formData.PersonId}
            onChange={(e) => setFormData({ ...formData, PersonId: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Moneda"
            value={formData.CoinType}
            onChange={(e) => setFormData({ ...formData, CoinType: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Monto"
            value={formData.Amount}
            onChange={(e) => setFormData({ ...formData, Amount: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Cliente a quien envia"
            value={formData.PersonTransaction}
            onChange={(e) => setFormData({ ...formData, PersonTransaction: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Firma digital"
            value={formData.DigitalSignature}
            onChange={(e) => setFormData({ ...formData, DigitalSignature: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Histórico</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Transaction ID</th>
              <th className="border px-4 py-2">Person ID</th>
              <th className="border px-4 py-2">Coin Type</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">State</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.TransactionId}</td>
                <td className="border px-4 py-2">{item.PersonId}</td>
                <td className="border px-4 py-2">{item.CoinType}</td>
                <td className="border px-4 py-2">{item.Amount}</td>
                <td className="border px-4 py-2">{item.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
