type DashboardProps = {
  onNavigate: (screen: string) => void;
};

function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <main>
      <h1>Finvanta Dashboard</h1>

      <p>Wallet Balance</p>
      <h2>₦0.00</h2>

      <button onClick={() => onNavigate("deposit")}>Deposit</button>
      <br /><br />

      <button onClick={() => onNavigate("withdraw")}>Withdraw</button>
      <br /><br />

      <button onClick={() => onNavigate("investments")}>
        Investments
      </button>
      <br /><br />

      <button onClick={() => onNavigate("transactions")}>
        Transactions
      </button>
      <br /><br />

      <button onClick={() => onNavigate("profile")}>
        Profile
      </button>
      <br /><br />

      <button onClick={() => onNavigate("settings")}>
        Settings
      </button>
    </main>
  );
}

export default Dashboard;
