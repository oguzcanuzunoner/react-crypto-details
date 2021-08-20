import { Line } from "react-chartjs-2";

const LineChart = ({ current, low_24h, high_24h }) => {
  const data = {
    labels: ["Low_24H", "Current", "High_24H"],
    datasets: [
      {
        label: "# of Value",
        data: [low_24h, current, high_24h],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className="header">
        <h5 className="title">Last Data</h5>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
