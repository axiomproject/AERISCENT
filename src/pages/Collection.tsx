
import { motion } from 'framer-motion';

const Collection = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="collection-section"
    >
      <div className="content-wrapper">
        <h1 className="page-title">OUR COLLECTION</h1>
        <div className="collection-grid">
          <div className="collection-card">
            <div className="card-content">
              <h3 className="collection-title">Signature Series</h3>
              <p className="collection-desc">A blend of lavender and vanilla with subtle notes of bergamot</p>
              <div className="price-tag">₱ 499.00</div>
              <button className="collection-btn">VIEW DETAILS</button>
            </div>
          </div>

          <div className="collection-card">
            <div className="card-content">
              <h3 className="collection-title">Fresh Linen</h3>
              <p className="collection-desc">Clean and crisp scent inspired by fresh morning breeze</p>
              <div className="price-tag">₱ 449.00</div>
              <button className="collection-btn">VIEW DETAILS</button>
            </div>
          </div>

          <div className="collection-card featured">
            <div className="card-content">
              <span className="featured-tag">BESTSELLER</span>
              <h3 className="collection-title">Premium Blend</h3>
              <p className="collection-desc">Our most luxurious fragrance with jasmine and white musk</p>
              <div className="price-tag">₱ 699.00</div>
              <button className="collection-btn">VIEW DETAILS</button>
            </div>
          </div>

          <div className="collection-card">
            <div className="card-content">
              <h3 className="collection-title">Garden Fresh</h3>
              <p className="collection-desc">A refreshing mix of citrus and green tea essences</p>
              <div className="price-tag">₱ 549.00</div>
              <button className="collection-btn">VIEW DETAILS</button>
            </div>
          </div>

          <div className="collection-card">
            <div className="card-content">
              <h3 className="collection-title">Evening Wood</h3>
              <p className="collection-desc">Deep and warm scents of cedar and sandalwood</p>
              <div className="price-tag">₱ 599.00</div>
              <button className="collection-btn">VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Collection;
