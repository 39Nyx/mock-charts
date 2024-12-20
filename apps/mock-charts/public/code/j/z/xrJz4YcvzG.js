var legends = [{name:"二衬", value:6},{name:"初衬", value:3},{name : "爆破", value:9}, {name : "支护", value:1}];


option = {
    title: {
         x:20,
        text: '隧道内人员情况'
    },
    tooltip: {},
    grid:[ {
        left: '15%',
        right: '4%',
        top: '10%',
        width: 100,
        bottom: '45%',
        height: 300, //设置grid高度
        containLabel: true
    } ,{
        left: '15%',
        right: '4%',
        top: '50%',
        bottom: 0,
        width: 100,
        height: 300, //设置grid高度
        containLabel: true
    }],
    legend: {
        orient: 'vertical', // 'vertical'
        x:20,
        y: 50,
        formatter:function(name){
            for(var i in legends){
                if(legends[i].name == name){
                    return name + "(" + legends[i].value + ")";
                }
            }
            return name;
        },
        //itemGap : document.getElementById('main').offsetWidth / 8,
        data:legends
    },
    xAxis: [{
        gridIndex:0,
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },{
         gridIndex:1,
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        gridIndex:0,
        type: 'category',
        boundaryGap: true,
        axisTick: {
            length: 50,
            show: true
        },
        axisLabel: {
            interval: null
        },
        data: [ '-'],
        splitLine: {
            show: false
        }
    },{
        gridIndex:0,
      	name: '                                     左线(27)     时长',
      	nameLocation: 'start',      
      	nameTextStyle: {
          	fontWeight: 'bold'
        },
	    position: 'left',
      	offset: 80,
      	axisLine: {
          	onZero: false,
          	show: false          
        },
      	axisTick: {
          	length: 170,
          	inside: true,
          	lineStyle: {color: '#ccc'}
        },      
      	axisLabel: {
          	inside: true
        },      
      	inverse: true,      
      	data: ['']
    }, {
        gridIndex:1,
        type: 'category',
        boundaryGap: true,
        axisTick: {
            length: 100,
            show: true
        },
        axisLabel: {
            interval: null
        },
        data: [ ''],
        splitLine: {
            show: false
        }
    },

    {
        gridIndex:1,
      	name: '                                     右线(27)     时长',
      	nameLocation: 'start',      
      	nameTextStyle: {
          	fontWeight: 'bold'
        },
	    position: 'left',
      	offset: 80,
      	axisLine: {
          	onZero: false,
          	show: false          
        },
      	axisTick: {
          	length: 170,
          	inside: true,
          	lineStyle: {color: '#ccc'}
        },      
      	axisLabel: {
          	inside: true
        },      
      	inverse: true,      
      	data: ['']
    }],
    series: [ {
        type: 'bar',
        name: '爆破',
        data:[ 78],
        barWidth: 18,//固定柱子宽度
        tooltip : {
                trigger: 'item',
                backgroundColor: 'black',
                formatter: "姓名：小吴 <br/>工种：{a}<br/>时长：{c}分"
        },
        itemStyle:{
            normal: { 
                  label: {
                      formatter:function(params){ if(params.value=="-"){ return ''; }else { return params.value; } 
                      }
                      
                  }
            }
        },
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	distance:-50,
              	textStyle: {color: '#000'},    
              	formatter: '小吴    {c}分钟',
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 80],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '张三',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 60],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '小武',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 10],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '李工',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 18],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '小花',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 57],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '小王',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 60],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '小徐',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        data:[ 47],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '琦琦',              
            }
        }      
    } , {
        type: 'bar',
        name: '爆破',
        barWidth: 18,//固定柱子宽度
        data:[ 26],
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '昊昊',              
            }
        }      
    } , {
        type: 'bar',
        name: '支护',
        data:[41],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '菜菜',              
            }
        }      
    } , {
        type: 'bar',
        name: '初衬',
        data:[56],
        barWidth: 18,//固定柱子宽度
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '小明',              
            }
        }      
    } ,{
        type: 'bar',
        name: '初衬',
        data:[46],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '小伙子',              
            }
        }      
    },{
        type: 'bar',
        name: '初衬',
        data:[20],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '范工',              
            }
        }      
    },{
        type: 'bar',
        name: '二衬',
        data:[170],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '测分',              
            }
        }      
    },{
        type: 'bar',
        name: '二衬',
        data:[30],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '李智',              
            }
        }      
    },{
        type: 'bar',
        name: '二衬',
        data:[30],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '李智',              
            }
        }      
    },{
        type: 'bar',
        name: '二衬',
        data:[30],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '李智',              
            }
        }      
    },{
        type: 'bar',
        name: '二衬',
        data:[30],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '李智',              
            }
        }      
    },{
        type: 'bar',
        name: '二衬',
        data:[30],
        barWidth: 18,//固定柱子宽度
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {color: '#000'},
              	formatter: '李智',              
            }
        }      
    }
    ]
};