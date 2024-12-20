option = {
    backgroundColor : 'white',//背景颜色
    title: {
        text: 'ECharts 日常',//标题
        textStyle : {
            color: 'black',//标题颜色
            fontSize: '16'//标题大小
        },
        x : 'center'//x轴居中
    },
    grid : {  //图表距离四周多少，相当于css中的padding
      top : '16%',
      left : '15%',
      bottom: '15%',
      right: '15%'
    },
    toolbox: {//默认的工具，有下载图片，转换，看数据格式等等
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {//图例，这里的图例要和series 里面的name名字对应 
        data:['销量','产量'],
        top: '8%',
        itemWidth : 15,//图例的宽度
	    itemHeight : 15//图例的高度
    },
    tooltip: { //鼠标悬停提示
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        //formatter : '{b}' 这里还可以自定义提示内容，可以写一个函数，具体可以看下api
    },
    xAxis: {//x轴
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {//y轴
        name: '件',//加上单位
        //data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    color: ['#a9abff','#ff8896'],//这里是改series里面的颜色，一一对应，第一个对应销量，第二个是产量，以此类推
    series: [{
        name: '销量',
        type: 'bar',//设置柱状图,这里改成line，就能看到柱状和线的综合图
        barWidth : 20,//设置柱状宽度
        data: [5, 20, 36, 10, 10, 20],
        markLine: { //这里是显示标线
            data: [
            	{
			        name: 'Y 轴值为 100 的水平线',
			        yAxis: 60,
			        lineStyle : {
			        	color : 'green'
			        },
			        label : {
			        	show: true,
			        	normal: {
                            position: 'middle',//文字显示start middle end
                            formatter: '销量目标值' 
                        }
			        }
			    },
                {type: 'average', name: '平均值'}
            ]
        }
    },{
        name: '产量',
        type: 'bar',//设置柱状图
        barWidth : 20,//设置柱状宽度
        data: [15,60, 86, 55, 55, 50]
    }]
};