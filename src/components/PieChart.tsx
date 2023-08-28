import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [chartData, setChartData] = useState<any>({
    series: [44,234],
    options: {
        

        colors: ['#FFFFFF','#FFFFFF'],
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
      title: {
        text: 'Gradient Donut with custom Start-angle'
      },
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
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
  );
};

export default ApexChart;
