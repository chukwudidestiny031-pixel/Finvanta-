type SettingsProps = {
  onNavigate: (screen: string) => void;
};

function Settings({ onNavigate }: SettingsProps) {
  return (
    <main>
      <h1>Settings</h1>

      <h2>Account Settings</h2>

      <p>Manage your Finvanta account preferences.</p>

      <button>
        Change Password
      </button>

      <br />
      <br />

      <button>
        Notification Settings
      </button>

      <br />
      <br />

      <button>
        Privacy Settings
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("profile")}>
        Back to Profile
      </button>

      <br />
      <br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Settings;
