export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <section className="mb-8">
        <p className="text-lg mb-2">Get started by adding contacts, companies, or deals.</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg p-6 bg-muted">
          <h2 className="text-lg font-semibold mb-2">Contacts</h2>
          <p>A centralized list of all your client and team relationships.</p>
        </div>
        <div className="rounded-lg p-6 bg-muted">
          <h2 className="text-lg font-semibold mb-2">Companies</h2>
          <p>Track every client organization—connect deals and contacts for full visibility.</p>
        </div>
        <div className="rounded-lg p-6 bg-muted">
          <h2 className="text-lg font-semibold mb-2">Deals</h2>
          <p>View all current opportunities and prospects in your pipeline.</p>
        </div>
      </div>
    </div>
  );
}