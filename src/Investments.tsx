type InvestmentsProps = {
  onNavigate: (screen: string) => void;
};

function Investments({ onNavigate }: InvestmentsProps) {
  return (
    <main>
      <header>
        <h1>Investment Plans</h1>
        <p>Explore available plans and their details.</p>
      </header>

      <section>
        <h2>₦1,500 Plan</h2>
        <p>
          ₦1,500 capital investment with ₦12,000 projected return and ₦400
          daily task reward.
        </p>

        <p><strong>Investment:</strong> ₦1,500.00</p>
        <p><strong>Projected Return:</strong> ₦12,000.00</p>
        <p><strong>Daily Task:</strong> ₦400.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button>
          Subscribe for ₦1,500.00
        </button>
      </section>

      <section>
        <h2>Most Popular — ₦3,000 Plan</h2>

        <p>
          ₦3,000 capital investment with ₦18,000 projected return and ₦600
          daily task reward.
        </p>

        <p><strong>Investment:</strong> ₦3,000.00</p>
        <p><strong>Projected Return:</strong> ₦18,000.00</p>
        <p><strong>Daily Task:</strong> ₦600.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button>
          Subscribe for ₦3,000.00
        </button>
      </section>

      <section>
        <h2>Tier 3 — ₦6,000 Plan</h2>

        <p>
          ₦6,000 capital investment with ₦27,000 projected return and ₦900
          daily task reward.
        </p>

        <p><strong>Investment:</strong> ₦6,000.00</p>
        <p><strong>Projected Return:</strong> ₦27,000.00</p>
        <p><strong>Daily Task:</strong> ₦900.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button>
          Subscribe for ₦6,000.00
        </button>
      </section>

      <section>
        <h2>Tier 4 — ₦9,000 Plan</h2>

        <p>
          ₦9,000 capital investment with ₦39,000 projected return and ₦1,300
          daily task reward.
        </p>

        <p><strong>Investment:</strong> ₦9,000.00</p>
        <p><strong>Projected Return:</strong> ₦39,000.00</p>
        <p><strong>Daily Task:</strong> ₦1,300.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>
        <p><strong>Lock Period:</strong> 30 Days</p>

        <button>
          Subscribe for ₦9,000.00
        </button>
      </section>

      <section>
        <h2>₦12,000 Plan</h2>

        <p><strong>Investment:</strong> ₦12,000.00</p>
        <p><strong>Projected Return:</strong> ₦51,000.00</p>
        <p><strong>Daily Task:</strong> ₦1,700.00 / day</p>
        <p><strong>Task Reset:</strong> Every 24 Hours</p>

        <button>
          Subscribe for ₦12,000.00
        </button>
      </section>

      <br />

      <button onClick={() => onNavigate("dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}

export default Investments;
