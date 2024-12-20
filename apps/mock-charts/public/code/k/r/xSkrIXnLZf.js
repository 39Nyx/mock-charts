option = {
    backgroundColor: 'rgb(236,238,248)',
    color: ['rgb(255,210,133)'],
    
     title: [
        {text: '2010-2016年全国广播接触率',
        left:'28%',
        bottom: '6%',
        textAlign: 'center',
        textStyle: {
            color:'rgb(116,118,119)'
        }
    },
        {text: '2016年全国广播各级电台市场份额',
        left: '75%',
        bottom: '5.5%',
        textAlign: 'center',
        textStyle: {
            color: 'rgb(116, 118, 119)'
        }
    },
        {text:'数据来源：赛立信媒介研究',
        left: '52%',
        bottom: '0%',
        textAlign:'center',
        textStyle:{
            fontStyle:'normal',
            fontWeight:'lighter',
            fontSize:'10',
        }
    },
],
    
     tooltip: 
     {trigger: 'axis'},
    
    grid: {
        left: '3%',
        right: '50%',
        top: '5%',
        bottom: '17%',
        containLabel: true
    },
        
        xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: 'rgb(116, 118, 119)'
            }
        },        
        axisLabel: {
            textStyle: {
                color: 'rgb(116, 118, 119)'
            }
        },
        boundaryGap: false,
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
    },
        yAxis: {
            min: 50,
            max: 70,
        "axisLine": {
            lineStyle: {
                color: 'rgb(116, 118, 119)'   
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(116, 118, 119)'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            show: true,  
                  interval: 'auto',  
                  formatter: '{value} %'  ,
            textStyle: {
                color: 'rgb(116, 118, 119)'
            }
        },
        type: 'value'
    },
    
    series : [
        {name:'接触率',
        smooth: true,
        formatter: '{b}\n{c}%',
        type: 'line',
      	symbol: 'circle',
        data: [68.2, 59.5, 59.7, 59.8, 59.7, 59.5, 59.6]
    },
        {name: '市场份额',
            type: 'pie',
            radius: '55%',
            center: ['75%', '48%'],
            data:[{value:10.0, name:'中央级电台(10.0%)',
                itemStyle:
                {normal:
                {color:'rgb(235,57,28)'}
                }
            },
                {value:54.1, name:'市县级电台(54.1%)',
                itemStyle: 
                {normal: 
                {color: 'rgb(249,199,229)'}
                }
            },
                {value:35.9, name:'省级电台(35.9%)',
                     itemStyle: {
        normal: {color: 'rgb(115,154,179)'}
                }
            },
    ],
            
    label: {
        normal: {
            textStyle: {
                color: 'rgb(116, 118, 119)'
                }
            }
        },
            
    labelLine: {
        normal: {
            lineStyle: {
                    color: 'rgb(116, 118, 119)'
                    }
                }
            },
 
        }
    ],
};