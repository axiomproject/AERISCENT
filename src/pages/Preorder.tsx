import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PreorderItem {
  id: number;
  title: string;
  shortDesc: string;
  releaseDate: string;
  price: string;
  fullDesc: string;
  features: string[];
}

const preorderItems: PreorderItem[] = [
  {
    id: 1,
    title: "Winter Forest Collection",
    shortDesc: "A refreshing blend of pine, cedarwood, and winter berries. Perfect for creating a cozy winter atmosphere.",
    releaseDate: "Launching December 15, 2025",
    price: "₱ 599.00",
    fullDesc: "Immerse yourself in the enchanting atmosphere of a winter forest with our newest seasonal collection. This carefully crafted fragrance combines the crisp scent of pine needles with the warmth of cedarwood and the sweetness of winter berries.",
    features: [
      "Limited edition winter release",
      "Premium soy wax blend",
      "50-hour burn time",
      "Includes wooden wick",
      "Handcrafted ceramic vessel",
      "Gift-ready packaging"
    ]
  },
  {
    id: 2,
    title: "Holiday Comfort Bundle",
    shortDesc: "Set of 3 festive scents: Vanilla Spice, Winter Pine, and Cinnamon Apple. Save 20% with bundle pricing.",
    releaseDate: "Pre-order until December 24, 2025",
    price: "₱ 1,499.00",
    fullDesc: "Celebrate the holiday season with our exclusive bundle featuring three festive fragrances. Each scent is designed to bring warmth and joy to your home during the winter months. Save 20% compared to individual purchases.",
    features: [
      "Three 8oz candles in gift box",
      "Vanilla Spice: warm and sweet",
      "Winter Pine: fresh and crisp",
      "Cinnamon Apple: spicy and fruity",
      "40-hour burn time each",
      "Premium gift packaging"
    ]
  },
  {
    id: 3,
    title: "New Year Collection",
    shortDesc: "Start fresh with our citrus and herb blend. Features notes of bergamot, sage, and fresh mint.",
    releaseDate: "Coming January 2026",
    price: "₱ 699.00",
    fullDesc: "Welcome the new year with a fresh start. This invigorating blend combines zesty citrus notes with aromatic herbs to create an uplifting atmosphere that inspires new beginnings.",
    features: [
      "Special new year edition",
      "Large 12oz size",
      "Premium soy wax blend",
      "60-hour burn time",
      "Includes cotton wick",
      "Reusable glass container"
    ]
  }
];

const Preorder = () => {
  const [selectedItem, setSelectedItem] = useState<PreorderItem | null>(null);

  const PreorderModal = ({ item, onClose }: { item: PreorderItem, onClose: () => void }) => {
    if (!item) return null;

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
          <h2>{item.title}</h2>
          <p className="release-date modal-release-date">{item.releaseDate}</p>
          <p className="modal-price">{item.price}</p>
          <p className="modal-description">{item.fullDesc}</p>
          <div className="features-list">
            {item.features.map((feature: string, index: number) => (
              <p key={index} className="feature-item">{feature}</p>
            ))}
          </div>
          <button className="add-to-cart-btn">RESERVE NOW</button>
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
      className="preorder-section"
    >
      <div className="content-wrapper">
        <h1 className="page-title">UPCOMING RELEASES</h1>
        <div className="preorder-grid">
          {preorderItems.map(item => (
            <div key={item.id} className="preorder-item">
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.shortDesc}</p>
                <div className="item-details">
                  <p className="release-date">{item.releaseDate}</p>
                  <p className="item-price">{item.price}</p>
                </div>
                <button 
                  className="preorder-btn"
                  onClick={() => setSelectedItem(item)}
                >
                  RESERVE NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <PreorderModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Preorder;
