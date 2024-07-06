"use client"
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavMobile from "@/components/NavMobile";
import ProjectsComponent from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Nav from "@/components/nav";
import { useState } from "react";

export default function Home() {

  const [showNav ,setShowNav] = useState(false);
  const openNav = ()=>setShowNav(true);
  const closeNav = ()=>setShowNav(false);

  return (
    <div className=" overflow-hidden ">
      <NavMobile showNav={showNav} closeNav={closeNav} />
      <Nav openNav={openNav}/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <ProjectsComponent/>
      <Contact/>
      <Footer/>
    </div>
  );
}
