
option = {
    title: {
        text: 'EBSCOhost Electronic Journals Service 电子资源利用绩效分析平台'
    },
      tooltip: {},
    legend: {
       
    },
  
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '销售增加载文量成本', max: 5000},
           { name: '增加载文量成本', max: 5000},
          { name: '独有刊/本数据库的刊占比', max:5000},
		   { name: '增加发文数据的相关指标', max: 5000},
		    { name: '学术贡献值', max:5000},
        ]
    },
    series: [{
       
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [3300, 3200, 4700, 4700,4900],
               name:'类型',
            }
        ]
    }]
};
