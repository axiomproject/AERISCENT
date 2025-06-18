import { useEffect, useRef } from 'react';

const Home = () => {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = [sectionRef.current, portraitRef.current];
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main className="snap-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">AERISCENT</h1>
          <h2 className="hero-subtitle">BY VERDANT VEIL</h2>
        </div>
      </section>
      
      <section className="section-two">
        <div className="content-wrapper split-section">
          <div className="image-container">
            <img src="/Section2Image.JPG" alt="Aeriscent Product" className="feature-image" />
          </div>
          <div className="text-content" ref={sectionRef}>
            <h2 className="section-title scroll-animate"><strong>AERISCENT</strong> is more than a linen spray</h2>
            <p className="section-description scroll-animate">
              It is made up of 100% natural Ingredients, Free from harsh chemicals, Artificial Fragrances, or synthetic additives.
            </p>
            <p className="section-description scroll-animate">
              We value fragrances, natural products, and eco-friendly decor, with our target audience in middle to upper-middle class income and self-care interests.
            </p>
            <p className="section-description scroll-animate">
              When it comes to scents, there are different types of sensitivities and preferences that <strong>AERISCENT</strong> can offer in one spray.
            </p>
            <a href="/collection" className="shop-now-btn scroll-animate">SHOP NOW</a>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="content-wrapper">
          <div className="portrait-container" ref={portraitRef}>
            <div className="portrait-image-wrapper scroll-animate">
              <img src="/Section3Image1.JPG" alt="Aeriscent Portrait 1" className="portrait-image" />
            </div>
            <div className="portrait-image-wrapper scroll-animate">
              <img src="/Section3Image2.jpg" alt="Aeriscent Portrait 2" className="portrait-image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
