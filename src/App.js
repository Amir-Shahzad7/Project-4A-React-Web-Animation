import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";
import Sun from "./Images/Sun.png";
import Cloud from "./Images/Cloud.png";
import Bird from "./Images/Bird.gif";
import Ship from "./Images/Ship.gif";
import Runner from "./Images/Runner.gif";
import Tree from "./Images/Tree.png";

function App() {

  const { ref: Clouds, getAnimation: CloudAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(130%)" },
      { transform: "translateX(-130%)" },
    ],

    timing: {
      duration: 19000,
      iterations: Infinity,
      direction: "normal",
    },
  });

  const { ref: Birds, getAnimation: BirdAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],

    timing: {
      duration: 8000,
      iterations: Infinity,
      direction: "reverse",
    },
  });

  const { ref: Boat, getAnimation: BoatAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-100%)" },
      { transform: "translateX(100%)" },
    ],

    timing: {
      duration: 25000,
      iterations: Infinity,
      direction: "reverse",
    },
  });

  const { ref: Trees, getAnimation: TreesAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],

    timing: {
      duration: 15000,
      iterations: Infinity,
      direction: "normal",
    },
  });

  const { ref: Cyclist, getAnimation: CyclistAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(3px)" },
      { transform: "translateX(-3px)" },
    ],

    timing: {
      duration: 1000,
      iterations: Infinity,
      direction: "alternate",
    },
  });

  const Motion = () => {
    const Clouds = CloudAnimation();
    const Birds = BirdAnimation();
    const Boat = BoatAnimation();
    const Trees = TreesAnimation();
    const Cyclist = CyclistAnimation();

    Clouds.updatePlaybackRate(Clouds.playbackRate * 1.1);
    Birds.updatePlaybackRate(Birds.playbackRate * 1.1);
    Boat.updatePlaybackRate(Boat.playbackRate * 1.1);
    Trees.updatePlaybackRate(Trees.playbackRate * 1.1);
    Cyclist.updatePlaybackRate(Cyclist.playbackRate * 1.1);
  };

  return (
    <div className="App">
      <div>
        <img className="Sun" src={Sun} alt="Sun" />
      </div>
      <div className="Clouds" ref={Clouds}>
        <div>
          <img className="Cloud1" src={Cloud} alt="Cloud" />
        </div>
        <div>
          <img className="Cloud2" src={Cloud} alt="Cloud" />
        </div>
        <div>
          <img className="Cloud3" src={Cloud} alt="Cloud" />
        </div>
        <div>
          <img className="Cloud4" src={Cloud} alt="Cloud" />
        </div>
      </div>
      <div className="Birds" ref={Birds}>
        <div>
          <img className="Bird1" src={Bird} alt="Bird" />
        </div>
        <div>
          <img className="Bird2" src={Bird} alt="Bird" />
        </div>
        <div>
          <img className="Bird3" src={Bird} alt="Bird" />
        </div>
      </div>
      <div ref={Boat}>
        <img className="Ship" src={Ship} alt="Ship" />
      </div>
      <div className="Trees" ref={Trees}>
        <div>
          <img className="Tree1" src={Tree} alt="Tree" />
        </div>
        <div>
          <img className="Tree2" src={Tree} alt="Tree" />
        </div>
        <div>
          <img className="Tree3" src={Tree} alt="Tree" />
        </div>
      </div>
      <div ref={Cyclist}>
        <img className="Runner" src={Runner} alt="Runner" onClick={Motion} />
      </div>
      <div className="Runway">
        <div className="Sea"></div>
        <div className="Beach"></div>
        <div className="Road1"></div>
        <div className="Road2"></div>
        <div className="Road3"></div>
      </div>
    </div>
  );
}

export default App;
