"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import GenesisOffer from "@/components/GenesisOffer";
import ArchitectureBento from "@/components/ArchitectureBento";
import AntiCloneRegistry from "@/components/AntiCloneRegistry";
import SafetyVerifier from "@/components/SafetyVerifier";
import FeeCalculator from "@/components/FeeCalculator";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";
import GSAPScrollController from "@/components/GSAPScrollController";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GSAPScrollController />
      
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <BrandMarquee />
        <GenesisOffer onOpenModal={() => setIsModalOpen(true)} />
        <ArchitectureBento />
        <AntiCloneRegistry onOpenModal={() => setIsModalOpen(true)} />
        <SafetyVerifier />
        <FeeCalculator />
        <ComparisonMatrix />
        <Roadmap />
      </main>

      <Footer />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
