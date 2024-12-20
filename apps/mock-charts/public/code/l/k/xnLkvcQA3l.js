 var data1 = {
            "name": "客户行业分布情况",
            "children": [
                {
                    "name": "性别",
                    lineStyle:{color:'#FFAE57',},
                    "children": [
                        {lineStyle:{color:'#FFAE57',},"name": "男 ", "value": 2105},
                        {lineStyle:{color:'#FFAE57',},"name": "女", "value": 1316},


                    ]
                },

                {
                    "name": "职业",
                    lineStyle:{color:'#54ebfc',},
                    "children": [
                        {lineStyle:{color:'#54ebfc',},"name": " 一般职员 ", "value": 2105},
                        {lineStyle:{color:'#54ebfc',},"name": "中层管理者", "value": 1316},
                        {lineStyle:{color:'#54ebfc',},"name": "创办人、合伙人", "value": 3151},
                        {lineStyle:{color:'#54ebfc',},"name": "高层管理者", "value": 3770},
                        {lineStyle:{color:'#54ebfc',},"name": "自由职业", "value": 2435},
                        {lineStyle:{color:'#54ebfc',},"name": "政府机关", "value": 4839},
                        {lineStyle:{color:'#54ebfc',},"name": "退休", "value": 1756},
                        {lineStyle:{color:'#54ebfc',},"name": "其他", "value": 4268},

                    ]
                },
                {
                    "name": "行业",
                    lineStyle:{color:'#fb767b',},
                    "children": [
                        {lineStyle:{color:'#fb767b',},"name": "IT,移动通讯 1616 （5%）", "value": 1616},
                        {lineStyle:{color:'#fb767b',},"name": " 金融、保险、证券 1027 （3.3%）", "value": 1027},
                        {lineStyle:{color:'#fb767b',},"name": " 交通、运输、物流 ", "value": 3891},
                        {lineStyle:{color:'#fb767b',},"name": " 贸易、商业 ", "value": 891},
                        {lineStyle:{color:'#fb767b',},"name": "印刷、包装", "value": 2893},
                        {lineStyle:{color:'#fb767b',},"name": " 法律事务所、会计 ", "value": 5103},
                        {lineStyle:{color:'#fb767b',},"name": " 旅游、酒店、餐饮 ", "value": 3677},
                        {lineStyle:{color:'#fb767b',},"name": "教育", "value": 781},
                        {lineStyle:{color:'#fb767b',},"name": "日用消费品制造", "value": 4141},
                        {lineStyle:{color:'#fb767b',},"name": "生物、制药、保健", "value": 933},
                        {lineStyle:{color:'#fb767b',},"name": "房地产", "value": 5130},
                        {lineStyle:{color:'#fb767b',},"name": "建筑设计装潢 ", "value": 3617},
                        {lineStyle:{color:'#fb767b',},"name": "媒体、出版", "value": 3240},
                        {lineStyle:{color:'#fb767b',},"name": "农、林、渔业 ", "value": 2732},
                        {lineStyle:{color:'#fb767b',},"name": "烟酒制造", "value": 2039},
                        {lineStyle:{color:'#fb767b',},"name": "电信、电力", "value": 1214},
                        {lineStyle:{color:'#fb767b',},"name": "咨询、广告", "value": 3748},
                        {lineStyle:{color:'#fb767b',},"name": "能源(如石化、煤炭等)", "value": 843},
                        {lineStyle:{color:'#fb767b',},"name": "采掘、治炼、化工", "value": 843},
                        {lineStyle:{color:'#fb767b',},"name": "其他", "value": 1554},

                    ]
                },
               /* {
                    "name": "年龄",
                    lineStyle:{color:'#b576fb',},
                    "children": [
                        {lineStyle:{color:'#76fb89',},"name": " 20岁以下 ", "value": 2105},
                        {lineStyle:{color:'#76fb89',},"name": "20-30岁", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "30-40岁", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "40-50岁", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "50-60岁", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "60-70岁", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "70-80岁", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "80岁以上", "value": 1316},
                    ]
                },*/
                {
                    "name": "家庭年收入",
                    lineStyle:{color:'#76fb89',},
                    "children": [
                        {lineStyle:{color:'#76fb89',},"name": "5W以下 ", "value": 2105},
                        {lineStyle:{color:'#76fb89',},"name": "5-10W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "10-15W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "15-20W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "20-30W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "30-40W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "40-50W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "50-70W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "70-100W", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "100W以上", "value": 1316},
                        {lineStyle:{color:'#76fb89',},"name": "其他", "value": 1316},
                    ]
                }
            ]
        };
        option = {
            title : {
                text: '客户行业分布情况',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 20,
                    color: '#F1F1F3'
                },
                top: "2%",
                x: '5%'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            legend: {
                top: '2%',
                left: '3%',
                orient: 'vertical',
                data: [{
                    name: 'tree1',
                    icon: 'rectangle'
                } ,
                    {
                        name: 'tree2',
                        icon: 'rectangle'
                    }],
                borderColor: '#c23531'
            },
            series:[
                {
                    type: 'tree',



                    data: [data1],

                    top: '5%',
                    left: '15%',
                    bottom: '2%',
                    right: '25%',

                    symbolSize: 7,

                    label: {
                        normal: {
                            position: 'left',
                            color:'#fff',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },

                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                color:'#fff',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },

                    expandAndCollapse: true,

                    animationDuration: 550,
                    animationDurationUpdate: 750

                },
            ]
        }