option = {
    backgroundColor:'#fff',
    xAxis: [
        {type: 'category', gridIndex: 0,
        data: ['西藏', '新疆', '台湾','青海', '甘肃']},
        {type: 'category', gridIndex: 1,position:'top',
        data:['上海','天津', '北京', '浙江','江苏']}
    ],
    yAxis: [
        {gridIndex: 0,min:0,max:100,
            axisLabel : {
                formatter: function(v){
                    return v+"%";
                }
            }
        },
        {gridIndex: 1,min:-100,max:0,
        axisLabel : {
                formatter: function(v){
                    return - v+"%";
                }
            }}
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    color:['#2FACFA','#F5A623'],
    series: [{
        data: [100, 100, 100, 90, 90],
        type: 'bar',barWidth:'60px',
        label:{show:true,position:'top',
            formatter:function(v){
                return v.value+'%';
            }
        }
    },{
        type: 'bar',
        xAxisIndex: 1, yAxisIndex: 1,barWidth:'60px',
        label:{show:true,position:'bottom',
            formatter:function(v){
                return -v.value+'%';
            }
        },
        data: (function(){
                var oriData = [10,15,20, 24,30];
                var len = oriData.length;
                while(len--) {
                    oriData[len] *= -1;
                }
                return oriData;
            })()
    }]
};
