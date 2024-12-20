option = {
  title: {
                        text: '用户',
                        top:10
                    },
                    tooltip: {},
                    color:['#fbad0a','#0f8fe9','#01ae45'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {type: 'cross'},
                        formatter: function(a){
                            return (
                            a[0]['axisValueLabel']+"<br>"+
                            '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: '+a[0]['color']+'"></span>'+
                            a[0]['seriesName'] +':'+a[0]['value']+"<br>"+
                            '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: '+a[1]['color']+'"></span>'+
                            a[1]['seriesName'] +':'+a[1]['value']+"<br>"+
                             '<span style="display: inline-block; margin-right: 5px; border-radius: 10px; width: 9px; height: 9px; background-color: '+a[2]['color']+'"></span>'+
                             a[2]['seriesName'] +':'+a[2]['value']+"%"
                            );
                        },
                    },
                    legend: {
                        bottom:0,
                        left:'center',
                        itemWidth:10,
                        itemHeight:10,
                        data:[
                            {
                                name:'vv',
                                icon:'roundRect',

                            },
                            {name:'uv' ,icon:'roundRect',},
                            {name:'转化率' ,icon:'roundRect',}
                        ]
                    },
                    xAxis: {
                        data: ['11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30', '12/01', '12/02','12/03','12/04','12/05','12/06','12/07','12/08']
                    },
                    yAxis: [{
                        type: 'value',
                        name: '',
                        min: 0,
                        position: 'left',
                        axisLabel: {},

                    }, {
                        type: 'value',
                        name: '',
                        min: 0,
                        position: 'right',
                        axisLabel: {
                            formatter: '{value}%'
                        }
                    }],
                    series: [{
                        name: 'vv',
                        type: 'bar',
                        data: [5, 2, 6, 15, 18, 28,58, 22, 23, 20, 30, 10,50, 25, 40]
                    },
                        {
                            name: 'uv',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20,5, 20, 36]
                        },
                        {
                            name: '转化率',
                            type: 'line',
                            yAxisIndex:1,
                            data: ["1", "20", "30", "40", "50", "80","1", "20", "30", "40", "50", "80", "40", "50", "80"]
                        }
                    ]
};