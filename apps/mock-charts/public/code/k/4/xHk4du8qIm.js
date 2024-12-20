var option = {
    backgroundColor:'#12234F',
    grid:{
    	top:'3%',
        left: '5%',
        right: '8%',
        bottom: '6%',
        containLabel: true
    },
    yAxis: [{
        type: "category",
        data: ["试运行、移交", "施工阶段", "施工准备", "勘察设计"],
        axisTick:{
            show:false
        },
        axisLine:{
             lineStyle:{
             	color:'#225b9e',
             }
        },
        axisLabel:{
        	rotate:30,
        	color:'white',
        },
    }],
    //color:['#5951be','#06c097','#ffad01','#0280cd'],
    color:'#54fbc3',
    xAxis: [{
        type: 'value',
        //坐标轴刻度
        axisTick:{
            show:false,
        },
         axisLine:{
             lineStyle:{
             	color:'#225b9e',
             }
          },
         splitLine:{
             show:false,
//           lineStyle:{
//               type:'dashed',
//               color: ['#aaa', '#ddd']
//           },
         },
         axisLabel: {
             show:true,
             color:'white',
         },
         max:1000
    }],
    
    //如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。
    //这在用柱子做背景的时候有用。
    
    //series[0],即第一个'bar',因为设置了barGap为'-100%',所以第一个bar用做背景
    //series[1],即第二个'bar',name为'辅助',这个是为了调与坐标轴的间距用的,设置color和barBorderColor
    //为rgba(0,0,0,0),这样就透明了,data的数据则为与坐标轴的间距
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(255,255,255,0.1)'}
            },
            barGap:'-100%',//重叠用
            //barCategoryGap:'40%',
            data: [1000,1000,1000,1000],
            barWidth:25,
            animation: false
        },
    	{
            name: "辅助",
            type: "bar",
            stack: "总",
            barWidth: 25,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [945,75, 30, 0]
        },
        {
            name: "试运行,移交",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: [20, '', '', ''],
            label: {
                normal: {
                	formatter:'20天',
                    show: true,
                    position: "right",
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                }
            },
        },
        {
            name: "施工阶段",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: ['', 870, '', ''],
            label: {
                normal: {
                	formatter:'935天',
                    show: true,
                    position: "right",
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                }
            },
            
        },
        {
            name: "施工准备",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: ['', '', 45, ''],
            label: {
                normal: {
                	formatter:'45天',
                    show: true,
                    position: "right",
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                }
            },
        },
        {
            name: "勘察设计",
            type: "bar",
            barWidth: 20,
            stack: "总",
            data: ['', '', '',30],
            label: {
                normal: {
                	formatter:'30天',
                    show: true,
                    position: "right",
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    }
                }
            },
        }
    ]
};