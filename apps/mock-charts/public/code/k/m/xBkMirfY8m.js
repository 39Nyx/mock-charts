
var data = [];
var dataCount = 10;
var startTime = +new Date();
var categories = [''];
var types = [
    {name: 'JS Heap', color: '#7b9ce1'},
    {name: 'Documents', color: '#bd6d6c'},
   
];


console.log(data)
function renderItem(params, api) {
    console.log(api.value(0))
    console.log(api.value(1))
    console.log(api.value(2))
    console.log(api.value(3))
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = 30;

    return {
        type: 'rect',
        shape: echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        }),
        style: api.style()
    };
}


option = {
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
        }
    },
    title: {
        text: 'Profile',
        left: 'center'
    },

    grid: {
        height:300
    },
    xAxis: {
        
        data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
       
    },
    yAxis: {
        data: categories
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            normal: {
                opacity: 0.8
            }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: [{
            name: "JS Heap",
            value: [
                0,
                6,
                14,
                2
               
            ],
            itemStyle:{
                color:"#9560e4"
            }
          
        },{
            name: "Documents",
            value: [
                0,
                15,
                23,
                30
               
            ],
             itemStyle:{
                color:"#59cb74",
                borderType:"dotted"
            }
          
        }]
    }]
};