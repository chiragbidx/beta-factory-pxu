export default function CompaniesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Companies</h1>
      <p className="text-muted-foreground mb-6">
        No companies yet. Create one to track client organizations.
      </p>
      <a href="#" className="inline-block">
        <button className="btn btn-outline px-6 py-2 rounded border text-primary border-primary hover:bg-primary/5 transition">
          Create Company
        </button>
      </a>
    </div>
  );
}