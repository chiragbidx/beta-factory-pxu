export default function DealsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Deals</h1>
      <p className="text-muted-foreground mb-6">
        No deals in your pipeline. Add your first deal to start tracking opportunities.
      </p>
      <a href="#" className="inline-block">
        <button className="btn btn-primary px-6 py-2 rounded text-white bg-primary hover:bg-primary/90 transition">
          Add Deal
        </button>
      </a>
    </div>
  );
}