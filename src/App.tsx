import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "profile") {
    return (
      <main>
        <h1>My Profile</h1>

        <p><strong>Name:</strong> Finvanta User</p>
        <p><strong>Email:</strong> user@example.com</p>

        <button onClick={() => setScreen("dashboard")}>
          Back to Dashboard
        </button>
      </main>
    );
  }

  if (screen === "investments") {
    return (
      <main>
        <h1>Investment Plans</h1>
        <h2>Starter Plan</h2>
        <p>View available investment details before proceeding.</p>
        <button>View Plan</button>

        <br /><br />

        <button onClick={() => setScreen("dashboard")}>
          Back to Dashboard
        </button>
      </main>
    );
  }

  if (screen === "withdraw") {
    return (
      <main>
        <h1>Withdraw</h1>
        <p>Enter the amount you want to withdraw.</p>

        <input type="number" placeholder="Amount in ₦" />
        <br /><br />

        <button>Continue</button>
        <br /><br />

        <button onClick={() => setScreen("dashboard")}>
          Back to Dashboard
        </button>
      </main>
    );
  }

  if (screen === "deposit") {
    return (
      <main>
        <h1>Deposit</h1>
        <p>Enter the amount you want to deposit.</p>

        <input type="number" placeholder="Amount in ₦" />
        <br /><br />

        <button>Continue</button>
        <br /><br />

        <button onClick={() => setScreen("dashboard")}>
          Back to Dashboard
        </button>
      </main>
    );
  }

  if (screen === "transactions") {
    return (
      <main>
        <h1>Transaction History</h1>
        <p>No transactions yet.</p>

        <button onClick={() => setScreen("dashboard")}>
          Back to Dashboard
        </button>
      </main>
    );
  }

  if (screen === "dashboard") {
    return (
      <main>
        <h1>Finvanta Dashboard</h1>

        <p>Wallet Balance</p>
        <h2>₦0.00</h2>

        <button onClick={() => setScreen("deposit")}>
          Deposit
        </button>

        <br /><br />

        <button onClick={() => setScreen("withdraw")}>
          Withdraw
        </button>

        <br /><br />

        <button onClick={() => setScreen("investments")}>
          Investments
        </button>

        <br /><br />

        <button onClick={() => setScreen("transactions")}>
          Transactions
        </button>

        <br /><br />

        <button onClick={() => setScreen("profile")}>
          Profile
        </button>

        <br /><br />

        <button onClick={() => setScreen("home")}>
          Logout
        </button>
      </main>
    );
  }

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

        <button onClick={() => setScreen("dashboard")}>
          Create Account
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

        <button onClick={() => setScreen("dashboard")}>
          Login
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
