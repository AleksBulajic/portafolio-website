import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo, useState } from "react";

const ParticlesComponent = (props) => {
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    const particlesContainer = document.querySelector(".tsparticles-canvas-el");
    if (particlesContainer) {
      loadSlim(particlesContainer);
    }
  }, []);

  const handleClick = () => {
    if (particleCount < 2) {
      setParticleCount(particleCount + 1);
    }
  };

  const options = useMemo(() => {
    return {
      background: {
        color: "#000",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: particleCount < 2 ? 10 : 0,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 200,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        maxParticles: 2,
      },
    };
  }, [particleCount]);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <div onClick={handleClick}>
      <Particles id={props.id} init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesComponent;
