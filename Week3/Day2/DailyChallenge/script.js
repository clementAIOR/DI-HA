document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // PAGE STYLE
  // =========================

  const style = document.createElement("style");

  style.textContent = `
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 1px, transparent 1px),
        radial-gradient(circle at 70% 60%, rgba(255,255,255,0.12) 1px, transparent 1px),
        radial-gradient(circle at 40% 80%, rgba(255,255,255,0.10) 1px, transparent 1px),
        #030712;

      background-size:
        90px 90px,
        130px 130px,
        170px 170px;

      font-family: Arial, Helvetica, sans-serif;
      color: white;
    }

    h1 {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 40px;
    }

    .subtitle {
      text-align: center;
      color: #9ca3af;
      margin-bottom: 50px;
    }

    .solar-system {
      width: 100%;
      min-height: 70vh;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      gap: 80px;

      padding: 50px;
    }

    .planet-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 160px;
      min-height: 180px;
    }

    .planet {
      width: 100px;
      height: 100px;

      border-radius: 50%;

      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow:
        0 0 20px rgba(255,255,255,0.15),
        inset -15px -15px 25px rgba(0,0,0,0.35);

      transition: transform 0.3s;
    }

    .planet:hover {
      transform: scale(1.15);
    }

    .planet-name {
      margin-top: 18px;
      font-size: 16px;
      font-weight: bold;
    }

    .moon {
      width: 13px;
      height: 13px;

      background-color: #d1d5db;

      border-radius: 50%;

      position: absolute;

      box-shadow: 0 0 8px rgba(255,255,255,0.7);
    }
  `;

  document.head.appendChild(style);


  // =========================
  // PLANETS DATA
  // =========================

  const planets = [
    {
      name: "Mercury",
      color: "#9ca3af",
      moons: 0
    },
    {
      name: "Venus",
      color: "#f59e0b",
      moons: 0
    },
    {
      name: "Earth",
      color: "#2563eb",
      moons: 1
    },
    {
      name: "Mars",
      color: "#dc2626",
      moons: 2
    },
    {
      name: "Jupiter",
      color: "#a16207",
      moons: 4
    },
    {
      name: "Saturn",
      color: "#eab308",
      moons: 6
    },
    {
      name: "Uranus",
      color: "#67e8f9",
      moons: 5
    },
    {
      name: "Neptune",
      color: "#1d4ed8",
      moons: 2
    }
  ];


  // =========================
  // CREATE TITLE
  // =========================

  const title = document.createElement("h1");
  title.textContent = "The Solar System";

  document.body.appendChild(title);


  const subtitle = document.createElement("p");
  subtitle.textContent = "Planets and their moons";
  subtitle.classList.add("subtitle");

  document.body.appendChild(subtitle);


  // =========================
  // CREATE SOLAR SYSTEM
  // =========================

  const section = document.createElement("section");

  section.classList.add("solar-system");

  document.body.appendChild(section);


  // =========================
  // CREATE PLANETS
  // =========================

  planets.forEach(function (planet) {

    const wrapper = document.createElement("div");

    wrapper.classList.add("planet-wrapper");


    const planetDiv = document.createElement("div");

    planetDiv.classList.add("planet");

    planetDiv.style.backgroundColor = planet.color;


    // =========================
    // CREATE MOONS
    // =========================

    for (let i = 0; i < planet.moons; i++) {

      const moon = document.createElement("div");

      moon.classList.add("moon");


      const angle =
        (360 / planet.moons) * i;


      const radius = 65;


      const x =
        Math.cos(angle * Math.PI / 180) * radius;


      const y =
        Math.sin(angle * Math.PI / 180) * radius;


      moon.style.left =
        `calc(50% + ${x}px - 6px)`;


      moon.style.top =
        `calc(50% + ${y}px - 6px)`;


      planetDiv.appendChild(moon);
    }


    // =========================
    // PLANET NAME
    // =========================

    const name = document.createElement("div");

    name.classList.add("planet-name");

    name.textContent = planet.name;


    // =========================
    // ADD TO PAGE
    // =========================

    wrapper.appendChild(planetDiv);

    wrapper.appendChild(name);

    section.appendChild(wrapper);
  });

});
