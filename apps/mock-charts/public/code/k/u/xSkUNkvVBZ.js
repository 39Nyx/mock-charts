var DeadLineColors = ['#000000', '#330066', '#0000FF', '#2F4554'];
var Patch = ['AAM589', '2017-06-05', '2017-07-05', 'GMS 7.1_R3', 'GMS 7.1_R4'],
    option = {
        title: {
            text: 'AAM589 CTS Report',
            subtext: 'By Performance Team',
            position: 'middle'
        },
        // legend: {
        //     data: ['项目进度']
        // },
        yAxis: {
            type: 'time',
            splitNumber: 8,
            min: '2017/2/24',
        },

        xAxis: {
            data: ['Security Patch\n2017-06-05', 'Security Patch\n2017-07-05', 'GMS 7.1_R3', 'GMS 7.1_R4']
        },

        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
                var res = ""
                var date0 = params[0].data;
                var date1 = params[1].data;
                var name = params[0].name;
                date0 = date0;
                date1 = date1;
                res += name + "</br>"
                res += params[0].seriesName + ":" + date0 + "</br>"
                res += params[1].seriesName + ":" + date1 + "</br>"
                return res;
            }
        },

        grid: {
            left: '12%',
            right: '10%'
        },
        series: [{
            name: '开始时间',
            type: 'bar',
            stack: '总量',
            barWidth: '14%',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    // color: 'source',
                    // color: '#000000',
                    // color: '#FFFFFF'
                }
            },
            markLine: {
                data: [{
                    name: 'SoftWare--->' + Patch[0],
                    yAxis: "2017/07/03",
                    label: {
                        normal: {
                            position: "middle",
                            formatter: "{b}\nTestDate --->{c}\nGMS--->" +
                                Patch[3] + "\nSecurity Patch--->" +
                                Patch[1]
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "#0000FF"
                        }
                    }

                }]
            },

            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    textStyle: {
                        fontStyle: 'oblique',
                        color: "#000099",
                    },
                },

            },
            data: ["2017/5/5", "2017/6/7", "2017/3/24", "2017/6/19"],
        }, {
            name: '结束时间',
            type: 'bar',
            stack: '总量',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: '#00CD00',
                    barBorderRadius: 0, //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径
                    shadowColor: 'rgba(0, 0, 0, 0)', //阴影颜色。支持的格式同color
                    shadowBlur: 0 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        fontStyle: 'oblique',
                        color: "#FF0000",
                    }
                }
            },
            data: ["2017/8/3", "2017/9/5", "2017/5/23", "2017/8/18"],

        }, ]
    };