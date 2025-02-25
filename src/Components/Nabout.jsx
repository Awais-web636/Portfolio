import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./Cta";
import PersonalInfo from "./PersonalInfo";
import Nskills from "./Nskills";
import Qualification from "./Qualification";
import Experience from "./Experience";
import ScrollToTop from "./ScrollToTop";


function Nabout() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#0A2647] mb-8">
            ABOUT ME
          </h1>

          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap gap-2 sm:gap-4 rounded-lg border border-gray-200 p-1">
              {[
                { id: "personal", label: "Personal Info" },
                { id: "skills", label: "Skills" },
                { id: "qualification", label: "Qualification" },
                { id: "experience", label: "Experience" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 text-sm sm:text-base rounded-md cursor-pointer transition-all duration-300 ease-in-out ${
                    activeTab === tab.id
                      ? "bg-[#0A2647] text-white"
                      : "text-gray-600 hover:text-[#FF6B00]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 bg-[#F1F5F9] shadow-lg rounded-lg">
            {activeTab === "personal" && <PersonalInfo />}
            {activeTab === "skills" && <Nskills />}
            {activeTab === "qualification" && <Qualification />}
            {activeTab === "experience" && <Experience />}
          </div>

          <div className="mt-8">
            <CTA />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default Nabout;
