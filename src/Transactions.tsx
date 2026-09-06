type TransactionsProps = {
  onNavigate: (screen: string) => void;
};

function Transactions({ onNavigate }: TransactionsProps) {
  return (
    <main>
      <h1>Transaction History</h1>

      <p>View your recent account activity.</p>

      <section>
        <h2>No Transactions Yet</h2>
        <p>
          Your deposits, withdrawals, and other account activity will appear
          here.
        </p>
      </section>

      <br />

      <button onClick={() => onNavigate("deposit")}>
        Make a Deposit
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("withdraw")}>
        Make a Withdrawal
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Transactions;
