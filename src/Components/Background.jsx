import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Background () {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  const optionsObj = {
  background: {
      color: {
          value: "#0a192f",
      },
  },
  fullScreen: {
    enable: true,
    zIndex: -10
  },
  fpsLimit: 120,
  interactivity: {
    enable: true,
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: false,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
      },
      collisions: {
          enable: true,
      },
      move: {
          direction: "right",
          enable: true,
          speed: 0.5,
          /* outModes: {
              default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false, */
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 3 },
      },
  },
  detectRetina: true,
}

  const presetObj = {
    preset: "stars",
    fullScreen: {
      enable: true,
      zIndex: -10
    },
  };

  return (
    <Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={optionsObj}
    />
  );
}