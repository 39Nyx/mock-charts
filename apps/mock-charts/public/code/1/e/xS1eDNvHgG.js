var uploadedDataURL2 = "/asset/get/s/data-1511515130160-SJGZVwHxG.json";

var uploadedDataURL1 = "/asset/get/s/data-1511515122513-SkcxEDHgM.json";

$.get(uploadedDataURL1, function (mian) {
            $.get(uploadedDataURL2,function(zzJson){
            echarts.registerMap('zz', mian);
            var option;
            var busLines=[];
            var data=zzJson;
            var hStep=300/(data.length-1);
            //添加busLines信息
            for(var x in data){
               var line=data[x];
                var pointString=line.ROAD_LINE;
                var pointArr=pointString.split(";");
                var lnglats=[];
                for(var j in pointArr){
                    lnglats.push(pointArr[j].split(','));
                }
               busLines.push({
                  coords:lnglats,
                   lineStyle:{
                       color: echarts.color.modifyHSL('#6af80b', Math.round(hStep * x))
                   }
               });
            }

            option={
                //底图设置
                backgroundColor:'#000000'//背景颜色
               ,geo:{
                   map: 'zz'
                   ,aspectScale: 1
                   ,zoom: 12
                   ,roam: true
                   ,center: [117.680453, 24.51893]//设置中心
                   //选中的时候显示的样式
                   ,itemStyle: {
                       normal: {
                           areaColor: '#d2d5dd',
                           borderColor: '#404a59'
                       },
                       emphasis: {
                           areaColor: '#d2d5dd'
                       }
                   }

               }
               ,series:[
                   /* {
                        name:'漳州',
                        map:'漳州',
                        type:'map',
                        zoom:3,
                        aspectScale:1, //长宽比. default: 0.75
                        roam:false,
                        itemStyle:{
                            emphasis:{label:{show:true}}
                        },
                        data:[]
                    }
                       ,*/
                    {
                        type:'lines',
                        coordinateSystem: 'geo',
                        polyline:true,
                        data:busLines,
                        silent:true,
                        lineStyle:{
                            normal:{
                                opacity:0.2,
                                width:0.5
                            }
                        },
                        progressiveThreshold: 500,
                        progressive: 200
                    },
                    {
                        type: 'lines',
                        coordinateSystem: 'geo',
                        polyline: true,
                        data: busLines,
                        lineStyle: {
                            normal: {
                                width: 0,
                                color: '#f69305'
                            }
                        },
                        effect: {
                            constantSpeed: 50,
                            show: true,
                            trailLength: 0.2,
                            symbolSize: 5
                        },
                        zlevel: 1
                    }
                ]

            };

            var myChart = echarts.init(document.getElementById("main"));
            myChart.setOption(option);



        });//异步2结束

        });//异步1结束