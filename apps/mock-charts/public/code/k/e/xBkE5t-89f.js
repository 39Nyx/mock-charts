
option = {
    title: {
        text: '各检查项目的违法违规数',
        right:'center',
        top:'1%'
    },
    legend: {
        right: 10,
        data: ['查项目的违法违规数','检查项目违规数同比率']
    },
    xAxis: {
        data: ['粮食加工品', '食用油、油脂及其制品', '调味品', '肉制品',
            '乳制品', '饮料', '方便食品', '饼干', '罐头', '冷冻饮品', '速冻食品',
            '薯类和膨化食品', '糖果制品', '茶叶及相关制品', '酒类', '蔬菜制品',
            '水果制品', '炒货食品及坚果制品', '蛋制品', '可可及焙烤咖啡产品',
            '食糖', '水产制品', '淀粉及淀粉制品', '糕点', '豆制品', '蜂产品',
            '保健食品', '特殊医学用途配方食品', '婴幼儿配方食品', '特殊膳食食品',
            '其他食品', '食品添加剂'
        ]
    },
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1f6770'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ], 
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series: [{
        name:'查项目的违法违规数',
        color:'#9a4269',
        type:'bar',
        barWidth : 30,
        data:[934,863,845,765,737,653,634,765,737,653,422,737,653,634,556,489,442,556,489,442,422,356,315,252,212,132]
    },{
        name:'检查项目违规数同比率',
         color: '#d53f4b',
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#f4ec11' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#24d897' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
        data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5,3,5,4,6,4,6.5,5.4,9,4,7,3,6,9,4,7,3,4]
    }]
};

