option = {
    title : {
        
        textStyle: {

fontSize: 44,
fontStyle: 'normal',
fontWeight: 'normal',
},
        text: '新世纪外语老师分类和旗下学生数',
        
        x:'center'
    
   
},


    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',


        data: ['全职老师', '兼职老师', ]
    },
    series: [{
        name: '老师分类',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,


        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,


                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {


            normal: {
                show: false
            }
        },
        data: [

            {
                value: 296,
                name: '兼职老师'
            }, {
                value: 122,
                name: '全职老师'
            }
        ]
    }]
};





// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;
/*window.onresize = function () {
    myChart.resize();     
}*/