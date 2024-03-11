function createChart(chartId, datasets) {
  const ctx = document.getElementById(chartId).getContext("2d");
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: datasets,
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
    },
  });
}

const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const datasets = [
  {
    label: "Dataset 1",
    data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
    borderColor: "red",
    fill: false,
    hidden: false,
  },
  {
    label: "Dataset 2",
    data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
    borderColor: "green",
    fill: false,
    hidden: false,
  },
  {
    label: "Dataset 3",
    data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
    borderColor: "blue",
    fill: false,
    hidden: false,
  },
];

const chart1 = createChart("myChart1", datasets);
const chart2 = createChart("myChart2", datasets);

function updateChart(chart, selectedValue) {
  if (selectedValue.toLowerCase() === "all") {
    chart.data.datasets.forEach((dataset) => {
      dataset.hidden = false;
    });
  } else {
    chart.data.datasets.forEach((dataset) => {
      if (dataset.borderColor.toLowerCase() === selectedValue.toLowerCase()) {
        dataset.hidden = false;
      } else {
        dataset.hidden = true;
      }
    });
  }
  chart.update();
}

/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) => {
  const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    main = document.getElementById(mainId);

  if (toggle && sidebar && main) {
    toggle.addEventListener("click", () => {
      /* Show sidebar */
      sidebar.classList.toggle("show-sidebar");
      /* Add padding main */
      main.classList.toggle("main-pd");
    });
  }
};
showSidebar("header-toggle", "sidebar", "main");

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll(".sidebar__link");

const formLink = document.querySelector(".sidebar__link:nth-child(2)"); // Select the "Form" link

function linkColor() {
  sidebarLink.forEach((l) => l.classList.remove("active-link"));
  this.classList.add("active-link");

  // Check if the "Form" link is clicked
  if (this === formLink) {
    // Show the card
    document.querySelector(".card").style.display = "block";
  } else {
    // Hide the card
    document.querySelector(".card").style.display = "none";
  }
}

sidebarLink.forEach((l) => l.addEventListener("click", linkColor));
