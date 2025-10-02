import React from 'react'
import { Cpu, Code, Database, CheckCircle } from 'lucide-react';
import Image from 'next/image';

function InductiveSensor() {
  const keywords = ["Sensor", "Electromagnetism", "Electrokinetics", "Electronics", "Programming"]

  const projectGoals = [
    "Understand the behavior of a coil's inductance in the presence of ferromagnetic materials.",
    "Develop a sensor capable of detecting a parked vehicle using electromagnetic induction.",
    "Create a User Interface to display the data sent by the sensor to users."
  ]



  return (
    <div className='w-full h-full mx-8 break-all overflow-x-hidden'>
      <section className='mt-8'>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Inductive Sensor Project</h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {keywords.map((k, idx) => (
            <span
              key={idx}
              className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full font-medium text-sm"
            >
              {k}
            </span>
          ))}
        </div>

        <p className="w-[80%]">
          For my college entrance exam, I built an inductive sensor that sends data to a Python program using a Wemos D1 board. The program performs signal analysis to determine whether a car is parked or not.
        </p>
      </section>
      <section className="mb-8 mt-8 w-[85%]">
        <p className="text-gray-800 font-bold text-xl break-keep">
          How can we detect a vehicle using the phenomenon of electromagnetic induction?
          How can the information captured by the system be communicated to users?
        </p>
      </section>
      <section className='grid grid-cols-2 w-full'>
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
        <div className='w-[80%] break-keep'>
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="my-1.5 space-y-3">
            <li className="flex items-center gap-3">
              <Cpu size={30} className="text-blue-600" />
              Simple electronic components: capacitor, inductor, resistor, operational amplifier. IoT Development Board: Wemos D1.
            </li>
            <li className="flex items-center gap-3">
              <Code size={20} className="text-blue-600" />
              Python for a REST API and user interface
            </li>
            <li className="flex items-center gap-3">
              <Database size={20} className="text-blue-600" />
              PostgreSQL Database for storing sensor state
            </li>
          </ul>
        </div>

      </section>
      <section className='w-[90%]'>

        <div>
          <h2 className="text-2xl font-semibold mb-4 w-full">The Project</h2>
          <div>

            <div className='grid grid-cols-2 space-x-4'>
              <div>
                <h3 className='font-bold mb-2'>Study of the Phenomenon</h3>
                <p className='w-full break-keep text-justify'>
                  The project studied how electromagnetic induction can be used to detect
                  parked vehicles. Since cars are mostly made of ferromagnetic metals (around 70%), their
                  presence alters local magnetic fields. Experimental measurements with a
                  smartphone magnetometer (using the Phyphox app under a Peugeot 208) showed a
                  measurable difference when the car was directly above the sensor versus more
                  than 1 m away. In terms of inductance, the reference coil had L ≈ 40 mH in
                  free space, and this dropped to ≈ 38 mH in the presence of the car. This
                  variation, though small, is sufficient to disturb the electrical circuit in
                  which the coil is integrated, making detection possible.
                </p>
              </div>
              <div>
                <Image src="/projects/inductive_sensor/DETECTION_VEHICULE.png" alt="" width={606} height={327} quality={100} />
                <p className='w-full text-center italic mt-1'>Chart 1 : Magnetic field recorded using a Samsung S9 and Phyphox</p>
              </div>

            </div>

            <h3 className='font-bold mt-4 mb-2  break-keep text-justify'>Prototyping</h3>
            <p className='break-keep text-justify'>
              The prototype was developed around four key parts: the <strong>magnetic field change detection</strong>, the <strong>electronics to filter the signal</strong>,
              <strong > real time communication with a server </strong>
              and the <strong>software layer</strong>.
            </p>

            <p>

              <div className='grid grid-cols-2 mt-6 space-x-4'>

                <p className='break-keep text-justify w-[80%]'>
                  <p className='mt-4'>
                    The inductance L of the coil determines the resonance of the band-pass filter
                    into which it is inserted. In general, the resonance frequency is given by:
                  </p>
                  <p className="italic text-center my-2">
                    f₀ = 1 / (2π √(L · C))
                  </p>

                  where L is the coil inductance and C is the filter capacitor. When a car is
                  present, L decreases slightly (from ~40 mH to ~38 mH), shifting the resonance
                  frequency. As the system is calibrated at f₀ with no perturbation, this
                  shift alters greatly the amplitude of the output voltage.
                  I did matlab simulation to better understand how the filter behave with the changer of inductance.
                  the
                </p>

                <div className='grid grid-cols-1'>
                  <Image src="/projects/inductive_sensor/matlab_simulation.png" alt="" width={946} height={512} quality={100} />
                  <p className="mt-2 text-center italic">Chart 1: transfer function of the filter</p>
                </div>


              </div>


            </p>
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-between items-center h-full">
                <Image
                  src="/projects/inductive_sensor/CIRCUIT_DETECTION.png"
                  alt="Electrical schematic"
                  width={766}
                  height={266}
                  quality={100}
                  className='my-auto'
                />
                <p className="mt-2 text-center italic">Chart 2: Electrical schematic</p>
              </div>

              <div className="flex flex-col justify-between items-center h-full">
                <Image
                  src="/projects/inductive_sensor/CIRCUIT_PROTOTYPE.png"
                  alt="First prototype"
                  width={766}
                  height={266}
                  quality={100}
                />
                <p className="mt-2 text-center italic">Image 1: First prototype</p>
              </div>
            </div>

            <p className='break-keep text-justify'>
              The voltage of the capacitor is sent to a hysteresis comparator.
              The signal is then converted into a DC current and divided using a voltage divider to match the requirements of the WEMOS

            </p>

            <h4 className='font-semibold mt-4 mb-2'>3. Programming</h4>
            <p>
              The software layer was critical to transform raw sensor states into useful
              parking information for users. The Wemos D1 was programmed to:
            </p>
            <ul className="list-disc ml-6">
              <li>Acquire analogic signals from electric system output.</li>
              <li>Host a webserver with endpoints giving information status about the sensor</li>
            </ul>
            <p className='break-keep text-justify'>The data are received by a python server that stores the data in a PostgreSQL database. The pythno server has a REST API ( using Fastapi)
              that sends the data to the user application. The user application was developped using python and tkinter
            </p>
            <div className="my-4">
              <div className="flex flex-col justify-between items-center h-full">
                <Image
                  src="/projects/inductive/exemple_systeme.png"
                  alt="First prototype"
                  width={766}
                  height={266}
                  quality={100}
                />
                <p className="mt-2 text-center italic">Image 2: software prototype</p>
              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </section>


    </div>
  )
}

export default InductiveSensor