option = {
                backgroundColor:'#1B2D3B',

                    title : {
                        text: '抽检异议情况分析', //主标题
                        left:'center',
                        textStyle:{
                            //文字颜色
                            color:'white',
                            // //字体风格,'normal','italic','oblique'
                            // fontStyle:'normal',
                            // //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            // fontWeight:'bold',
                            // //字体系列
                            // fontFamily:'sans-serif'
                            // //字体大小
                            // fontSize:18
                        },
                        subtext: '单位异议趋势分析', //副标题
                        subtextStyle:{}    //与textStyle类似
                    },
                    color:['#39E7FB','#70AD47'],  //折线颜色

                /*
                  tooltip为提示框组件,trigger为触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                  'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

                  formatter:折线（区域）图、柱状（条形）图、K线图: {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
                            散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
                            地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
                            饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
                  */
                    tooltip : {
                        trigger: 'axis'
                    },

                    //grid为直角坐标可视化,可以设置改图的位置,
                    //containLabel:grid 区域是否包含坐标轴的刻度标签,这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
                    grid: {
                        left: '3%',
                        top:'15%',
                        containLabel: true
                    },

                    //legend为图例,x,y设置其位置,textStyle可设置字体颜色大小等等,data需与series的dataname一致
                    //默认横向布局horizontal，纵向布局值为'vertical'
                    legend: {
                        x:'right',
                        y:'top',
                        orient:'vertical',
                        textStyle:{
                            color:'white'

                        },
                        data:['异议提出数','异议通过数']
                    },

                   //坐标轴x轴属性,其中axisLine为坐标轴线,lineStyle可以设置其属性
                   //boundaryGap: 指第一个数值是在刻度0的y轴上,还是在0-5.1之间
                   //splitLine:分隔线。默认数值轴显示，类目轴不显示。x轴的splitLine为竖的线与y平行.
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            splitLine:{
                                show:false,
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'white'
                                }
                            },
                            data : ['1日','2日','3日','4日']
                        }
                    ],

                   //与x轴类似
                    yAxis : {
                        type: 'value',
                        min: 0,
                        max: 400,
                        splitLine:{
                            show:false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'white'
                            }
                        },
                    },


                   //areaStyle:形成区域图的属性设置,即折线与x y轴形成的图形区域或者折线与折线之间形成的图形区域,
                    series : [
                        {
                            name:'异议提出数',
                            type:'line',
                            areaStyle: {

                            },
                            smooth:false,

                            data:[200,23,205,167]
                        },
                        {
                            name:'异议通过数',
                            type:'line',
                            areaStyle: {
                            },
                            smooth:false,

                            data:[178,134,64,79]
                        }
                    ]
                };
