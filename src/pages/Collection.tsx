import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const products = [
  {
    id: 1,
    title: "Signature Series",
    shortDesc: "A blend of lavender and vanilla with subtle notes of bergamot",
    price: "₱ 499.00",
    fullDesc: "Our flagship fragrance combines the soothing properties of lavender with the warmth of vanilla, perfectly balanced with citrusy bergamot notes. This unique blend creates a calming atmosphere while maintaining a subtle sophistication.",
    features: [
      "Top notes: Bergamot, Lavender",
      "Heart notes: Vanilla, Jasmine",
      "Base notes: Musk, Amber",
      "Burn time: 40-45 hours",
      "100% soy wax blend"
    ]
  },
  {
    id: 2,
    title: "Fresh Linen",
    shortDesc: "Clean and crisp scent inspired by fresh morning breeze",
    price: "₱ 449.00",
    fullDesc: "Experience the invigorating sensation of freshly laundered linens dried in the morning sun. This clean, crisp fragrance brings the outdoor freshness inside with its light and airy composition.",
    features: [
      "Top notes: Cotton, Ocean Breeze",
      "Heart notes: White Flowers, Fresh Air",
      "Base notes: Clean Musk, Powder",
      "Burn time: 35-40 hours",
      "100% soy wax blend"
    ]
  },
  {
    id: 3,
    title: "Premium Blend",
    shortDesc: "Our most luxurious fragrance with jasmine and white musk",
    price: "₱ 699.00",
    featured: true,
    fullDesc: "A sophisticated blend that exemplifies luxury and elegance. The delicate jasmine is perfectly complemented by rich white musk, creating an ambiance of pure indulgence.",
    features: [
      "Top notes: White Tea, Bergamot",
      "Heart notes: Jasmine, Rose",
      "Base notes: White Musk, Sandalwood",
      "Burn time: 50-55 hours",
      "Premium soy wax blend"
    ]
  },
  {
    id: 4,
    title: "Garden Fresh",
    shortDesc: "A refreshing mix of citrus and green tea essences",
    price: "₱ 549.00",
    fullDesc: "Transport yourself to a serene garden with this refreshing blend. The vibrant citrus notes combined with calming green tea create a perfect balance of energizing and soothing elements.",
    features: [
      "Top notes: Citrus, Green Tea",
      "Heart notes: Herbs, Lemongrass",
      "Base notes: Green Leaves, Light Musk",
      "Burn time: 45-50 hours",
      "100% soy wax blend"
    ]
  },
  {
    id: 5,
    title: "Evening Wood",
    shortDesc: "Deep and warm scents of cedar and sandalwood",
    price: "₱ 599.00",
    fullDesc: "A sophisticated woody fragrance that brings the essence of a luxury spa home. The deep cedar notes paired with rich sandalwood create a warm, enveloping atmosphere perfect for relaxation.",
    features: [
      "Top notes: Cedar, Pine",
      "Heart notes: Sandalwood, Amber",
      "Base notes: Vanilla, Patchouli",
      "Burn time: 45-50 hours",
      "100% soy wax blend"
    ]
  }
];

const Collection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const ProductModal = ({ product, onClose }: { product: typeof products[0], onClose: () => void }) => {
    if (!product) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          <h2>{product.title}</h2>
          <p className="modal-price">{product.price}</p>
          <p className="modal-description">{product.fullDesc}</p>
          <div className="features-list">
            {product.features.map((feature, index) => (
              <p key={index} className="feature-item">{feature}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

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
          {products.map(product => (
            <div key={product.id} className={`collection-card ${product.featured ? 'featured' : ''}`}>
              <div className="card-content">
                {product.featured && <span className="featured-tag">BESTSELLER</span>}
                <h3 className="collection-title">{product.title}</h3>
                <p className="collection-desc">{product.shortDesc}</p>
                <div className="price-tag">{product.price}</div>
                <button 
                  className="collection-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Collection;
