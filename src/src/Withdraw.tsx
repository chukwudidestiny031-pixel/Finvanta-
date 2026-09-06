type WithdrawProps = {
  onNavigate: (screen: string) => void;
};

function Withdraw({ onNavigate }: WithdrawProps) {
  return (
    <main>
      <h1>Withdraw</h1>

      <p>Enter the amount you want to withdraw.</p>

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

export default Withdraw;
