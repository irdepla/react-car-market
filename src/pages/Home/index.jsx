import React from "react";
import Card from "../../components/Card";
import Rentcar from "../../components/Rentcar";
import Hero from "../../components/Hero";




const Home = () => {
  return (
    <>
      <main className=" bg-[#F6F7F9] pt-[31px]">
        <Hero />
        <Rentcar />
        <Card />
      </main>
    </>
  );
};

export default Home;
