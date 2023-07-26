// Import required modules and components
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo, useEffect } from "react";

// Define the ParticlesComponent functional component
const ParticlesComponent = (props) => {
  // useEffect hook to run once after the component mounts
  useEffect(() => {
    // Find the particles container element
    const particlesContainer = document.querySelector(".tsparticles-canvas-el");
    if (particlesContainer) {
      // Load the particles using the tsparticles-slim library
      loadSlim(particlesContainer);
    }
  }, []);

  // useMemo hook to memoize the options object for better performance
  const options = useMemo(() => {
    // Configuration object for the particles animation
    return {
      background: {
        color: "#000", // Background color of the particles container
      },
      fullScreen: {
        enable: true, // Enable particles to cover the full screen
        zIndex: -1,   // Set the z-index of the particles canvas (layer below other elements)
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,   // Enable particles interaction on click
            mode: "push",   // Particle interaction mode on click (push particles away)
          },
          onHover: {
            enable: true,   // Enable particles interaction on hover
            mode: "repulse", // Particle interaction mode on hover (repulse particles)
          },
        },
        modes: {
          push: {
            quantity: 10, // Number of particles to push on click
          },
          repulse: {
            distance: 100, // Distance particles should be repulsed on hover
          },
        },
      },
      particles: {
        links: {
          enable: true,      // Enable particle links (connections between particles)
          distance: 200,     // Maximum distance for particle links
        },
        move: {
          enable: true,      // Enable particle movement
          speed: { min: 1, max: 5 }, // Set the range of particle movement speed
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // Set the range of particle opacity
        },
        size: {
          value: { min: 1, max: 3 }, // Set the range of particle size
        },
      },
    };
  }, []);

  // useCallback hook to memoize the particlesInit function for better performance
  const particlesInit = useCallback((engine) => {
    // Load particles using the tsparticles-slim library on the provided engine
    loadSlim(engine);
  }, []);

  // Return the Particles component with the defined options and initialization function
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
