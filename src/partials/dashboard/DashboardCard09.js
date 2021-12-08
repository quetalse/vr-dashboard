import React from 'react';
import Info from '../../utils/Info';
import BarChart from '../../charts/BarChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

const dataSource = {
  percentByStage: [
    {
      'label': 'Установление',
      'data': [100]
    },
    {
      'label': 'Выявление',
      'data': [25]
    },
    {
      'label': 'Предложение',
      'data': [50]
    },
    {
      'label': 'Торг',
      'data': [10]
    }
  ],
  timeByStage: [
    {
      'label': 'Установление',
      'data': [2020]
    },
    {
      'label': 'Выявление',
      'data': [1002]
    },
    {
      'label': 'Предложение',
      'data': [808]
    },
    {
      'label': 'Торг',
      'data': [780]
    }
  ],
  scoreByStage: [
    {
      'label': 'Установление',
      'data': [100]
    },
    {
      'label': 'Выявление',
      'data': [200]
    },
    {
      'label': 'Предложение',
      'data': [80]
    },
    {
      'label': 'Торг',
      'data': [70]
    }
  ],
  repeatByQuestion: [
    {
      'label': 'Вопрос №1',
      'data': [100]
    },
    {
      'label': 'Вопрос №2',
      'data': [200]
    },
    {
      'label': 'Вопрос №2',
      'data': [80]
    },
    {
      'label': 'Вопрос №3',
      'data': [70]
    },
    {
      'label': 'Вопрос №4',
      'data': [70]
    },
    {
      'label': 'Вопрос №5',
      'data': [70]
    },
    {
      'label': 'Вопрос №6',
      'data': [70]
    },
    {
      'label': 'Вопрос №7',
      'data': [70]
    },
    {
      'label': 'Вопрос №8',
      'data': [70]
    },
    {
      'label': 'Вопрос №9',
      'data': [70]
    },
    {
      'label': 'Вопрос №10',
      'data': [70]
    }
  ]
};

function DashboardCard09({title, description, data, size}) {

  const chartDataFormat = (arrayData) => {

    let labels = arrayData.map(item => item.label);

    let datasets = arrayData[0].data.map((value, index) => {
        let data = arrayData.map(item => item.data[index])

        return {
          label: 'Test',
          data: data,
          backgroundColor: tailwindConfig().theme.colors.indigo[500],
          hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        }
    })


    return {
      labels: labels,
      datasets: datasets
    }

    // console.log('labels', labels)
    // console.log('dataset', dataset)

  }

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Stack 1',
        data: [
          6200, 9200, 6600, 8800, 5200, 9200,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Stack 2',
        data: [
          -4000, -2600, -5350, -4000, -7500, 2000,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[300],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  console.log(chartDataFormat(dataSource[data]))

  let sizeClass = size === 'full' ? 'sm:col-span-12' : 'sm:col-span-6'

  return (
    <div className={`flex flex-col col-span-full ${sizeClass} bg-white shadow-lg rounded-sm border border-gray-200`}>
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <Info className="ml-2" containerClassName="min-w-80">
          <div className="text-sm">{description}</div>
        </Info>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">245</div>
          {/*<div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-34%</div>*/}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartDataFormat(dataSource[data])} width={595} height={248} />
      </div>
    </div>
  );
}

export default DashboardCard09;
