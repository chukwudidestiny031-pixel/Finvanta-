type AdminUsersProps = {
  onNavigate: (screen: string) => void;
};

function AdminUsers({ onNavigate }: AdminUsersProps) {
  return (
    <main>
      <header>
        <h1>Manage Users</h1>
        <p>Admin-only user management.</p>
      </header>

      <section>
        <h2>Users</h2>

        <p>
          User accounts will appear here when a secure backend is connected.
        </p>

        <p><strong>Total Users:</strong> 0</p>
      </section>

      <section>
        <h2>User Management</h2>

        <p>Admins will be able to review and manage user accounts here.</p>

        <button>View User Details</button>

        <br />
        <br />

        <button>Suspend User</button>
      </section>

      <button onClick={() => onNavigate("admin-dashboard")}>
        Back to Admin Dashboard
      </button>
    </main>
  );
}

export default AdminUsers;
