option = {
    tooltip: {
              trigger: 'axis', 
              formatter: function(datas) 
              {
                  var datayuanshi=[100,30,29,10,50,100,30,29,10,50,100,30,29,10,50,100,30,29];
                  var wancheng=[20,19,10,5,3,20,19,10,5,3,20,19,10,5,3,20,19,10];
                  var res = datas[0].name + '<br/>', val;
                  for(var i = 0, length = datas.length; i < length; i++) {
                        val = '完成比例：'+(datas[i].value) + '%'+ '<br/>';
                        var yuanhi1 ='奖惩案例个数'+ '：'+datayuanshi[i]+'<br/>';
                        var wancheng1='梳理案例个数'+ '：'+wancheng[i]+'<br/>';
                        res += datas[i].seriesName  + val +yuanhi1+wancheng1;
                    }
                    return res;
               }
          },
    toolbox: {
        show : true,
        feature : {
            mark : {
                show: true
            },

        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        height:'90%',
        width:'80%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#28316d',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            axisLabel:  {
                interval: 0,
                rotate:-50,//x轴数据倾斜的角度-90-90
                show: true,
                splitNumber: 15,

                textStyle: {
                    //fontFamily: "微软雅黑",
                    fontSize: 10,
                },

            },
            nameTextStyle:{
                fontStyle:'oblique',
            },

            data :['郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','濮阳市','许昌市','周口市','南阳市','信阳市','漯河市','商丘市','济源市','驻马店市','三门峡市'],

            axisTick: {
                show:false// x轴刻度不显示
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'',
            splitLine: {  //分割线
                show: true,
                // color:"#fff",
                lineStyle: {
                    color: '#FFFFFF',
                     type:'dashed'
                }
            },
			splitNumber:10,
			 splitArea: {
            show: true,
            areaStyle: {
                color: ['#ABABAB', '#B3B3B3','#BCBCBC','#C5C5C5', '#CECECE','#D6D6D6','#DFDFDF', '#E8E8E8','#F1F2F1','#F6F8F6']
            }
        },
            axisLabel: {
                interval: 0,
                rotate: 0,
                show: true,
                splitNumber: 30,
                // color:"#fff",
                textStyle: {
                    //fontFamily: "微软雅黑",
                    fontSize: 12,
                },
                 formatter: '{value} %'
            },

        },

    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth : 30,//柱图宽度
            data:[10, 100, 20, 5, 8,10, 100, 20, 5, 8,10, 100, 20, 5, 8,10, 100, 20],
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                      
                       var index_color = params.value;

                                    if(index_color>=10){
                                        return '#4C90FF';
                                    }else {
                                        return '#FFCC00';
                                    }

                    },
                    label: {
                        show: false,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            }
        }
    ]
};