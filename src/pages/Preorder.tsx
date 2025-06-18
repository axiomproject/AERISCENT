import React from 'react';

const Preorder = () => {
  return (
    <main className="preorder-section">
      <div className="content-wrapper">
        <h1 className="page-title">UPCOMING RELEASES</h1>
        <div className="preorder-grid">
          <div className="preorder-item">
            <div className="item-content">
              <h3 className="item-title">Winter Forest Collection</h3>
              <p className="item-description">A refreshing blend of pine, cedarwood, and winter berries. Perfect for creating a cozy winter atmosphere.</p>
              <div className="item-details">
                <p className="release-date">Launching December 15, 2023</p>
                <p className="item-price">₱ 599.00</p>
              </div>
              <button className="preorder-btn">RESERVE NOW</button>
            </div>
          </div>

          <div className="preorder-item">
            <div className="item-content">
              <h3 className="item-title">Holiday Comfort Bundle</h3>
              <p className="item-description">Set of 3 festive scents: Vanilla Spice, Winter Pine, and Cinnamon Apple. Save 20% with bundle pricing.</p>
              <div className="item-details">
                <p className="release-date">Pre-order until December 1, 2023</p>
                <p className="item-price">₱ 1,499.00</p>
              </div>
              <button className="preorder-btn">RESERVE NOW</button>
            </div>
          </div>

          <div className="preorder-item">
            <div className="item-content">
              <h3 className="item-title">New Year Collection</h3>
              <p className="item-description">Start fresh with our citrus and herb blend. Features notes of bergamot, sage, and fresh mint.</p>
              <div className="item-details">
                <p className="release-date">Coming January 2024</p>
                <p className="item-price">₱ 699.00</p>
              </div>
              <button className="preorder-btn">RESERVE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Preorder;
