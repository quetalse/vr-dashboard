import React, { useRef, useEffect } from 'react';

import {
  Chart, BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend,
} from 'chart.js';
import 'chartjs-adapter-moment';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Import utilities
// import { formatValue } from '../utils/Utils';

Chart.register(BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend);

function BarChart02({
  data,
  width,
  height
}) {



  const canvas = useRef(null);

  useEffect(() => {

    const isAccumulation = data.datasets.length > 1

    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      plugins: [ChartDataLabels],
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              drawBorder: false,
            },
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 5,
              // callback: (value) => formatValue(value),
            },
          },
          x: {
            stacked: true,
            // type: 'time',
            // time: {
            //   parser: 'MM-DD-YYYY',
            //   unit: 'month',
            //   displayFormats: {
            //     month: 'MMM YY',
            //   },
            // },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              // title: (context) => {
              //   console.log(context)
              // }, // Disable tooltip title
              // label: (context) => formatValue(context.parsed.y),
              label: (context) => {

                if(isAccumulation){
                  if(context.datasetIndex === 0) return `Неверный выбор: ${context.parsed.y}`;
                  if(context.datasetIndex === 1) return `Допустимый выбор: ${context.parsed.y}`;
                  if(context.datasetIndex === 2) return `Верный выбор: ${context.parsed.y}`;
                }
                // console.log(context);
                // return context.parsed.y
              },
            },
          },
          datalabels: {
            anchor: 'center', // remove this line to get label in middle of the bar
            align: 'center',
            formatter: (val) => {
              if (val === 0) return ''
              return (`${val}`)
            },
            labels: {
              value: {
                color: 'white'
              }
            }

          }
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 200
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas ref={canvas} width={width} height={height}></canvas>
  );
}

export default BarChart02;