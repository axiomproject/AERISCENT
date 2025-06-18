const NewArrivals = () => {
  return (
    <main className="new-arrivals-snap-container">
      <section className="new-arrivals-section-one">
        <div className="content-wrapper">
          <h1 className="page-title">NEW ARRIVALS</h1>
          <div className="centered-image-container">
            <img src="/NewImage1.jpg" alt="New Arrival Featured" className="new-arrival-image" />
          </div>
        </div>
      </section>

      <section className="new-arrivals-section-two">
        <div className="content-wrapper">
          <div className="centered-image-container">
            <img src="/NewImage2.jpg" alt="New Arrival Featured" className="new-arrival-image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewArrivals;
