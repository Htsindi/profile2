const ctx = document.getElementById("graph-1").getContext("2d");

const sacredChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Html", "Css", "Js"],
    datasets: [
      {
        label: "Composition of HTML, CSS and Javascript",
        data: [70, 22, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
});

/*
const config = {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      customCanvasBackgroundColor: {
        color: "lightGreen",
      },
    },
  },
};

const frst = document.getElementById("forkifyChart");

const forkifyChart = new forkifyChart(frst, config);
*/

const mtx = document.getElementById("graph-2").getContext("2d");

const forkifyChart = new Chart(mtx, {
  type: "doughnut",
  data: {
    labels: ["Html", "Css", "Js"],
    datasets: [
      {
        label: "Composition of HTML, CSS and Javascript",
        data: [50, 25, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
});

const myctx = document.getElementById("graph-3").getContext("2d");

const yelpcamp = new Chart(myctx, {
  type: "bar",
  data: {
    labels: ["Html", "Css", "Js"],
    datasets: [
      {
        label: "Composition of HTML, CSS and Javascript",
        data: [50, 25, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
});

const nyctx = document.getElementById("graph-4").getContext("2d");

const dice = new Chart(nyctx, {
  type: "bar",
  data: {
    labels: ["Html", "Css", "Js"],
    datasets: [
      {
        label: "Composition of HTML, CSS and Javascript",
        data: [50, 25, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  },
});
