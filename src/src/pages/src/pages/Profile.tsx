type ProfileProps = {
  onNavigate: (screen: string) => void;
};

function Profile({ onNavigate }: ProfileProps) {
  return (
    <main>
      <h1>My Profile</h1>

      <h2>Account Information</h2>

      <p><strong>Name:</strong> Finvanta User</p>
      <p><strong>Email:</strong> user@example.com</p>
      <p><strong>Account Status:</strong> Active</p>

      <br />

      <button onClick={() => onNavigate("settings")}>
        Account Settings
      </button>

      <br /><br />

      <button onClick={() => onNavigate("transactions")}>
        Transaction History
      </button>

      <br /><br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Profile;
