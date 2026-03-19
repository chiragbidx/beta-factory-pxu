export default function ContactsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Contacts</h1>
      <p className="text-muted-foreground mb-6">
        No contacts yet. Add your first contact to start building relationships.
      </p>
      <a href="#" className="inline-block">
        <button className="btn btn-primary px-6 py-2 rounded text-white bg-primary hover:bg-primary/90 transition">
          Add Contact
        </button>
      </a>
    </div>
  );
}