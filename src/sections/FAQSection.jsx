import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'General', 'Participation', 'Logistics', 'Registration'];

  const filteredFaqs = EVENT_DATA.faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-spacing faq-section" aria-label="Frequently Asked Questions">
      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">07 // INTEL & DECRYPTION</div>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <p className="section-subtitle">
            Everything you need to know about participating in Vibranium Vault at Bennett University.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="faq-controls-bar">
          {/* Category Filter Pills */}
          <div className="faq-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`faq-cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="faq-search-box">
            <Search size={15} className="faq-search-icon" />
            <input
              type="text"
              placeholder="Search intel..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null);
              }}
              className="faq-search-input"
              aria-label="Search frequently asked questions"
            />
          </div>
        </div>

        {/* Morphing Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-btn-${idx}`}
                  >
                    <div className="faq-question-left">
                      <span className="faq-index font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="faq-question-text font-display">
                        {faq.q}
                      </span>
                    </div>

                    <div className="faq-icon-wrapper">
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </button>

                  {/* Morphing Height Content Area */}
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="faq-answer-wrapper"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                    }}
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faq-empty-state">
              <HelpCircle size={28} className="text-muted" />
              <p>No queries matched your search query "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
