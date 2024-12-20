option = {
        title: {
                x: "center",
                bottom: 380,
                text: '**指  数',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 22,
                    color: "#999"
                },
            },
            series: [
                {
                    type: 'gauge',
                    radius: 200,
                    splitNumber: 1,
                    min: 0,
                    max: 0,
                    startAngle: 180,
                    endAngle: 0,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#8f8f8f']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#8f8f8f',
                            width: 1
                        },
                        length: -8,
                        splitNumber: 50
                    },
                    splitLine: {
                        show: true,
                        length: 12,
                        lineStyle: {
                            color: '#8f8f8f',
                        }
                    },
                    axisLabel:{
                        show:false
                    },
                    detail:{
                        show:false
                    }
                }
                ,{
                type: 'gauge',
                startAngle: 180,
                radius: 190,
                splitNumber:12,
                endAngle: 0,
                min: 0,
                max: 5,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 20,
                        shadowBlur: 0,
                        color: [
                            [1/12, '#05FA1D'],
                            [2/12, '#05FA1D'],
                            [3/12, '#05FA1D'],
                            [4/12, '#B5FB02'],
                            [5/12, '#FBC402'],
                            [6/12, '#FABB00'],
                            [7/12, '#FABB00'],
                            [8/12, '#FA9900'],
                            [9/12, '#FD5901'],
                            [10/12, '#FD5901'],
                            [11/12, '#F82804'],
                            [12/12,'#FD0000'],
                        ]
                    }
                },
                axisTick: {
                    show:false
                },
                axisLabel:{
                    show:true,
                    fontSize:25,
                    formatter:function(param){
                        if ((param % 5)==0) {
                            return param
                        }
                    }
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle:{
                        color:'white',
                        width:2
                    }
                },
                pointer: {
                    show: true,
                    length:'60%'
                },
                itemStyle:{
                    normal:{
                        color:'#FFFFFF',
                        borderColor:'#92DAFF',
                        borderWidth:'2',
                    }
                },
                detail: {
                    offsetCenter: [0, 70],
                    textStyle: {
                        fontSize:30,
                        fontFamily:'宋体',
                        fontWeight:'bold',
                        color:'#6495ED',
                    }
                },
                data: [{
                    name: "",
                    value: 3.28
                }]
            }]
};