	var option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '修改数值',
            type: 'gauge',
            //detail: {formatter:'{value}%'},
            detail: {formatter: function (value, index) { 
				return value.toFixed(2); 
			} },
            
            data: [{value: 50.10, name: '完成率'}]
        }
    ]
};

    myChart.setOption(option, true);