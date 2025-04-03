"use client"
import { PolarArea } from "react-chartjs-2";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";



ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

const AverageTimeSpent = () => {
  const chartRef = useRef<HTMLDivElement | null >(null);

  useEffect(() => {
    if (chartRef.current) {
      gsap.fromTo(
        chartRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  const data = {
    labels: ["Africa", "Europe", "Asia","S.America", "N.America","Oceania"],
    datasets: [
      {
        label: "Average Hours Spent Daily",
        data: [12, 9, 16, 14, 13, 5],
        backgroundColor: [
            "#FF6384", 
            "#36A2EB", 
            "#FF9F40", 
            "#4BC0C0", 
            "#9966FF", 
            "#FFCE56", 
        ],
        borderColor: [
            "#FF6384", 
            "#36A2EB", 
            "#FF9F40", 
            "#4BC0C0", 
            "#9966FF", 
            "#FFCE56", 
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title:{
display:true,
text:"Time spent per User",
color:"#36A2EB"
      }
    },
    scales: {
      r: { beginAtZero: true },
    },
  };

  return (
    <div className="flex bg-white dark:bg-Dwhite justify-center mdsm:max-h-[400px] h-[300px] w-[95%] border-[1px] rounded-lg border-border py-2 my-4 mx-auto">
      <div ref={chartRef} className="w-full h-full">
        <PolarArea data={data} options={options as any} />
      </div>
    </div>
  );
};

export default AverageTimeSpent;
