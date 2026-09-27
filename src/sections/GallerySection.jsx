import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = EVENT_DATA.gallery;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleCardMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="gallery" className="section-spacing gallery-section" aria-label="Event Gallery & Archives">
      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">06 // VAULT ARCHIVES</div>
            <h2 className="section-title">CHRONICLES & ATMOSPHERE</h2>
          </div>
          <p className="section-subtitle">
            Glimpses from Bennett University's legendary hackathon arenas, keynotes, and victory podiums.
          </p>
        </div>

        {/* Asymmetric Swiss Gallery Grid */}
        <div className="gallery-asymmetric-grid">
          {images.map((item, idx) => (
            <div
              key={item.id}
              className={`gallery-item-card card-vault-3d item-span-${idx === 0 || idx === 3 ? 'large' : 'normal'}`}
              onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-badge-top font-mono">
                    <Camera size={13} />
                    <span>{item.category}</span>
                  </div>
                  <div className="gallery-caption-bottom">
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-caption">{item.caption}</p>
                  </div>
                  <div className="gallery-expand-indicator">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="vault-modal-backdrop lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
        >
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="lightbox-top-bar">
              <span className="font-mono text-emerald text-xs">
                ARCHIVE {lightboxIndex + 1} / {images.length} // {images[lightboxIndex].category}
              </span>
              <button
                onClick={closeLightbox}
                className="modal-close-btn"
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>
            </div>

            {/* Main Image with Navigation Arrows */}
            <div className="lightbox-viewport">
              <button
                onClick={prevImage}
                className="lightbox-nav-btn prev"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <img
                src={images[lightboxIndex].image}
                alt={images[lightboxIndex].title}
                className="lightbox-main-img"
              />

              <button
                onClick={nextImage}
                className="lightbox-nav-btn next"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="lightbox-footer">
              <h3 className="lightbox-title">{images[lightboxIndex].title}</h3>
              <p className="lightbox-caption">{images[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
