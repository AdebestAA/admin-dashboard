"use client"
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";


const BarChat = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (!chartRef.current) return;
    
        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;
    
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
              {
                label: "Sales ($)",
                data: [500, 700, 400, 900, 650], // Example sales data
                backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }, []);
    

  return <canvas ref={chartRef} />
}

export default BarChat