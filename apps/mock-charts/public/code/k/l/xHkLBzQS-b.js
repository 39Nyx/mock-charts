 

var seriesData = [10, 52, 200, 334, 390, 330, 220];

var seriesShadow= [400, 400, 400, 400, 400, 400, 400];

 

 

option = {

    color: ['#3398DB'],

    tooltip : {

        trigger: 'axis',

        axisPointer : {           

            type : 'shadow'      

        }

    },

    grid: [{

        left: '3%',

        right: '4%',

        bottom: '3%',

        containLabel: true

    },{

        left: '3%',

        right: '4%',

        bottom: '3%',

        containLabel: true,

            tooltip : {

                show:false

            },

    }],

    xAxis : [

        {

            gridIndex:0,

            type : 'category',

            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

            axisTick: {

                alignWithLabel: true

            }

        },{

            show:false,

            gridIndex:1,

            type : 'category',

            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

        }

    ],

    yAxis : [

        {

            gridIndex:0,

            type : 'value'

        },{

            show:false,

            gridIndex:1,

            type : 'value'

        }

    ],

    series : [

        {

            xAxisIndex:0,

            yAxisIndex:0,

            name:'直接访问',

            type:'bar',

            data:seriesData,

        },{

            xAxisIndex:1,

            yAxisIndex:1,

            type:'bar',

            data:seriesShadow,

            itemStyle: {

                normal: {

                    barBorderColor: 'transparent',

                    color: 'transparent'

                }

            }

        }

    ]

};

 

myChart.on('click',function(params){

    console.log(params);

    var index = params.dataIndex;

    for(var i = 0 ; i < seriesData.length ; i++){

           if(seriesData[i].value){

                seriesData[i] = seriesData[i].value;

            }

        if(index == i){

            seriesData[i] = {

                value : seriesData[i],

                itemStyle:{

                    normal:{

                        color : 'red'

                    }

                }

            }

        }

    }

    console.log(seriesData);

   

    option.series[0].data=seriesData

    myChart.setOption(option,true);

})

 

                   myChart.setOption(option);