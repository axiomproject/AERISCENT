
const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">AERISCENT</h1>
          <h2 className="hero-subtitle">VERDANT VEIL</h2>
        </div>
      </section>
      
      <section className="section-two">
        <div className="content-wrapper split-section">
          <div className="image-container">
            <img src="/Section2Image.JPG" alt="Aeriscent Product" className="feature-image" />
          </div>
          <div className="text-content">
            <h2 className="section-title"><strong>AERISCENT</strong> is more than a linen spray</h2>
            <p className="section-description">
              It is made up of 100% natural Ingredients, Free from harsh chemicals, Artificial Fragrances, or synthetic additives.
            </p>
            <p className="section-description">
              We value fragrances, natural products, and eco-friendly decor, with our target audience in middle to upper-middle class income and self-care interests.
            </p>
            <p className="section-description">
              When it comes to scents, there are different types of sensitivities and preferences that <strong>AERISCENT</strong> can offer in one spray.
            </p>
            <a href="/shop" className="shop-now-btn">SHOP NOW</a>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="content-wrapper">
          <div className="portrait-container">
            <div className="portrait-image-wrapper">
              <img src="/Section3Image1.JPG" alt="Aeriscent Portrait 1" className="portrait-image" />
            </div>
            <div className="portrait-image-wrapper">
              <img src="/Section3Image2.jpg" alt="Aeriscent Portrait 2" className="portrait-image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
