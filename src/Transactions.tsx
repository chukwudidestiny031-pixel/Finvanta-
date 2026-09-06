type TransactionsProps = {
  onNavigate: (screen: string) => void;
};

function Transactions({ onNavigate }: TransactionsProps) {
  return (
    <main>
      <h1>Transaction History</h1>

      <p>Your deposits, withdrawals, and other transactions will appear here.</p>

      <p>No transactions yet.</p>

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Transactions;
