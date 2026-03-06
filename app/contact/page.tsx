export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
          Concierge
        </p>
        <h1 className="font-display text-4xl text-noir-900">
          We respond within the hour.
        </h1>
        <p className="max-w-2xl text-sm text-noir-600">
          Styling requests, atelier appointments, and bespoke inquiries welcome.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <form className="space-y-4 rounded-3xl border border-noir-100 p-8">
          <input
            placeholder="Name"
            className="w-full border border-noir-200 px-4 py-3 text-sm"
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full border border-noir-200 px-4 py-3 text-sm"
          />
          <textarea
            placeholder="Request"
            rows={4}
            className="w-full border border-noir-200 px-4 py-3 text-sm"
          />
          <button className="bg-noir-900 px-6 py-3 text-xs uppercase tracking-[0.3em] text-bone-50">
            Submit
          </button>
        </form>
        <div className="space-y-4 rounded-3xl border border-noir-100 p-8 text-sm text-noir-600">
          <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
            Contact
          </p>
          <p>concierge@vaultnoir.com</p>
          <p>+1 (212) 555-0196</p>
          <p>By appointment only</p>
        </div>
      </div>
    </main>
  );
}
