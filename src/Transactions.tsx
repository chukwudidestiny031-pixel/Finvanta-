type TransactionsProps = {
  onNavigate: (screen: string) => void;
};

function Transactions({ onNavigate }: TransactionsProps) {
  return (
    <main>
      <h1>Transaction History</h1>

      <p>View all your account activities here.</p>

      <section>
        <h2>Deposit</h2>
        <p>Money added to your account will appear here.</p>
      </section>

      <br />

      <section>
        <h2>Withdrawal</h2>
        <p>Money withdrawn from your account will appear here.</p>
      </section>

      <br />

      <section>
        <h2>Investment</h2>
        <p>Your investment activities will appear here.</p>
      </section>

      <br />

      <section>
        <h2>Transfer</h2>
        <p>Money transfers will appear here if transfers are added.</p>
      </section>

      <br />

      <button onClick={() => onNavigate("deposit")}>
        Deposit Money
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("withdraw")}>
        Withdraw Money
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
