"use client";

import { DashboardOutlined, FireOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const rchart: any = {
  series: [44, 55, 13],
  options: {
    labels: ["Carboidratos", "Proteínas", "Gorduras"],
    responsive: [
      {
        breakpoint: 0,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "right",
          },
        },
      },
    ],
  },
};

// Conversões de gramas para kilos

const Dashboard = () => {
  const [chart, setChart] = useState<any>({});

  const handleData = async () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => console.log(response.json))
      .then((data) => {
        console.log("-----");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="text-slate-600">
      <div className="flex justify-between mt-10 font-jm text-2xl p-2">
        <div className="ml-20 bg-gray-100 rounded-md shadow-xl p-6 hover:bg-gray-200 delay-75">
          <FireOutlined /> CALORIAS TOTAIS - 1400
          <span className="ml-1 text-red-500">kcal</span>
        </div>
        <div className="mr-20  bg-gray-100 rounded-md shadow-xl p-6 hover:bg-gray-200 delay-75">
          <DashboardOutlined className="mr-2 " />
          GRAMAS CONSUMIDAS - 2<span className="ml-1 text-red-500">kg</span>
        </div>
      </div>
      <div className="mt-10 ml-40 flex justify-center">
        <Chart
          options={rchart.options}
          series={rchart.series}
          type="pie"
          width={450}
        />
      </div>
    </div>
  );
};

export default Dashboard;
