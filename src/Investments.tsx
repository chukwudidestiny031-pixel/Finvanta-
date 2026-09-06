import { useState } from "react";

type InvestmentsProps = {
  onNavigate: (screen: string) => void;
};

function Investments({ onNavigate }: InvestmentsProps) {
  const [selectedPlan, setSelectedPlan] = useState("");

  const subscribe = (plan: string) => {
    setSelectedPlan(plan);
    alert(`You selected the ${plan}.`);
  };

  return (
    <main>
      <header>
        <h1>Investment Plans</h1>
        <p>Explore available financial plans.</p>
      </header>

      <section>
        <h2>₦1,500 Plan</h2>
        <p><strong>Investment:</strong> ₦1,500.00</p>
        <p><strong>Projected Return:</strong> ₦12,000.00</p>
        <p><strong>Daily Task:</strong> ₦400.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button onClick={() => subscribe("₦1,500 Plan")}>
          Subscribe for ₦1,500.00
        </button>
      </section>

      <section>
        <h2>Most Popular — ₦3,000 Plan</h2>
        <p><strong>Investment:</strong> ₦3,000.00</p>
        <p><strong>Projected Return:</strong> ₦18,000.00</p>
        <p><strong>Daily Task:</strong> ₦600.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button onClick={() => subscribe("₦3,000 Plan")}>
          Subscribe for ₦3,000.00
        </button>
      </section>

      <section>
        <h2>Tier 3 — ₦6,000 Plan</h2>
        <p><strong>Investment:</strong> ₦6,000.00</p>
        <p><strong>Projected Return:</strong> ₦27,000.00</p>
        <p><strong>Daily Task:</strong> ₦900.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button onClick={() => subscribe("₦6,000 Plan")}>
          Subscribe for ₦6,000.00
        </button>
      </section>

      <section>
        <h2>Tier 4 — ₦9,000 Plan</h2>
        <p><strong>Investment:</strong> ₦9,000.00</p>
        <p><strong>Projected Return:</strong> ₦39,000.00</p>
        <p><strong>Daily Task:</strong> ₦1,300.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button onClick={() => subscribe("₦9,000 Plan")}>
          Subscribe for ₦9,000.00
        </button>
      </section>

      <section>
        <h2>₦12,000 Plan</h2>
        <p><strong>Investment:</strong> ₦12,000.00</p>
        <p><strong>Projected Return:</strong> ₦51,000.00</p>
        <p><strong>Daily Task:</strong> ₦1,700.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>

        <button onClick={() => subscribe("₦12,000 Plan")}>
          Subscribe for ₦12,000.00
        </button>
      </section>

      {selectedPlan && (
        <section>
          <h2>Selected Plan</h2>
          <p>{selectedPlan}</p>
        </section>
      )}

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Investments;
