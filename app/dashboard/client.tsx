"use client";

import { DashboardContent } from "@/components/dashboard/dashboard-content";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  // Basic RelateCRM dashboard intro -- could be expanded for stats later
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold">Welcome to RelateCRM</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          Your all-in-one workspace for managing contacts, companies, and deals.
        </p>
        <p className="mt-4 text-base">
          Hi {firstName}, get started by adding your first contact, company, or deal!
        </p>
        <div className="flex gap-4 mt-8">
          <a href="/dashboard/contacts">
            <button className="btn btn-primary px-6 py-2 rounded text-white bg-primary hover:bg-primary/90 transition">
              Add Contact
            </button>
          </a>
          <a href="/dashboard/companies">
            <button className="btn btn-outline px-6 py-2 rounded border text-primary border-primary hover:bg-primary/5 transition">
              Create Company
            </button>
          </a>
        </div>
      </div>
      {/* Placeholder summaries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-lg p-6 bg-muted">
          <h2 className="text-lg font-semibold mb-2">Contacts</h2>
          <p>No contacts yet. Start by adding your first client.</p>
        </div>
        <div className="rounded-lg p-6 bg-muted">
          <h2 className="text-lg font-semibold mb-2">Companies</h2>
          <p>No companies found. Create one to begin tracking business relationships.</p>
        </div>
        <div className="rounded-lg p-6 bg-muted">
          <h2 className="text-lg font-semibold mb-2">Deals</h2>
          <p>No deals in your pipeline. Add a new deal to get started.</p>
        </div>
      </div>
    </div>
  );
}