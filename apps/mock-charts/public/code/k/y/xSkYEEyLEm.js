    option = {
        backgroundColor: '#fff',
        color: [
            '#3fb1e3',  // 蓝色
            '#6be6c1',  // 绿色
            '#626c91',  // 靛蓝
            '#a0a7e6',  // 浅紫
            '#c4ebad',  // 浅绿
    		'#96dee8',  // 青
    		'#f67385'  // 红
    	],
        calculable : true,
        legend: {
            data:['用户数 ', '电站数']
        },
        grid: {
            top: '20%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: {
            type : 'category',
            data : (function() {
                var arr = [];
                for (var i = 1; i <= 12; i++) {
                    arr.push(i + '月');
                }
                return arr;
            })()
        },
        yAxis: {
            
        },
        series : [
            {
                name: '用户数 ',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: 100
                },
                markPoint: {  // 标记
					data: [{
						type: 'max'
					}]
				},
                data: [65,93,105,107,134]
            },
            {
                name: '电站数',
                type: 'bar',
                itemStyle: {
                    barBorderRadius: 100
                },
                markPoint: {  // 标记
					data: [{
						type: 'max'
					}]
				},
                data: [20,31,47,59,110]
            }
        ]
    };

    myChart.setOption(option);
