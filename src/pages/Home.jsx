import React from "react";
import { AiFillFileImage, AiFillFilePdf, AiFillFileText } from "react-icons/ai";
import HomeCard from "../components/Card";
import { SiC, SiCplusplus, SiJavascript, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Container>
        <div className="d-flex home">
          <HomeCard
            title={"Text Generation"}
            icon={<AiFillFileText />}
            description="summarize long text into short sentences"
          />
          <HomeCard
            title={"Paragraph Generation"}
            icon={<AiFillFilePdf />}
            description="generate paragarph with words"
          />

          <HomeCard
            title={"Scifi Images"}
            icon={<AiFillFileImage />}
            description="generate scifi images"
          />
          <HomeCard
            name="Python"
            title={"Python Code Generator"}
            icon={<SiPython />}
            description="generate Python code and functions"
          />
          <HomeCard
            name="js"
            title={"JavaScript Code Generator"}
            icon={<SiJavascript />}
            description="generate javascript code and functions"
          />

          <HomeCard
            name="CPP"
            title={"Cpp Code Generator"}
            icon={<SiCplusplus />}
            description="generate C++ code and functions"
          />
          <HomeCard
            name="C"
            title={"C Code Generator"}
            icon={<SiC />}
            description="generate C code and functions"
          />
          <HomeCard
            name="Java"
            title={"Java Code Generator"}
            icon={<FaJava />}
            description="generate Java code and functions"
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
