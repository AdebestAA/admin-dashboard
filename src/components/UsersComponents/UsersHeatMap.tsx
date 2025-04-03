"use client"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend,Title);
  

  
  const UsersHeatMap = () => {
    const data = {
        
        labels: ["Africa", "Europe", "Asia","S.America", "N.America","Oceania"], 
       
        datasets: [
          {
            label: "Age 10",
            data: [10, 15, 8,13,6,9],
            backgroundColor: "#FF6384", 
          },
          {
            label: "Age 11-15",
            data: [20, 30, 25,18,15,7,],
            backgroundColor: "#36A2EB",
          },
          {
            label: "Age 16-20",
            data: [15, 20, 18,13,18,15],
            backgroundColor: "#9966FF", 
          },
          {
            label: "Age 21+",
            data: [5, 10, 12,9,19,13],
            backgroundColor: "#FF9F40", 
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true }, 
          y: { stacked: true, beginAtZero: true },
        },
        plugins: {
          legend: { position: "bottom" }, 
          title:{
            display:true,
            text:"Users by Continent",
            position:"top",
          font:{
            size:15
          },
          color:"#36A2EB"
        }
        },
      };
    return (
      <div className="mdsm:max-h-[400px] h-[300px] bg-white dark:bg-Dwhite w-full   border-[1px] rounded-lg border-border p-2 my-4 w-full lg:w-[45%] md:w-[48%] ">
        <Bar data={data} options={options as any} />
      </div>
    );
  };
  
  export default UsersHeatMap
  