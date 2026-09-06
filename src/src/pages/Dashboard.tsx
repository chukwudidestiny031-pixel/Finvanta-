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

      <h2>Quick Actions</h2>

      <section>
        <button onClick={() => onNavigate("deposit")}>
          💰 Deposit Money
        </button>

        <br /><br />

        <button onClick={() => onNavigate("withdraw")}>
          💸 Withdraw Money
        </button>

        <br /><br />

        <button onClick={() => onNavigate("investments")}>
          📈 Investments
        </button>
      </section>

      <h2>Account</h2>

      <section>
        <button onClick={() => onNavigate("transactions")}>
          Transaction History
        </button>

        <br /><br />

        <button onClick={() => onNavigate("profile")}>
          My Profile
        </button>

        <br /><br />

        <button onClick={() => onNavigate("settings")}>
          Settings
        </button>
      </section>
    </main>
  );
}

export default Dashboard;
