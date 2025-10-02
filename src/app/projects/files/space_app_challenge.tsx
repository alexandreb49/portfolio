import React from "react";
import Image from "next/image";
import {
  CheckCircle,
  Satellite,
  Brain,
  Database,
  Cpu,
  Globe,
} from "lucide-react";

function ImfReconnectionApp() {
  const keywords = [
    "Space Weather",
    "ACE & DSCOVR",
    "TensorFlow",
    "Jupyter",
    "Web App",
  ];

  const goals = [
    "Predict IMF / magnetic reconnection using satellite data.",
    "Build a clean ML pipeline (data → training → evaluation).",
    "Provide a public website to run predictions in near-real time.",
  ];

  const tech = [
    { icon: <Satellite className="text-blue-600" />, label: "ACE & DSCOVR data" },
    { icon: <Database className="text-blue-600" />, label: "Data cleaning and preprocessing" },
    { icon: <Brain className="text-blue-600" />, label: "TensorFlow + Python (neural network)" },
    { icon: <Cpu className="text-blue-600" />, label: "Jupyter Notebook for experimentation" },
    { icon: <Globe className="text-blue-600" />, label: "frontend as a website for demos" },
  ];

  return (
    <div className="w-full min-h-screen">
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-3">
          Predicting IMF & Magnetic Reconnection with Machine Learning
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Developed by team <strong>French Interstellar</strong> for the{" "}
          <span className="font-semibold">NASA Space Apps Challenge 2023</span>.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {keywords.map((k, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-sm"
            >
              {k}
            </span>
          ))}
        </div>

        <p className="text-gray-800 text-justify">
          This project was created as part of the largest Space hackathon, 
          the NASA Space Apps Challenge. Our goal was to anticipate magnetic reconnection events by
          learning patterns in interplanetary magnetic field (IMF) data from ACE and DSCOVR. By
          predicting IMF evolution, the tool can help mitigate
          space-weather risks for satellites and critical infrastructure.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-8">
        <p className="text-gray-900 font-bold text-xl">
          How can we analyze IMF vector components to assess how often magnetic reconnection occurs,
          and make that capability accessible to the public?
        </p>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
          <ul className="space-y-3">
            {goals.map((g, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span className="text-gray-700">{g}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
          <ul className="space-y-3">
            {tech.map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                {t.icon}
                <span>{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Visuals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/projects/space_app_challenge/data_flow.png"
              alt="Diagram explaining the project pipeline"
              width={640}
              height={360}
              className="rounded-lg shadow"
            />
            <p className="text-center italic mt-2">
              Figure 1: Diagram explaining the project and data pipeline
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/projects/space_app_challenge/output.png"
              alt="Graph of results comparing predicted vs real IMF"
              width={640}
              height={360}
              className="rounded-lg shadow"
            />
            <p className="text-center italic mt-2">
              Figure 2: Results — Predicted vs Real IMF comparison
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 mt-12 pb-16">
        <h2 className="text-2xl font-semibold mb-4">Final Product</h2>
        <p className="text-justify leading-relaxed">
          The end result was a working pipeline and an accessible public web application. The system
          automatically cleans and prepares satellite data from ACE and DSCOVR, trains a neural
          network to predict IMF values, and exposes a simple web interface where anyone can upload
          their own data or use prepared datasets to see predictions in real time. The website links
          to the GitHub repository containing the trained models and source code, ensuring that the
          project is open and useful.
        </p>
      </section>
    </div>
  );
}

export default ImfReconnectionApp;
