type AdminDashboardProps = {
  onNavigate: (screen: string) => void;
};

function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  return (
    <main>
      <header>
        <h1>Finvanta Admin</h1>
        <p>Admin Dashboard</p>
      </header>

      <section>
        <h2>Platform Overview</h2>

        <p>
          <strong>Total Users:</strong> 0
        </p>

        <p>
          <strong>Pending Deposits:</strong> 0
        </p>

        <p>
          <strong>Pending Withdrawals:</strong> 0
        </p>

        <p>
          <strong>Active Investments:</strong> 0
        </p>
      </section>

      <section>
        <h2>Admin Management</h2>

        <button onClick={() => onNavigate("admin-users")}>
          Manage Users
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("admin-deposits")}>
          Deposit Requests
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("admin-withdrawals")}>
          Withdrawal Requests
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("admin-investments")}>
          Manage Investment Plans
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("admin-settings")}>
          Admin Settings
        </button>
      </section>

      <section>
        <h2>Platform Controls</h2>

        <button onClick={() => onNavigate("admin-transactions")}>
          View All Transactions
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("admin-support")}>
          User Support Requests
        </button>
      </section>

      <button onClick={() => onNavigate("dashboard")}>
        Back to User Dashboard
      </button>
    </main>
  );
}

export default AdminDashboard;
