export default function Specials() {
  return (
    <section className="specials">
      <h2>This Week's Specials!</h2>
      {/* Repeat for each special */}
      <div className="special-card">
        <img src="/images/greek-salad.jpg" alt="Greek Salad" />
        <h3>Greek Salad</h3>
        <p>Refreshing salad with tomatoes, cucumbers, onions, olives, and feta cheese.</p>
      </div>
    </section>
  );
}
