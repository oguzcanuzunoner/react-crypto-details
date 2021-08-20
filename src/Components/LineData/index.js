import { Line } from "react-chartjs-2";
const LineChart = ({ low, high, current, isUp }) => {
  const data = {
    labels: ["Low", "High", "Current"],
    datasets: [
      {
        label: "# of Value",
        data: [low, high, current],
        fill: true,
        backgroundColor: isUp ? "#03c4a180" : "#c62a8880",
        borderColor: isUp ? "#03c4a1" : "#c62a88"
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