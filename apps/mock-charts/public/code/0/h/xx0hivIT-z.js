var obj = {
    AQI:[43, 49, 51, 51, 51, 55, 62, 63, 57, 62, 46, 52, 48, 52, 57, 63, 70, 64, 69, 70, 77, 63, 59, 67],
    CO:  [1, 1, 1, 1, 1, 1.2, 1, 1, 0.9, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 1.3, 1.2, 1.4, 1.8, 1.8, 2.3, 1.4, 1.6, 2],
    NO2: [27, 23, 24, 22, 22, 26, 26, 24, 22, 24, 25, 32, 26, 36, 46, 54, 50, 46, 44, 48, 42, 32, 38, 40],
    O3: [62, 61, 59, 59, 60, 63, 67, 73, 80, 86, 90, 90, 88, 86, 80, 72, 63, 56, 51, 48, 43, 41, 42, 42],
    PM10:  [37, 43, 52, 52, 51, 60, 67, 70, 64, 74, 34, 37, 42, 31, 45, 76, 90, 76, 66, 72, 70, 76, 51, 56],
    PM25:  [30, 34, 31, 30, 32, 38, 44, 45, 40, 40, 32, 36, 33, 36, 40, 44, 44, 46, 50, 51, 56, 41, 42, 48],
    SO2:  [12, 20, 18, 18, 16, 22, 20, 18, 16, 12, 10, 10, 8, 9, 12, 16, 18, 26, 23, 22, 30, 16, 18, 27],
    time:["18日10时", "18日11时", "18日12时", "18日13时", "18日14时", "18日15时", "18日16时", "18日17时", "18日18时", "18日19时", "18日20时","18日21时", "18日22时", "18日23时", "19日00时", "19日01时", "19日02时", "19日03时", "19日04时", "19日05时", "19日06时", "19日07时", "19日08时", "19日09时"]
}

option = {
    backgroundColor:"rgb(4,33,98)",
    title: {
        text: '单位：ug/m³(CO为mg/m³)',
        textStyle: {
          color: '#aaa',
          fontSize: '10',
          fontWeight: '400'
        },
        left: 'center',
        top: '15'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['AQI', 'PM2.5', 'PM10', 'SO2', 'NO2', 'O3', 'CO'],
        textStyle: {
          color: '#eee',
          fontSize: '8'
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGrap: 0
      },
      color: ['#1a4894', '#c05311', '#699c0b', '#22f298', '#0f93b4', '#bf153f', '#3c1b7d'],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '30',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // data: ['4h', '8h', '12h', '16h', '20h', '24h'],
        data: obj.time,
        axisLine: {
          lineStyle: {
            color: '#5a92bb'
          }
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#eee'
          }
        },
        axisTick: {
          show: false,
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#5a92bb'
          }
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#eee'
          }
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'AQI',
          type: 'line',
          symbol: 'circle',
          // data: [132, 101, 134, 90, 230, 210]
          data: obj.AQI
        },
        {
          name: 'PM2.5',
          type: 'line',
          symbol: 'circle',
          // data: [182, 191, 234, 290, 330, 310]
          data: obj.PM25
        },
        {
          name: 'PM10',
          type: 'line',
          symbol: 'circle',
          // data: [232, 201, 154, 190, 330, 410]
          data: obj.PM10
        },
        {
          name: 'SO2',
          type: 'line',
          symbol: 'circle',
          // data: [332, 301, 334, 390, 330, 320]
          data: obj.SO2
        },
        {
          name: 'NO2',
          type: 'line',
          symbol: 'circle',
          // data: [932, 901, 934, 1290, 1330, 1320]
          data: obj.NO2
        },
        {
          name: 'O3',
          type: 'line',
          symbol: 'circle',
          // data: [312, 331, 354, 300, 390, 340]
          data: obj.O3
        },
        {
          name: 'CO',
          type: 'line',
          symbol: 'circle',
          // data: [832, 981, 934, 1290, 1350, 1420]
          data: obj.CO
        }
      ]
    };