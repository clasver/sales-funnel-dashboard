import { useState } from 'react';

function App() {
  // State for A/B testing variants
  const [headlineVariant, setHeadlineVariant] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Headline variants for A/B testing
  const headlineVariants = [
    { 
      primary: "Transform Your Health in 90 Days", 
      secondary: "Clinically proven formula that actually works" 
    },
    { 
      primary: "Feel Energetic, Focused, and Vital", 
      secondary: "Join 50,000+ customers who've reclaimed their health" 
    },
    { 
      primary: "The Supplement Doctors Recommend", 
      secondary: "Finally, a formula backed by real science" 
    }
  ];

  const currentHeadline = headlineVariants[headlineVariant];

  // Handle checkout
  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handlePurchase = () => {
    setShowThankYou(true);
    setShowCheckout(false);
  };

  const handleCancelCheckout = () => {
    setShowCheckout(false);
  };

  // Handle A/B testing rotation (in real app, this would be more sophisticated)
  const rotateHeadline = () => {
    setHeadlineVariant((prev) => (prev + 1) % headlineVariants.length);
  };

  if (showThankYou) {
    return (
      <div className="landing-page">
        <div className="thank-you-page">
          <div className="thank-you-content">
            <h1>Thank You!</h1>
            <p>Your order has been confirmed and is on its way.</p>
            <p>Check your email for tracking information.</p>
            <button 
              onClick={() => {
                setShowThankYou(false);
                setHeadlineVariant(0); // Reset for next visitor
              }}
              className="cta-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page">
      {/* Cookie Consent Banner (GDPR/CCPA) */}
      <div className="cookie-consent" id="cookie-consent">
        <div className="cookie-content">
          <p>We use cookies to enhance your experience and analyze traffic. By clicking "Accept", you agree to our use of cookies.</p>
          <div className="cookie-buttons">
            <button onClick={() => { const el = document.getElementById('cookie-consent'); if (el) el.style.display = 'none'; }}>Accept</button>
            <button onClick={() => { const el = document.getElementById('cookie-consent'); if (el) el.style.display = 'none'; }}>Reject</button>
            <a href="#" className="cookie-link">Learn More</a>
          </div>
        </div>
      </div>

      {/* Exit Intent Popup (simplified) */}
      {showCheckout && (
        <div className="exit-intent-popup">
          <div className="exit-content">
            <h2>Wait! Don't go yet...</h2>
            <p>Complete your purchase now and get an extra 10% off!</p>
            <button onClick={handlePurchase} className="cta-primary">
              Claim My Discount
            </button>
            <button onClick={handleCancelCheckout} className="cta-secondary">
              No Thanks
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!showCheckout && !showThankYou && (
        <>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="badges">
                <span className="badge">Money-Back Guarantee</span>
                <span className="badge">Free Shipping</span>
              </div>
              <h1 className="hero-headline">{currentHeadline.primary}</h1>
              <h2 className="hero-subhead">{currentHeadline.secondary}</h2>
              
              {/* A/B Testing Note (would be hidden in production) */}
              <div className="ab-test-info">
                Testing variant {headlineVariant + 1} of {headlineVariants.length}
                <button onClick={rotateHeadline} className="ab-test-button">
                  Rotate Headline
                </button>
              </div>
              
              <div className="hero-actions">
                <button onClick={handleCheckout} className="cta-primary">
                  Get Started - Limited Time Offer
                </button>
                <button onClick={() => alert('Learn more about our formula')} className="cta-secondary">
                  Learn More
                </button>
              </div>
              
              {/* Scarcity Elements */}
              <div className="hero-scarcity">
                <div className="countdown-timer">
                  <div>Offer ends in:</div>
                  <div className="timer">02:15:30</div>
                </div>
                <div className="stock-indicator">
                  <span>Only 37 left at this price</span>
                </div>
              </div>
              
              {/* Live Counter */}
              <div className="live-counter">
                <span>1,247 people bought this in the last 24 hours</span>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="hero-image">
              <div className="supplement-bottle"></div>
            </div>
          </section>

          {/* Benefit-Driven Copy */}
          <section className="benefits-section">
            <div className="section-header">
              <h2>Why Our Formula Works</h2>
              <p>Unlike other supplements that make empty promises, we deliver real results.</p>
            </div>
            
            <div className="problem-agitation">
              <h3>The Problem With Other Supplements</h3>
              <p>Most supplements use cheap, ineffective ingredients in insufficient doses. You're essentially paying for expensive urine.</p>
            </div>
            
            <div className="solution">
              <h3>Our Science-Backed Solution</h3>
              <p>We use clinically studied doses of premium ingredients that actually work synergistically.</p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <h4>Increased Energy</h4>
                <p>Feel vibrant and energetic throughout your day without crashes.</p>
              </div>
              <div className="benefit-card">
                <h4>Mental Clarity</h4>
                <p>Experience sharp focus and improved cognitive function.</p>
              </div>
              <div className="benefit-card">
                <h4>Better Recovery</h4>
                <p>Recover faster from workouts and daily stress.</p>
              </div>
              <div className="benefit-card">
                <h4>Immune Support</h4>
                <p>Strengthen your body's natural defenses.</p>
              </div>
            </div>
          </section>

          {/* Scientific Backing */}
          <section className="science-section">
            <div className="section-header">
              <h2>What Makes Us Different</h2>
              <p>Transparency you can trust.</p>
            </div>
            
            <div className="science-content">
              <div className="science-badge">
                <span>Third-Party Tested</span>
                <span>GMP Certified</span>
                <span>FDA Registered Facility</span>
              </div>
              
              <div className="ingredients-section">
                <h3>Premium, Transparent Ingredients</h3>
                <div className="ingredient-list">
                  <div className="ingredient-item">
                    <span className="ingredient-name">Ashwagandha KSM-66®</span>
                    <span className="ingredient-dose">600mg</span>
                    <span className="ingredient-benefit">Stress reduction & energy</span>
                  </div>
                  <div className="ingredient-item">
                    <span className="ingredient-name">Lion's Mane Mushroom</span>
                    <span className="ingredient-dose">500mg</span>
                    <span className="ingredient-benefit">Cognitive enhancement</span>
                  </div>
                  <div className="ingredient-item">
                    <span className="ingredient-name">Rhodiola Rosea</span>
                    <span className="ingredient-dose">300mg</span>
                    <span className="ingredient-benefit">Fatigue resistance</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust-Building Elements */}
          <section className="trust-section">
            <div className="section-header">
              <h2>Why Customers Trust Us</h2>
              <p>Real results from real people.</p>
            </div>
            
            {/* Testimonials */}
            <div className="testimonials-slider">
              <div className="testimonial">
                <p>"After 30 days, I finally feel like myself again. The brain fog is gone and I have sustained energy all day."</p>
                <div className="testimonial-author">
                  <span>Sarah K., Verified Buyer</span>
                </div>
              </div>
              <div className="testimonial">
                <p>"I was skeptical at first, but this actually delivers. My workouts have improved dramatically."</p>
                <div className="testimonial-author">
                  <span>Mike R., Verified Buyer</span>
                </div>
              </div>
              <div className="testimonial">
                <p>"Finally found a supplement that doesn't just give me expensive urine. Worth every penny."</p>
                <div className="testimonial-author">
                  <span>Jessica L., Verified Buyer</span>
                </div>
              </div>
            </div>
            
            {/* Logos/Certifications */}
            <div className="trust-logos">
              <h3>As Seen In</h3>
              <div className="logos">
                <div className="logo-item">Health Magazine</div>
                <div className="logo-item">Wellness Blog</div>
                <div className="logo-item">Fitness Journal</div>
                <div className="logo-item">Medical Review</div>
              </div>
              <div className="certifications">
                <div className="cert-item">GMP Certified</div>
                <div className="cert-item">Third-Party Tested</div>
                <div className="cert-item">FDA Registered</div>
                <div className="cert-item">Non-GMO</div>
              </div>
            </div>
            
            {/* Results Timeline */}
            <div className="results-timeline">
              <h3>What to Expect</h3>
              <div className="timeline">
                <div className="timeline-step">
                  <h4>Days 1-15</h4>
                  <p>Increased energy & reduced fatigue</p>
                </div>
                <div className="timeline-step">
                  <h4>Days 16-30</h4>
                  <p>Better focus & mental clarity</p>
                </div>
                <div className="timeline-step">
                  <h4>Days 31-60</h4>
                  <p>Improved stress resistance & recovery</p>
                </div>
                <div className="timeline-step">
                  <h4>Days 61-90</h4>
                  <p>Optimal health & vitality</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
              <p>Answers to common concerns</p>
            </div>
            
            <div className="faq-items">
              <div className="faq-item">
                <button className="faq-question">How long until I see results?</button>
                <div className="faq-answer">
                  <p>Most users notice increased energy within 7-14 days, with full benefits appearing after 30-60 days of consistent use.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">Are there any side effects?</button>
                <div className="faq-answer">
                  <p>Our formula uses natural, well-tolerated ingredients. Some users report mild digestive adjustment in the first few days as their body adapts.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">Is this safe to take with medications?</button>
                <div className="faq-answer">
                  <p>While our ingredients are generally safe, we recommend consulting with your healthcare provider before starting any new supplement, especially if you're taking medications.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">What's your return policy?</button>
                <div className="faq-answer">
                  <p>We offer a 90-day money-back guarantee. If you're not completely satisfied, simply return the product for a full refund - no questions asked.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question">How is this different from other supplements?</button>
                <div className="faq-answer">
                  <p>We use clinically studied doses of premium, patented ingredients. Most competitors use ineffective doses or cheaper, less effective forms.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
