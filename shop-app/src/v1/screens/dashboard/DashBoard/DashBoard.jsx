import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashBoard = () => {
  const data = {
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
    ],
    datasets: [
      {
        label: "Doanh thu (triệu VND)",
        data: [12, 19, 13, 25, 22, 79, 60, 40],
        backgroundColor: "rgba(255, 99, 132, 0.5)", // màu cột
      },
      {
        label: "Doanh thu 2023 (triệu VND)",
        data: [10, 15, 20, 18, 25, 22, 35, 28],
        backgroundColor: "rgba(54, 162, 235, 0.5)", // màu cột 2
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ Doanh thu 8 tháng đầu năm",
      },
    },
  };

  const dataCircle = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const optionsCircle = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ Pie Chart",
      },
    },
  };

  return (
    <section className=" h-full overflow-y-auto  md:flex-row flex flex-col  gap-4 w-full  ">
      <div className="bg-white  rounded-xl shadow-md md:w-2/4 w-full h-100 items-center flex justify-center p-4">
        <Bar data={data} options={options} />
      </div>

      <div className="bg-white rounded-xl shadow-md md:w-2/4 w-full h-100 items-center flex justify-center p-4">
        <Pie data={dataCircle} options={optionsCircle} />
      </div>
    </section>
  );
};

export default DashBoard;
