//自定义提示文字
var getname = ['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号'];
var getvalue =[23,45,23,43,21,20,30,40,50,90];
var getvalue2 =[43,43,33,39,30,40,20,60,30,50];
var option = {
  title: {
	        text: '导入/清洗入库数据量',
	        textStyle: {
	        	 align: 'center',
	            color: '#333333',
	            fontSize: 18,
	        },
	        top: '2%',
	        left: '2%',
	    },
    grid: {
        top: 120,
        bottom: 60,
        left: 50,
        right: 50
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params){
            return getname[params[0].dataIndex] + 
            '<br> 未通过：' + getvalue[params[0].dataIndex]+
             '<br> 已通过：' + getvalue2[params[0].dataIndex]
            },
    },
    legend: {
        data: [{
            name: '已通过',
        }, {
            name: '未通过',
        }],
        type: "scroll",
        top:50,
        itemGap: 25,
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
            fontSize: '13',
          
        },

    },
    xAxis: [{
      
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#656565',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
      name: "(行)",
      max:1000,
      nameTextStyle:{
        color:'#666666',
      },
        type: 'value',
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13,
                
            },
        },
        axisLine: {
            lineStyle: {
                color: '#FFAE00',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
          show:true,
         
        }
    }],
    series: [{
        name: "未通过",
        type: 'bar',
        data: getvalue,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color:'#625AFF'
            }
        },
    },
    {
        name: "已通过",
        type: 'bar',
        data: getvalue2,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color:  '#FFA23F'
            }
        },
    }
    
    ]
};