var data = [
            {
              state:'良',
                name: '单车系统',
                value: 54
            }, {
              state:'中',
                name: '雾霾系统',
                value: 44
            }, {
              state:'差',
                name: '垃圾管理系统',
                value: 35
            }, {
              state:'优',
                name: '城市绿道系统',
                value: 30
            }, {
              state:'良',
                name: '智慧家园系统',
                value: 20
            }]

        var titleArr = [], seriesArr = [];
        var colors = [['#C467FF', '#CACACA'], ['#2CAF70', '#CACACA'], ['#FFA23F', '#CACACA'], ['#625AFF', '#CACACA'], ['#4B8BFF', '#CACACA']]
        data.forEach(function (item, index) {
            seriesArr.push(
                {
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [60, 70],
                    itemStyle: {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: [index * 20 + 10 + '%', '50%'],
                    data: [{
                        value: item.value,
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return [item.state,  params.value+'%'].join('\n\n');
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold',
                                    color: colors[index][0]
                                }
                            }
                        },
                    }, {
                        value: 100 - item.value,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: colors[index][1]
                            },
                            emphasis: {
                                color: colors[index][1]
                            }
                        }
                    }]
                }
            )
        });
        var option = {

              title: {
	        text: '通过率/数据质量评价',
	        textStyle: {
	        	 align: 'center',
	            color: '#333333',
	            fontSize: 18,
	        },
	        top: '2%',
	        left: '2%',
	    },
	        legend: {
        data: [{
            name: '单车系统',
        }, {
            name: '雾霾系统',
        },{
            name: '垃圾管理系统',
        },
        {
            name: '城市绿道系统',
        },
         {
            name: '智慧家园系统',
        }],
        type: "scroll",
        bottom:'40',
        itemGap: 30,
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
            fontSize: '13',
          
        },

    },
            tooltip: {
                show: true,
                formatter: function (params) {
                    if (params.name == 'invisible') {
                        return params.marker + params.seriesName + '未通过：' + params.value + '%';
                    }
                    return params.marker + params.seriesName + '通过：' + params.value + '%';
                },
            },
            series: seriesArr
        }
        return option;