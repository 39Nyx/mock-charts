option = {
    title : {
        text : '时间坐标散点图',
        subtext : 'dataZoom支持'
    },
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            console.debug(params);
           if (params.value.length > 1) {
                var date = new Date(params.data[0]);
                return date.getFullYear() + '-'
                  + (date.getMonth() + 1) + '-'
                  + date.getDate() + ' '
                  +  '<br/>'
                  +params.seriesName +'：'
                  + params.data[1] 
           }
           
                 
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom: {
        show: true,
        start : 30,
        end : 70
    },
    /*dataRange: {
        min: 0,
        max: 100,
        orient: 'horizontal',
        y: 30,
        x: 'center',
        //text:['高','低'],           // 文本，默认为数值文本
        color:['lightgreen','orange'],
        splitNumber: 5
    },*/
    visualMap: {
        min: 0,
        max: 100,
        dimension: 1,
        left: 'right',
        top: 'top',
        text: ['HIGH', 'LOW'], // 文本，默认为数值文本
        calculable: true,
        itemWidth:18,
        itemHeight:160,
        textStyle: {
                color:'#3259B8',
                height: 56,
                fontSize:11,
                lineHeight:60,
            },
        inRange: {
            color: ['#3EACE5', '#F02FC2']
        },
        padding:[50, 20],
        orient:'horizontal',
    },
    grid: {
        y2: 80
    },
    xAxis : [
        {
            type : 'time',
            splitNumber:10
        }
    ],
    yAxis : [
        {
            type : 'value',
            max:100
        }
    ],
    animation: false,
    series : [
        {
            name:'检验结果值',
            type:'scatter',
           /* symbolSize: function (value){
                return Math.round(value[2]/10);
            },*/
             markPoint: {
	            data: [{
	                    type: 'max',
	                    name: '最大值'
	                },
	                {
	                    type: 'min',
	                    name: '最小值'
	                }
	            ]
	        },
            data: (function () {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                // console.debug( new Date(2014, 9, 1, 0, Math.round(Math.random()*10000)));
                while (len++ < 500) {
                    d.push([
                        new Date(Math.round(Math.random()*new Date().getTime())),
                        (Math.random()*30).toFixed(2) - 0
                    ]);
                }
                console.debug(d);
                return d;
            })()
        }
    ]
};
                    