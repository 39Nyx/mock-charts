app.title = '堆叠条形图';
var data1 = [0.639,0.616,0.606,0.597,0.603,0.602,0.586,0.579,0.582,0.577,0.558,0.544,0.544,0.519,0.511,0.512,0.494,0.464,0.451,0.447,0.447,0.444,0.446,0.445,0.450,0.420,0.431];
var data2 = [0.161,0.184,0.194,0.203,0.197,0.198,0.214,0.221,0.218,0.223,0.242,0.256,0.256,0.281,0.289,0.288,0.306,0.336,0.349,0.353,0.353,0.356,0.354,0.355,0.35,0.38,0.369];

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
        left: '6%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ["文昌路", "汽车站南","梁园","松风路","旋宫酒店","祖庙A站","建新路","市一小","兆祥公园","普君新城","市政府","南浦村","明珠体育馆西门","市一医院A站","绿景二路","深村北站","亚艺公园南门","绿景三路","环湖花园","天湖郦都","湖景路口","怡翠玫瑰园","星星广场","季华七路","季华东路","丽日广场","村口"]
    },
    series: [
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            normal:{
                color: 'rgb(31,73,125)'
            }
            },
            data: [ , , , , , , , , , , ,0.544,0.544,0.519,0.511,0.512,0.494,0.464,0.451,0.447,0.447,0.444,0.446,0.445,0.450,0.420,0.431]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
            normal:{
                color: 'rgb(200,31,31)'
            }
            },
            data: [0.639,0.616,0.606,0.597,0.603,0.602,0.586,0.579,0.582,0.577,0.558, , , , , , , , , , , , , , , , ]
        },
        {
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    
                    
                }
            },
            
            itemStyle:{
            normal:{
                color: '#eee'
            }
            },
            data: [0.161,0.184,0.194,0.203,0.197,0.198,0.214,0.221,0.218,0.223,0.242,0.256,0.256,0.281,0.289,0.288,0.306,0.336,0.349,0.353,0.353,0.356,0.354,0.355,0.35,0.38,0.369]
        }
    ]
};