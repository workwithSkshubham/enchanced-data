import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * VibraniumCore3D — Central Dimensional Energy Core
 * Built with Three.js WebGL: Concentric rotating geometric energy rings,
 * central Vibranium polyhedral core, orbiting spark particles, and mouse parallax.
 * Includes graceful SVG/CSS fallback if WebGL is unavailable or user has reduced motion.
 */
export default function VibraniumCore3D() {
  const mountRef = useRef(null);
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [webGLSupported] = useState(() => {
    if (typeof window === 'undefined') return true;
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (reducedMotion || !webGLSupported) {
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // Core Group for universal rotation & mouse tilt
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // ==========================================
    // 1. Concentric Dimensional Rings (Doctor Strange / Arc Reactor Inspired)
    // ==========================================
    
    // Outer Segmented Ring
    const outerRingGeo = new THREE.TorusGeometry(2.35, 0.022, 16, 80);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x24332c,
      wireframe: false,
      transparent: true,
      opacity: 0.65,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    coreGroup.add(outerRing);

    // Outer Runed Hexagon Ring (Emerald)
    const emeraldRingGeo = new THREE.TorusGeometry(1.95, 0.035, 6, 6); // Hexagonal torus
    const emeraldRingMat = new THREE.MeshBasicMaterial({
      color: 0x19E68C,
      transparent: true,
      opacity: 0.85,
    });
    const emeraldRing = new THREE.Mesh(emeraldRingGeo, emeraldRingMat);
    coreGroup.add(emeraldRing);

    // Middle Inverted Octagon Ring (Mystical Violet)
    const violetRingGeo = new THREE.TorusGeometry(1.5, 0.028, 8, 8); // Octagonal torus
    const violetRingMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.75,
    });
    const violetRing = new THREE.Mesh(violetRingGeo, violetRingMat);
    violetRing.rotation.x = Math.PI / 4;
    coreGroup.add(violetRing);

    // Inner Gyroscope Ring (Subtle Orange Spark Accent)
    const sparkRingGeo = new THREE.TorusGeometry(1.15, 0.02, 16, 64);
    const sparkRingMat = new THREE.MeshBasicMaterial({
      color: 0xFF8A3D,
      transparent: true,
      opacity: 0.8,
    });
    const sparkRing = new THREE.Mesh(sparkRingGeo, sparkRingMat);
    sparkRing.rotation.y = Math.PI / 3;
    coreGroup.add(sparkRing);

    // ==========================================
    // 2. Central Vibranium Core (Polyhedron / Crystal)
    // ==========================================
    const coreGeo = new THREE.OctahedronGeometry(0.72, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x34F59E,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const coreWireMesh = new THREE.Mesh(coreGeo, coreWireMat);
    coreGroup.add(coreWireMesh);

    // Inner Glowing Solid Diamond
    const innerGeo = new THREE.IcosahedronGeometry(0.42, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: false,
      transparent: true,
      opacity: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // ==========================================
    // 3. Orbiting Energy Spark Particles
    // ==========================================
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const emeraldCol = new THREE.Color(0x19E68C);
    const violetCol = new THREE.Color(0x8B5CF6);
    const sparkCol = new THREE.Color(0xFF8A3D);

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical orbit
      const radius = 1.3 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Randomly assign one of 3 colors
      const r = Math.random();
      const col = r < 0.55 ? emeraldCol : r < 0.85 ? violetCol : sparkCol;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // ==========================================
    // 4. Mouse Tracking Parallax
    // ==========================================
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;

      targetRotY = (clientX / (rect.width / 2)) * 0.45;
      targetRotX = -(clientY / (rect.height / 2)) * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // ==========================================
    // 5. Animation Loop (60fps GPU-friendly)
    // ==========================================
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Independent concentric ring counter-rotations
      emeraldRing.rotation.z += delta * 0.35;
      violetRing.rotation.z -= delta * 0.28;
      sparkRing.rotation.x += delta * 0.4;
      sparkRing.rotation.y += delta * 0.2;

      // Pulsing central crystal
      coreWireMesh.rotation.y += delta * 0.5;
      coreWireMesh.rotation.x += delta * 0.3;
      const pulse = 1 + Math.sin(time * 2.5) * 0.06;
      coreWireMesh.scale.set(pulse, pulse, pulse);

      innerMesh.rotation.y -= delta * 0.4;

      // Orbiting particles rotation
      particles.rotation.y += delta * 0.18;
      particles.rotation.z += delta * 0.12;

      // Smooth mouse parallax lerp
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      coreGroup.rotation.x = currentRotX;
      coreGroup.rotation.y = currentRotY + time * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Memory cleanup
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerRingGeo.dispose();
      outerRingMat.dispose();
      emeraldRingGeo.dispose();
      emeraldRingMat.dispose();
      violetRingGeo.dispose();
      violetRingMat.dispose();
      sparkRingGeo.dispose();
      sparkRingMat.dispose();
      coreGeo.dispose();
      coreWireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion, webGLSupported]);

  // Graceful Fallback if WebGL or reduced-motion is active
  if (!webGLSupported || reducedMotion) {
    return (
      <div className="vibranium-core-fallback" aria-label="Vibranium Core Energy Symbol">
        <svg viewBox="0 0 200 200" className="core-fallback-svg">
          <defs>
            <linearGradient id="fallbackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#19E68C" />
              <stop offset="60%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#FF8A3D" />
            </linearGradient>
            <filter id="fallbackGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <circle cx="100" cy="100" r="82" stroke="rgba(25, 230, 140, 0.3)" strokeWidth="1.5" strokeDasharray="8 6" fill="none" />
          <polygon points="100,35 155,67 155,133 100,165 45,133 45,67" stroke="#19E68C" strokeWidth="2" fill="none" opacity="0.8" />
          <polygon points="100,50 140,100 100,150 60,100" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.8" />
          <circle cx="100" cy="100" r="14" fill="#19E68C" filter="url(#fallbackGlow)" opacity="0.9" />
          <circle cx="100" cy="100" r="6" fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  return (
    <div className="vibranium-core-canvas-container" ref={mountRef} aria-hidden="true">
      {/* Background Soft Aura */}
      <div className="core-ambient-aura" />
    </div>
  );
}
