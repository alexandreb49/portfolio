// app/components/RepasScaffoldApp.jsx
import React from "react";
import Image from "next/image";
import {
  CheckCircle,
  Boxes,
  Wrench,
  Brain,
  Network,
  Database,
  Code2,
  GitBranch,
  Cpu,
  Rocket,
} from "lucide-react";

function RepasScaffoldApp() {
  const keywords = [
    "Scaffolding",
    "Structural Analysis",
    "Vibration",
    "Tauri (Desktop)",
    "React + Three.js",
    "Rust + Python",
  ];

  const goals = [
    "Model a scaffold from a façade photo and user inputs.",
    "Compute static and vibratory loads for safe sizing.",
    "Provide a 3D, interactive visualization with fast workflow.",
  ];

  const tech = [
    { icon: <Code2 className="text-blue-600" />, label: "Tauri desktop app (Win/Mac/Linux)" },
    { icon: <Cpu className="text-blue-600" />, label: "Frontend: React + Vite + React Router + Tailwind" },
    { icon: <Boxes className="text-blue-600" />, label: "3D Rendering: Three.js (WebGL)" },
    { icon: <Network className="text-blue-600" />, label: "Backend bridge in Rust (Tauri commands/events)" },
    { icon: <Wrench className="text-blue-600" />, label: "Processing: Python (static & vib FEA)" },
    { icon: <Database className="text-blue-600" />, label: "Simple text file format for projects" },
    { icon: <GitBranch className="text-blue-600" />, label: "GitHub project for code sharing & PM" },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-3">
         Scaffolding Design & Simulation Software
        </h1>

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
          Born from an industrial need, REPAS helps determine scaffold types, connections and
          admissible constraints from user data and façade photos, targeting safer, faster job-site
          preparation. It computes static and vibratory behavior and shows the result in an
          interactive 3D scene.
        </p>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-4 mt-8">
        <p className="text-gray-900 font-bold text-xl">
          Problem: how to model static and vibratory loads on a scaffold while keeping the
          workflow simple for operators?
        </p>
      </section>

      {/* Goals + Tech */}
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

      {/* UI Overview */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Solution Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-justify leading-relaxed">
              The app is a single-page UI with toolbars to add points, bars, and forces,
              a quick mode to enter dimensions/materials, a 3D grid for positioning.
               The 3D view shows nodes (violet), bars (blue), anchors
              and axes, with a checker that flags floating nodes or unlinked bars.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-800">
              <li>3D scaffold view with grid & navigation pad.</li>
              <li>Fast input panel for sizing variables.</li>
              <li>Structure sanity checks before solving.</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/projects/repas/software_repas.png"
              alt="REPAS UI mock (3D scene, quick panel, toolbar)"
              width={640}
              height={360}
              className="rounded-lg shadow"
            />
            <p className="text-center italic mt-2">Figure: UI concept & legends</p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2">Frontend (React + Three.js)</h3>
            <p className="text-justify">
              SPA built with React/Vite/React Router. The 3D scene (Three.js/WebGL) renders beams
              and nodes as meshes; React state drives interactivity and editing tools.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Backend (Rust, Tauri)</h3>
            <p className="text-justify">
              Rust exposes Tauri command handlers for the UI and invokes Python scripts for
              computation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-bold mb-2">Processing (Python)</h3>
            <p className="text-justify">
              Two solvers allow computation for static and vibratory mecanics
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Project Files</h3>
            <p className="text-justify">
              A simple text file stores  system configuration. The frontend keeps state in memory and only
              reads/writes the file on open/save for performance.
            </p>
          </div>
        </div>
      </section>

      {/* Team & Delivery */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Project Organization</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>Component-first design: define need → sketch → implement → wire to backend.</li>
          <li>GitHub for code sharing, structure, and progress tracking.</li>
          <li>
            Industry contact pivoted mid-project; the team continued independently with guidance,
            aiming for a functional end-to-end solution.
          </li>
        </ul>
      </section>

      {/* Future work */}
      {/* <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Future Evolution</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Brain className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-bold">AI corrosion diagnosis (vibration-based)</h3>
              <p className="text-justify">
                Build a dataset of vibratory simulations; learn shifts in natural frequencies to
                estimate internal corrosion probability without disassembly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wrench className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-bold">Richer mechanics</h3>
              <p className="text-justify">
                Extend from axial bars to shear/bending/torsion (e.g., Timoshenko beams) for tall or
                harsh-service scaffolds.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Rocket className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-bold">UX & Performance</h3>
              <p className="text-justify">
                Make the 3D UI responsive (vw/vh/rem), lazy-load heavy components, and offer
                presets based on machine capability.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="max-w-5xl mx-auto px-4 mt-12 pb-16">
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-justify">
          The team delivered a working desktop prototype connecting a modern 3D UI to Python
          solvers through Rust/Tauri. Beyond the technical stack, the project strengthened practical
          teamwork, code organization, and end-to-end delivery skills.
        </p>
      </section>
    </div>
  );
}

export default RepasScaffoldApp;
