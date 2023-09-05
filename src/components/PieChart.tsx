import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = ({volume}:any) => {
  console.log(volume,'volume')
  const [chartData, setChartData] = useState<any>({
    series: [volume,100],
    options: {
        colors: ['#00000033','#545454'],
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        show: false,
        formatter: function(val:any, opts:any) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      // title: {
      //   text: 'Volume',
      //   style:{
      //     textalign:'center'
      //   }
      // },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 100
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  return (
     <div className="text-center">
      <h1>Volume</h1>
       <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
     </div>
  );
};

export default ApexChart;
