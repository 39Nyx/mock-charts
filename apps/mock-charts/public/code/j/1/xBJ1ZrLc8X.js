var option = {
    backgroundColor:'#12234F',
    title: {
        text: '',
	},
//  tooltip: {
//      trigger: 'axis',
//      axisPointer: {
//          type: 'shadow'
//      }
//  },
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br/><b> {c}</b>平方米",
    },
    grid: {
    	top:'3%',
        left: '8%',
        right: '8%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min:0,
        max:100000,
        splitNumber:5,
        axisLine:{
            lineStyle:{
                color:'white'
            }
        },
        splitLine: {
            show: false,
        },
        axisLabel:{
            //fontWeight:10,
            fontsize:2,
            align:'center',
            interval:0,
        },
        axisTick: {
	        show: false
	    },//隐藏刻度条
//	    name:'平方米',
//      nameLocation:'end',
//      nameTextStyle:{
//          color:"#8d8d8d", 
//          fontSize:16, 
//          padding:[30,0,0]
//      }
    },
    yAxis: {
        type: 'category',
        data: ['A-02','A-04','A-06','A-08','A-09'],
        axisLine:{
            lineStyle:{
                color:'#ffffff',
                width:'2',
            }
        },
        axisLabel:{
        	interval: 0,
        	margin:10
        },
        axisTick:{
        	show:false
        },
//      name:'地块名',
//      nameLocation:'end',
//      nameGap:-5,
//      nameTextStyle:{
//          color:"#8d8d8d", 
//          fontSize:16,  
//          padding:[0,55,0,0]
//      }
    },
    
    //series[0]即"辅助"这个series,将itemStyle的color和barBorderColor设为
    //rgba(0,0,0,0),即透明,data的数据设置一样的,这样在视觉的效果上第二个柱子
    //会和坐标轴有间距.
    series: [
        {
            name: "辅助",
            type: "bar",
            stack: "总",
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [15000,15000, 15000, 15000,15000]
        },
        {
            name: '',
            type: 'bar',
            stack: "总",
            data: [ 95726.02, 54330.88, 36242.56, 35797.86, 24169.19],
            barWidth: '20',
            itemStyle:{
                normal:{
                	//设置渐变色及圆角
                	//barBorderRadius: 7,
                	color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#00a9ec'},
                            {offset: 1, color: '#00acf0'}

                        ]
                    )
                }
            },
            //为柱状添加顶部显示
            label: {
                normal: {
                    show: true,
                    position: "insideRight",
                    padding:[0,10,0,0],
                    offset: [5, 0],
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                }
            },
        },
    ],
};