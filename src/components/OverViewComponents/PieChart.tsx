import { 
    Chart as ChartJS,
     ArcElement,
      Tooltip,
       Legend
     } from "chart.js";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const pastelColors = [
    "#FF6384", // Red
    "#36A2EB", // Blue
    "#FF9F40", // Orange
    "#4BC0C0", // Teal
    "#9966FF", // Purple
    "#FFCE56", // Yellow
    "#C9CBCF", // Gray
];
const pieChartLable = ["Electronics","Wears" ,"Stationaries","Laundary","Foods"]



const PieChart = () => {

    const pieChartRef = useRef<HTMLDivElement | null >(null)
    const data = {
        labels:pieChartLable,
        datasets:[
            {
                label:"Sales Distribution",
                data:[10,20,30,33,17],
                backgroundColor:pastelColors.map((color,index) => {if (index < 5 ) {
                    return color
                }} ),
                hoverBackgroundColor:"gray"
            }
        ]
    }


    const options= {
        resonsive:true,
        animation:{
        duration:1000,
        easing: "easeOutExpo",
        },
        plugins:{
        legend:{
        display:true,
        labels:{
            font:{
                size:8
            }
        }
        },
        title:{
            display:true,
         text:"Sales Distribution",
         
        }
        }
    }


    useEffect(()=>{
        if (pieChartRef.current) {
            gsap.fromTo(pieChartRef.current,
            { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" } 
            )
          }
    
     },[])
     
     

  return <section className='flex justify-center mdsm:max-h-[400px] h-[300px] w-full border-[1px] rounded-lg border-border py-2 my-4 w-full lg:w-[48%] md:w-[48%] ' ref={pieChartRef}>
     <Pie data={data} options={options as any} />
  </section>
}

export default PieChart