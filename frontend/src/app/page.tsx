export default function Home() {
  return (
    <main className="minimal-page">
      <section className="minimal-shell">
        <h1 className="page-title">Flight Delay</h1>
        <form className="route-form">
          <label className="field">
            <span>Origin</span>
            <input type="text" placeholder="DEL" />
          </label>
          <label className="field">
            <span>Dest</span>
            <input type="text" placeholder="BOM" />
          </label>
        </form>
      </section>
    </main>
  );
}
