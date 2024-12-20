 var option = {
        color:["#7179CB","#4CCEFE"],
        title: {
            text:"统计总量",
            textStyle:{
                fontSize:16,
                padding:"10px"
            }
        },
        legend: {
            data: ["总量", "分量"],
        },
        tooltip: {},
        xAxis: {
            axisLabel:{show:false}

        },
        yAxis: {
            splitArea: {show: false},
            data: ['a','b','c','d']
        },

        series: [
            {
                barGap: "-100%", /*这里设置包含关系，只需要这一句话*/
                barWidth: 20,
                data: ["27", "24", "43", "10", ],
                name: "分量",
                z:2, /*层级提高*/
                itemStyle:{
                    normal:{
                       color:function(params){
                                var colorlist=["#119df","#ff4b54","#468357","#f17b00"];
                                return colorlist[params.dataIndex]
                            },
                        label:{
                            show:true,
                            position:["600px","25%"],
                            distance:0,
                            align:"right",
                            color:"#fff"
                        }
                    }
                },
                type: "bar"
            },
            {
                barWidth: 20,
                data:  ["100", "100", "100", "100",],
                name: "总量",
                z:1,
                itemStyle:{
                    normal:{
                        color:"#082159",
                        label:{
                            show:false,
                            position:"top"
                        }
                    }
                },
                type: "bar",
            }
        ]
    };