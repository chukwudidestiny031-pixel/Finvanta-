type SettingsProps = {
  onNavigate: (screen: string) => void;
};

function Settings({ onNavigate }: SettingsProps) {
  return (
    <main>
      <h1>Settings</h1>

      <p>Manage your Finvanta account preferences.</p>

      <section>
        <h2>Account</h2>

        <button>Change Password</button>

        <br />
        <br />

        <button>Notification Settings</button>

        <br />
        <br />

        <button>Privacy Settings</button>
      </section>

      <br />

      <section>
        <h2>Navigation</h2>

        <button onClick={() => onNavigate("profile")}>
          My Profile
        </button>

        <br />
        <br />

        <button onClick={() => onNavigate("dashboard")}>
          Back to Dashboard
        </button>
      </section>
    </main>
  );
}

export default Settings;
