type ProfileProps = {
  onNavigate: (screen: string) => void;
};

function Profile({ onNavigate }: ProfileProps) {
  return (
    <main>
      <h1>My Profile</h1>

      <section>
        <h2>Account Information</h2>

        <p>
          <strong>Name:</strong> Finvanta User
        </p>

        <p>
          <strong>Email:</strong> user@example.com
        </p>

        <p>
          <strong>Account Status:</strong> Active
        </p>
      </section>

      <br />

      <section>
        <h2>Quick Actions</h2>

        <button onClick={() => onNavigate("transactions")}>
          Transaction History
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("settings")}>
          Account Settings
        </button>
      </section>

      <br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Profile;
