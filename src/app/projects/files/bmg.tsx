'use client'
// app/components/BmgCryoMachining.jsx
import React from "react";
import Image from "next/image";
import {
  CheckCircle,
  Factory,
  Snowflake,
  Gauge,
  Microscope,
  Code,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const scfRows = [
  { id: 1, material: "Aluminum",         min:  500, max: 1200 },
  { id: 2, material: "Steel",            min: 1800, max: 3000 },
  { id: 3, material: "Titanium",         min: 2800, max: 4500 },
  { id: 4, material: "BMG (experiment)", min: 4679, max: 5845 },
];
const scfData = scfRows.map((r) => ({ ...r, mean: (r.min + r.max) / 2 }));

function SpecificCuttingForceChart({ height = 360 }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow p-4">
      <h3 className="font-semibold mb-3">Specific Cutting Force — Range per Material</h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={scfData} margin={{ left: 8, right: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="material" />
          <YAxis label={{ value: "N/mm²", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="mean" name="Mean" fill="blue"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ------------------------------ Page component ------------------------------ */
function BmgCryoMachining() {
  const keywords = [
    "Machining",
    "BMG (Bulk Metallic Glass)",
    "Cryogenic Assistance (CO₂)",
    "Data Processing",
  ];

  const projectGoals = [
    "Quantify the impact of cryogenic assistance on BMG machinability.",
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Machining BMG with Cryogenic Assistance (CO₂)
        </h1>

        <div className="mb-6 flex flex-wrap gap-2">
          {keywords.map((k, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium text-sm"
            >
              {k}
            </span>
          ))}
        </div>

        <p className="text-gray-800 text-justify">
          This project explores the machinability of Bulk Metallic Glass (BMG), a hard-to-cut
          amorphous metal, using <strong>CO₂ cryogenic cooling</strong>. Trials were performed on a{" "}
          <strong>SOMAB 1270</strong> machining center, measuring cutting forces to evaluate how
          process parameters and cooling strategy affect tool load and chip formation.
        </p>
      </section>

      {/* Problem & Questions */}
      <section className="max-w-5xl mx-auto px-4 mt-8">
        <p className="text-gray-900 font-bold text-xl">
          How does CO₂ cryogenic assistance influence cutting forces and chip morphology when
          machining BMG? How does BMG behave under cryogenic assistance ?
        </p>
      </section>

      {/* Goals + Technologies */}
      <section className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
          <ul className="space-y-3">
            {projectGoals.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span className="text-gray-700">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
          <div className="h-1" />
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Factory className="text-blue-600" />
              <span>SOMAB 1270 CNC center</span>
            </li>
            <li className="flex items-center gap-3">
              <Snowflake className="text-blue-600" />
              <span>
                <strong>CO₂ cryogenic assistance</strong> through the spindle and conventional dry trials
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Gauge className="text-blue-600" />
              <span>Force acquisition (X, Y, Z) using strain-gauge dynamometer sensors</span>
            </li>
            <li className="flex items-center gap-3">
              <Microscope className="text-blue-600" />
              <span>
                <strong>SEM (MEB)</strong> for chip morphology and pattern recognition
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Code className="text-blue-600" />
              <span>
                <strong>Python & Jupyter Notebook</strong> for signal processing & plots; parameter correlation
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Results</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2">Trends</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              {/* <li>
                <strong>Higher cutting speed → lower cutting force</strong> (dry baseline).
              </li> */}
              {/* <li>
                <strong>CO₂ cryogenic assistance lowers F</strong> compared to dry at similar settings.
              </li> */}
              <li>
                Measured <em>k<sub>c</sub></em> for BMG trials typically in the{" "}
                <strong>~4.7–5.8 kN/mm²</strong> range (test-dependent).
              </li>
              <li>
                Reference (order of magnitude): Aluminum ~0.5–1.2; Steel ~1.8–3.0; Titanium ~2.8–4.5 kN/mm².
              </li>
            </ul>
          </div>

          {/* ⬇️ Replaced image with table + chart */}
          <div className="flex flex-col gap-4">
            <SpecificCuttingForceChart />
            <p className="text-center italic">
              Figure 3: Specific cutting force ranges by material
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/projects/bmg/cryo-30.png"
              alt="SEM chip Vc=30 with CO₂"
              width={640}
              height={360}
              quality={100}
              className="rounded-lg shadow"
            />
            <p className="text-center italic mt-2">
              Figure 4: SEM — Vc=30, cryo: smoother chip surfaces
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/projects/bmg/sec-30.png"
              alt="SEM chip Vc=30 dry"
              width={640}
              height={360}
              quality={100}
              className="rounded-lg shadow"
            />
            <p className="text-center italic mt-2">
              Figure 5: SEM — Vc=30, dry: dented/“festooned” chips
            </p>
          </div>
        </div>

        <div className="mt-6">
          {/* <h3 className="font-bold mb-2">Interpretation</h3>
          <p className="text-justify leading-relaxed">
            CO₂ cooling rapidly lowers the tool–chip interface temperature, reducing adhesive and abrasive wear,
            thus <strong>decreasing tool load</strong> and improving chip regularity. For production, this translates to
            <strong> longer tool life</strong> and the ability to run <strong>fewer passes</strong> or more aggressive conditions when
            cryogenic assistance is available and well-targeted at the cutting zone.
          </p> */}
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}

export default BmgCryoMachining;
