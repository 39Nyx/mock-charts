option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "融单流转图",
        //subtext: "ZBH",
        top: "top",
        left: "left"
    },
    itemStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 200, '12px', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        //data: ['一级企业1', ]
    }],
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 20000
        },
        legendHoverLink: true,
        //建头
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 15],
        edgeLabel: {
            show: false,
            normal: {
                show: true,
                position: 'middle',
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        },
        itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
        },
        data: [{
                name: "深圳创维数字技术有限公司",
                value: "1000",
                symbolSize: 160,
                draggable: false,
                fixed: true,
                tooltip: {
                    formatter: " 应收账款编号：222<br/>应收账款核心企业：王立军<br/>录入日期：2018-03-12<br/>付现日期：2018-11-31<br/>支付状态：未支付<br/>应收账款金额：5,000.00",
                },
                x: 500,
                y: 100,
            },

            {
                name: "测试供应商1227",
                value: "2000",
                symbolSize: 120,
                draggable: true,
                tooltip: {
                    formatter: "商单编号：555<br/>持票人名：UUU<br/>持票日期：2018-03-12<br/>付现日：2018-11-31<br/>商单状态：正常持有<br/>商单金额：5,000.00",
                }
            }
        ],

        links: [{
            source: "深圳创维数字技术有限公司",
            value: "日期:2018-03-24",
            target: "测试供应商1227",
        }, ],
        focusNodeAdjacency: true,
        roam: true,
        //圆形上面的文字	
        label: {
            normal: {
                position: "inside",
                show: true,
                textStyle: {
                    fontSize: 12
                },
                /*formatter:function(params){
		
					/*var temp = ""; 
					for(var i in params){
						temp += i+":"+params[i]+"\n"; 
					} 
					alert(temp);
					return 23;			
				}*/
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0,
                color: '#000',

            }
        }
    }]
};