type DepositProps = {
  onNavigate: (screen: string) => void;
};

function Deposit({ onNavigate }: DepositProps) {
  return (
    <main>
      <h1>Deposit</h1>

      <p>Enter the amount you want to deposit.</p>

      <input
        type="number"
        placeholder="Amount in ₦"
      />

      <br /><br />

      <button>Continue</button>

      <br /><br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Deposit;
