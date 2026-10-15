"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function VajrayudhaViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 550;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Antique Brass PBR Material with Anisotropic/Metallic Sheen
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#D4AF37"),
      metalness: 0.88,
      roughness: 0.28,
      bumpScale: 0.05,
    });

    const darkBrassAccent = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#7A5B18"),
      metalness: 0.92,
      roughness: 0.45,
    });

    const rubyMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#8A0E17"),
      emissive: new THREE.Color("#4A0E17"),
      emissiveIntensity: 0.5,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 0.5,
    });

    // Master Group
    const vajraGroup = new THREE.Group();
    scene.add(vajraGroup);

    // 1. Central Cosmic Bindu Sphere
    const centerSphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const centerSphere = new THREE.Mesh(centerSphereGeo, brassMaterial);
    vajraGroup.add(centerSphere);

    // Central Ruby Inlay at Bindu Core
    const rubyGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const centerRuby = new THREE.Mesh(rubyGeo, rubyMaterial);
    vajraGroup.add(centerRuby);

    // 2. Collar Rings (Upper and Lower Damaru Rings)
    const ringGeo = new THREE.TorusGeometry(0.48, 0.08, 16, 32);
    const upperRing = new THREE.Mesh(ringGeo, darkBrassAccent);
    upperRing.position.y = 0.62;
    upperRing.rotation.x = Math.PI / 2;
    vajraGroup.add(upperRing);

    const lowerRing = new THREE.Mesh(ringGeo, darkBrassAccent);
    lowerRing.position.y = -0.62;
    lowerRing.rotation.x = Math.PI / 2;
    vajraGroup.add(lowerRing);

    // 3. Lotus Pod Pedestals (Padma Peethaya)
    const lotusGeo = new THREE.ConeGeometry(0.52, 0.45, 16);
    const upperLotus = new THREE.Mesh(lotusGeo, brassMaterial);
    upperLotus.position.y = 0.9;
    vajraGroup.add(upperLotus);

    const lowerLotus = new THREE.Mesh(lotusGeo, brassMaterial);
    lowerLotus.position.y = -0.9;
    lowerLotus.rotation.x = Math.PI;
    vajraGroup.add(lowerLotus);

    // 4. Central Prongs (Top and Bottom)
    const centralProngGeo = new THREE.CylinderGeometry(0.08, 0.14, 1.8, 16);
    const topProng = new THREE.Mesh(centralProngGeo, brassMaterial);
    topProng.position.y = 1.9;
    vajraGroup.add(topProng);

    const bottomProng = new THREE.Mesh(centralProngGeo, brassMaterial);
    bottomProng.position.y = -1.9;
    vajraGroup.add(bottomProng);

    // Tips for Central Prongs (Flame / Lotus Spearhead)
    const tipGeo = new THREE.ConeGeometry(0.16, 0.5, 16);
    const topTip = new THREE.Mesh(tipGeo, brassMaterial);
    topTip.position.y = 2.9;
    vajraGroup.add(topTip);

    const bottomTip = new THREE.Mesh(tipGeo, brassMaterial);
    bottomTip.position.y = -2.9;
    bottomTip.rotation.x = Math.PI;
    vajraGroup.add(bottomTip);

    // 5. Mythical Makara 4-Pronged Arches (Top & Bottom Quad Prongs)
    const createProngCurve = (isTop: boolean, angle: number) => {
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, isTop ? 1.0 : -1.0, 0),
        new THREE.Vector3(
          Math.cos(angle) * 0.95,
          isTop ? 1.5 : -1.5,
          Math.sin(angle) * 0.95
        ),
        new THREE.Vector3(
          Math.cos(angle) * 0.85,
          isTop ? 2.4 : -2.4,
          Math.sin(angle) * 0.85
        ),
        new THREE.Vector3(0, isTop ? 2.85 : -2.85, 0)
      );

      const tubeGeo = new THREE.TubeGeometry(curve, 24, 0.07, 12, false);
      const prongMesh = new THREE.Mesh(tubeGeo, brassMaterial);
      return prongMesh;
    };

    const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
    angles.forEach((angle) => {
      vajraGroup.add(createProngCurve(true, angle));
      vajraGroup.add(createProngCurve(false, angle));
    });

    // 6. Divine Golden Particle Cloud (Spiritual Aura Emission)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 6;

      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = Math.sin(theta) * radius;
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#FFE599"),
      size: 0.08,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffeedd, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffd700, 2.8);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff8844, 2.0);
    rimLight.position.set(-5, -5, -4);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0xffcc44, 3, 10);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // Mouse Tracking Physics
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        prevMouseX = clientX;
        prevMouseY = clientY;
      } else {
        // Subtle ambient parallax mouse tracking
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = normX * 0.45;
        targetRotationX = normY * 0.25;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    container.addEventListener("touchstart", handlePointerDown);
    container.addEventListener("touchmove", handlePointerMove);
    container.addEventListener("touchend", handlePointerUp);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Fluid rotation inertia
      vajraGroup.rotation.y += (targetRotationY - vajraGroup.rotation.y) * 0.05;
      vajraGroup.rotation.x += (targetRotationX - vajraGroup.rotation.x) * 0.05;

      // Natural gentle continuous float
      vajraGroup.rotation.y += 0.005;
      vajraGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Particle aura rotation & oscillation
      particles.rotation.y = -elapsedTime * 0.04;
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let py = posAttr.getY(i);
        py += Math.sin(elapsedTime + i) * 0.002;
        posAttr.setY(i, py);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("touchstart", handlePointerDown);
      container.removeEventListener("touchmove", handlePointerMove);
      container.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[620px] flex items-center justify-center">
      {/* Sacred Radiant Aura Background Behind 3D Mesh */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#4A0E17]/40 to-transparent blur-3xl animate-pulse" />
      </div>

      {/* Center 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
        title="අංශක 360 ක් කරකවා බලන්න / Drag to rotate the sacred Vajrayudha"
      />

      {/* Interactive Micro-badge indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-[#1A060A]/80 border border-[#D4AF37]/50 backdrop-blur-md text-[11px] font-medium text-[#FFF0BE] flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span>{isInteracting ? "ශක්ති ක්ෂේත්‍රය සක්‍රීයයි / Orbiting" : "360° අන්තර්ක්‍රියාකාරී වජ්‍රායුධය / 3D Interactive"}</span>
        </div>
      </div>
    </div>
  );
}
