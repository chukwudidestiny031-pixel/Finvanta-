type DashboardProps = {
  onNavigate: (screen: string) => void;
};

function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <main>
      <header>
        <h1>Finvanta</h1>
        <p>Welcome back to your financial dashboard.</p>
      </header>

      <section>
        <p>AVAILABLE BALANCE</p>
        <h1>₦0.00</h1>
        <p>Your current wallet balance</p>
      </section>

      <section>
        <h2>My Investments</h2>
        <p>You have no active investments yet.</p>

        <button onClick={() => onNavigate("investments")}>
          View Investment Plans
        </button>
      </section>

      <section>
        <h2>Account Activity</h2>

        <p>
          <strong>Deposits:</strong> ₦0.00
        </p>

        <p>
          <strong>Withdrawals:</strong> ₦0.00
        </p>

        <p>
          <strong>Active Investments:</strong> 0
        </p>

        <button onClick={() => onNavigate("transactions")}>
          View All Transactions
        </button>
      </section>

      <h2>Quick Actions</h2>

      <section>
        <button onClick={() => onNavigate("deposit")}>
          💰 Deposit Money
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("withdraw")}>
          💸 Withdraw Money
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("investments")}>
          📈 Investments
        </button>
      </section>

      <h2>Account</h2>

      <section>
        <button onClick={() => onNavigate("transactions")}>
          Transaction History
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("profile")}>
          My Profile
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("settings")}>
          Settings
        </button>
      </section>
    </main>
  );
}

export default Dashboard;
