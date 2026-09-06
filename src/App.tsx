import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "signup") {
    return (
      <main>
        <h1>Create Account</h1>
        <input placeholder="Full Name" />
        <br /><br />
        <input type="email" placeholder="Email Address" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button>Create Account</button>
        <br /><br />
        <button onClick={() => setScreen("welcome")}>
          Back
        </button>
      </main>
    );
  }

  if (screen === "login") {
    return (
      <main>
        <h1>Login to Finvanta</h1>
        <input type="email" placeholder="Email Address" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button>Login</button>
        <br /><br />
        <button onClick={() => setScreen("welcome")}>
          Back
        </button>
      </main>
    );
  }

  if (screen === "welcome") {
    return (
      <main>
        <h1>Welcome to Finvanta</h1>
        <p>Create an account or log in to continue.</p>

        <button onClick={() => setScreen("signup")}>
          Sign Up
        </button>

        <br /><br />

        <button onClick={() => setScreen("login")}>
          Login
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Finvanta</h1>
      <p>Manage your financial journey in one place.</p>

      <button onClick={() => setScreen("welcome")}>
        Get Started
      </button>
    </main>
  );
}

export default App;
