import { useState } from "react";

type DepositProps = {
  onNavigate: (screen: string) => void;
};

function Deposit({ onNavigate }: DepositProps) {
  const [amount, setAmount] = useState("");

  const handleContinue = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    alert(`Deposit request: ₦${amount}`);
  };

  return (
    <main>
      <h1>Deposit</h1>

      <p>Enter the amount you want to deposit.</p>

      <input
        type="number"
        placeholder="Amount in ₦"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <br />
      <br />

      <button onClick={handleContinue}>
        Continue
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Deposit;
