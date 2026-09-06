type DashboardProps = {
  onNavigate: (screen: string) => void;
};

function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <main>
      <h1>Finvanta</h1>

      <p>Welcome back!</p>

      <section>
        <h2>Wallet Balance</h2>
        <h1>₦0.00</h1>
        <p>Available balance</p>
      </section>

      <br />

      <button onClick={() => onNavigate("deposit")}>
        Deposit
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("withdraw")}>
        Withdraw
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("investments")}>
        Investments
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("transactions")}>
        Transaction History
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("profile")}>
        Profile
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("settings")}>
        Settings
      </button>
    </main>
  );
}

export default Dashboard;
