import { useState } from "react";

type WithdrawProps = {
  onNavigate: (screen: string) => void;
};

function Withdraw({ onNavigate }: WithdrawProps) {
  const [amount, setAmount] = useState("");

  const handleContinue = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid withdrawal amount.");
      return;
    }

    alert(`Withdrawal request: ₦${amount}`);
  };

  return (
    <main>
      <h1>Withdraw</h1>

      <p>Enter the amount you want to withdraw.</p>

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

export default Withdraw;
