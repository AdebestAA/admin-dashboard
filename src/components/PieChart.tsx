"use client"
import Chart from "chart.js/auto";
import React, { useEffect, useRef } from 'react'

const PieChart = () => {

    const chartRef = useRef<HTMLCanvasElement>(null)


    useEffect(()=>{
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;
    
        new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["profit", "assets", "liabilities","ability"],
            datasets: [
              {
                label: "Colors Distribution",
                data: [20, 40, 20,20], 
                backgroundColor: ["red", "blue", "yellow","green"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
          },
        });
    },[])
  return <canvas ref={chartRef} />
}

export default PieChart