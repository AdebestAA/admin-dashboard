"use client"

import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { color } from "chart.js/helpers";
import { useEffect } from "react";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [3, 20, 15, 30, 25],
        borderColor: "rgb(75, 192, 192)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under the line
        pointBackgroundColor: "rgb(255, 99, 132)", // Point color
        pointHoverBackgroundColor: "rgb(255, 205, 86)", // Change color on hover
        pointHoverBorderColor: "rgb(0, 0, 0)", // Border color on hover
        pointBorderWidth: 2,
        pointRadius: 6, // Size of points
        pointHoverRadius: 8, // Size on hover
        tension: 0.4, // Smooth line
      },
      {
        label: "Revenue",
        data: [3, 5, 12, 15, 18],
        borderColor: "rgb(75, 192, 192)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under the line
        pointBackgroundColor: "rgb(255, 99, 132)", // Point color
        pointHoverBackgroundColor: "rgb(255, 205, 86)", // Change color on hover
        pointHoverBorderColor: "rgb(0, 0, 0)", // Border color on hover
        pointBorderWidth: 2,
        pointRadius: 6, // Size of points
        pointHoverRadius: 8, // Size on hover
        tension: 0.4, // Smooth line
      },
      
    ],
  };

  const opt = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Position of the legend
        labels: {
          color: "orange", // Legend text color
          font: {
            size: 10,
            weight: "semibold",
          },
        },
      },

    },
    scales: {
      x: {
        grid: {
          display: true,
          color:"yellow" // Hide grid lines on X-axis
        },
        ticks: {
          color: "black", // Change X-axis text color
        },
      },
      y: {
        grid: {
          color: "rgba(191, 0, 255, 0.5)", // Custom grid color
        },
        ticks: {
          color: "green", // Change Y-axis text color
          stepSize: 5,
        },
      },
    },
  };
  

export const SimpleChart = ({password,username}:{password:string,username:string}) => {
    let auth = btoa(`${username}:${password}`);

    const fetchData  = async ()=>{
        console.log("what");
        
          const res = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev",{
            method:"GET",
            headers:{
              Authorization:`Basic ${auth}`,
              "Content-Type":"application'json"
            }
          })
          console.log(res);
          
        
          const response = await res.json()
          console.log(response);
          
        
        }
        
        
       useEffect(()=>{
        fetchData()
       },[])
    
  return <div>
<section>
    play with em
</section>
<div className="w-[400px] h-[300px]">
<Line data={data}  options={opt as any} />
</div>
  </div>
  
}
