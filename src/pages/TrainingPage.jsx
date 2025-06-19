import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer/Footer";
import Atletic from "../component/Social/Atletic";
import Train from "../component/Training/Train";
import Background from "../component/Background/Background";
import backgroundImage from "../assets/training.jpg";
import Explore from "../component/Training/Explore";
import Conversation from "../component/Conversation/Conversation";
import CuriculumHead from "../component/Training/CuriculumHead";

const TrainingPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Train />
      <Background backgroundImage={backgroundImage} />
      <Explore />
      <CuriculumHead />
      <Footer />
    </div>
  );
};

export default TrainingPage;
