import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for faster load
import '../index.css';

const ParticleBg = () => {
  const [init, setInit] = useState(false);

  // Initialize Particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration for background effect
  const particleOptions = {
    fullScreen: {
      enable: true, // Enabling fullscreen
      zIndex: -1, // Ensures particles are behind content
    },
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          area: 800, // Particles density in area
        },
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        value: 0.5, // Transparency of particles
      },
      size: {
        value: 3, // Size of particles
      },
      move: {
        enable: true,
        speed: 2, // Speed of particle movement
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff", // Lines connecting particles
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particle interaction when hovered
        },
      },
    },
  };

  return (
    <div>
      {init && (
        <Particles id="tsparticles" options={particleOptions} />
      )}
    </div>
  );
};

export default ParticleBg;
