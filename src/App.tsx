import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <main>
        <h1>Welcome to Finvanta</h1>
        <p>Create an account or log in to continue.</p>

        <button>Sign Up</button>
        <br /><br />
        <button>Login</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Finvanta</h1>
      <p>Manage your financial journey in one place.</p>

      <button onClick={() => setStarted(true)}>
        Get Started
      </button>
    </main>
  );
}

export default App;
