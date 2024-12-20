
    var data_x = [];
    var last_data = [];
    var this_data = [];
    var d_value = [];
    var decrease_data = [];
    var increase_data =[];
    var decrease_rating = [];
    var increase_rating =[];
    var rating_data = [];
    for (var i = 1; i < 16; i++) {
        data_x.push("条目"+i);
        last_data.push(Math.floor(Math.random()*1000)+1000);
        this_data.push(Math.floor(Math.random()*1000)+1000);
        d_value.push(this_data[i-1]-last_data[i-1]);
        if(d_value[i-1]>0){
            increase_data.push(d_value[i-1]);
            increase_rating.push((d_value[i-1]*100/this_data[i-1]).toFixed(2));
            decrease_data.push(0);
            decrease_rating.push(0);
        }
        else {
            decrease_data.push(d_value[i-1]);
            decrease_rating.push((d_value[i-1]*100/this_data[i-1]).toFixed(2));
            increase_data.push(0);
            increase_rating.push(0);
        }
        rating_data.push(((this_data[i-1]-last_data[i-1])*100/this_data[i-1]).toFixed(2));
    }

option = {
    title:{
        text:'XXX同/环比分析'
    },
    tooltip: {
        
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        top:'30%',
        data:['上期','本期']
    },
       grid:[{
            show: true,
            //left: 23,
            top: '5%',
            containLabel: true,
            //width: '73%',
            height:'25%'
        },
        {
            show:true,
            //left:0,
            top:"35%",
            containLabel:true,
            //width:"75.9%",
            height:"60%"
        }],
    xAxis: [
        {
            gridIndex:0,
            type: 'category',
            data: data_x,
            axisLabel:{
                interval: 0,
                rotate: 60,
                margin: 2,
                show:true
            },
            axisPointer: {
                type: 'shadow'
            }
        },{
            gridIndex:1,
            type: 'category',
            data: data_x,
            axisLabel:{
                interval: 0,
                rotate: 60,
                margin: 2,
            },
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            gridIndex:0,
            type: 'value',
            name: '变化量',
            
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            gridIndex:1,
            type: 'value',
            name: '金额',
            

        }
    ],
    series: [
        {
            xAxisIndex:1,
            yAxisIndex:1,
            name:'上期',
            type:'line',
            data:last_data
        },
        {
            xAxisIndex:1,
            yAxisIndex:1,
            name:'本期',
            type:'bar',
            itemStyle:{
                normal:{
                    color:'#008B8B',
                }
            },
            data:this_data
        }, {
            xAxisIndex:0,
            yAxisIndex:0,
            name: "减少",
            type: "bar",
            stack: "总量",
            itemStyle: {
                normal: {
                    color: "rgba(51,204,112,1)",
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: "bottom",
                        formatter: function(p) {
                            return p.value < 0 ? ('▼' + p.value +'%') : '';
                        }
                    }
                }
            },
            data: decrease_rating,
        }, {
            xAxisIndex:0,
            yAxisIndex:0,
            name: "增长",
            type: "bar",
            stack: "总量",
            itemStyle: {
                normal: {
                    color: "#FF6A6A",
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        position: "top",
                        formatter: function(p) {
                            return p.value > 0 ? ('▲' + p.value + '%') : '';
                        }
                    }
                }
            },
            data: increase_rating,
        }
    ]
};
