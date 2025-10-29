// products.js - single source of products
// Each product: id, title, price (per day), img, short, long
const PRODUCTS = [
  // ----------------- ELECTRONICS -----------------
  {
    id: "e1",
    category: "Electronics",
    title: "Arduino Uno Starter Kit",
    price: 60,
    img: "images/a.jpg",
    short: "Board + sensors for learning & prototyping",
    long: "Includes Arduino Uno, breadboard, sensors, cables & motors. Ideal for embedded and IoT beginners."
  },
  {
    id: "e2",
    category: "Electronics",
    title: "Raspberry Pi 4 Kit",
    price: 80,
    img: "images/b.jpg",
    short: "Pi 4 with case + power + SD card",
    long: "Raspberry Pi 4 Model B 4GB kit for IoT, automation, and Linux development work."
  },
  {
    id: "e3",
    category: "Electronics",
    title: "Digital Oscilloscope (100MHz)",
    price: 250,
    img: "images/c.jpg",
    short: "Signal & waveform measurement tool",
    long: "100MHz digital oscilloscope with probes and USB storage support for analyzing circuit behavior."
  },
  {
    id: "e4",
    category: "Electronics",
    title: "Benchtop Power Supply (0-30V)",
    price: 90,
    img: "images/d.jpg",
    short: "Adjustable voltage bench power",
    long: "Dual-channel lab power supply with current limiting and digital output meters."
  },

  // ----------------- INSTRUMENTS -----------------
  {
    id: "i1",
    category: "Instruments",
    title: "Digital Multimeter",
    price: 30,
    img: "images/e.jpg",
    short: "Measures voltage, current, resistance",
    long: "Reliable multimeter suitable for circuit troubleshooting and testing electronic components."
  },
  {
    id: "i2",
    category: "Instruments",
    title: "Function Generator",
    price: 150,
    img: "images/f.jpg",
    short: "Generates sine, square & pulse signals",
    long: "Used in testing circuits and waveform analysis across various electronics experiments."
  },
  {
    id: "i3",
    category: "Instruments",
    title: "LCR Meter",
    price: 120,
    img: "images/g.jpg",
    short: "Measures inductance, capacitance & resistance",
    long: "Ideal for PCB debugging and analyzing component values accurately."
  },
  {
    id: "i4",
    category: "Instruments",
    title: "Spectrum Analyzer",
    price: 450,
    img: "images/h.jpg",
    short: "RF signal and frequency domain analyzer",
    long: "Used in communication systems labs and wireless testing setups."
  },

  // ----------------- ROBOTICS -----------------
  {
    id: "r1",
    category: "Robotics",
    title: "Robotic Arm (4-DOF)",
    price: 300,
    img: "images/i.jpg",
    short: "Programmable robotic arm",
    long: "Used for automation, pick-and-place research, and industrial simulation."
  },
  {
    id: "r2",
    category: "Robotics",
    title: "Autonomous Rover Kit",
    price: 200,
    img: "images/j.jpg",
    short: "Mobile robot kit",
    long: "Comes with chassis, motors, motor driver, sensors and microcontroller integration."
  },
  {
    id: "r3",
    category: "Robotics",
    title: "Drone Quadcopter Kit",
    price: 400,
    img: "images/k.jpg",
    short: "Programmable flying platform",
    long: "Supports flight controller programming, FPV setup & aerial automation testing."
  },
  {
    id: "r4",
    category: "Robotics",
    title: "Motor & Sensor Pack",
    price: 90,
    img: "images/l.jpg",
    short: "Starter hardware for robots",
    long: "Includes IR, ultrasonic, temperature sensors, DC motors & servo motors."
  },

  // ----------------- POWER TOOLS -----------------
  {
    id: "p1",
    category: "Power Tools",
    title: "Soldering Station",
    price: 40,
    img: "images/m.jpg",
    short: "Temperature controlled solder station",
    long: "ESD-safe soldering iron with variable heat control. Used in PCB prototyping."
  },
  {
    id: "p2",
    category: "Power Tools",
    title: "Heat Gun",
    price: 35,
    img: "images/n.jpg",
    short: "Used for heat shrinking and rework",
    long: "Ideal for PCB rework, plastic shaping, and heat shrink applications."
  },
  {
    id: "p3",
    category: "Power Tools",
    title: "Rotary Tool (Dremel)",
    price: 60,
    img: "images/o.jpg",
    short: "Cutting, grinding & polishing tool",
    long: "Used in fabrication labs for shaping small components and prototypes."
  },
  {
    id: "p4",
    category: "Power Tools",
    title: "Cordless Drill Kit",
    price: 80,
    img: "images/p.jpg",
    short: "Handheld drilling tool",
    long: "Rechargeable drill used in mechanical assembly and prototyping labs."
  },

  // ----------------- TESTBEDS -----------------
  {
    id: "t1",
    category: "Testbeds",
    title: "FPGA Development Board",
    price: 350,
    img: "images/q.jpg",
    short: "Hardware logic & acceleration platform",
    long: "Used for processor architecture design, digital logic experiments and AI hardware accelerators."
  },
  {
    id: "t2",
    category: "Testbeds",
    title: "IoT Sensor Testbed",
    price: 200,
    img: "images/r.jpg",
    short: "Wireless sensor experimentation platform",
    long: "Includes gateways, environmental sensors, and microcontrollers for IoT testing."
  },
  {
    id: "t3",
    category: "Testbeds",
    title: "PLC Automation Training Kit",
    price: 500,
    img: "images/s.jpg",
    short: "Industrial automation training setup",
    long: "Used for SCADA, industry automation simulations, and ladder logic development."
  },
  {
    id: "t4",
    category: "Testbeds",
    title: "PCB Prototyping Setup",
    price: 180,
    img: "images/t.jpg",
    short: "Bench setup for PCB fabrication",
    long: "Contains UV exposure, drill, developer tray & assembly tools."
  },

  // ----------------- ACCESSORIES -----------------
  {
    id: "a1",
    category: "Accessories",
    title: "Breadboard & Jumper Wire Set",
    price: 20,
    img: "images/u.jpg",
    short: "Basic circuit prototyping kit",
    long: "Ideal for early stage circuit design & experimenting without soldering components."
  },
  {
    id: "a2",
    category: "Accessories",
    title: "Sensor Variety Pack",
    price: 50,
    img: "images/x.jpg",
    short: "Pack of 10+ assorted sensors",
    long: "Includes IR, ultrasonic, temp, flame, gas & motion sensors for project development."
  },
  {
    id: "a3",
    category: "Accessories",
    title: "Rechargeable Battery Pack",
    price: 45,
    img: "images/v.jpg",
    short: "Power pack for portable devices",
    long: "Reusable lithium battery with charger for robotics and wireless circuits."
  },
  {
    id: "a4",
    category: "Accessories",
    title: "Complete Hand Tool Kit",
    price: 70,
    img: "images/w.jpg",
    short: "Pliers, cutters, screwdrivers",
    long: "Essential hardware toolkit for lab repair, assembly & maintenance work."
  }
];

