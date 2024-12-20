var scaleData = [
    {
        name: '1',
        value: 1234,
    },
    {
        name: '2',
        value: 4700,
    },
    {
        name: '3',
        value: 1200,
    },
    {
        name: '3',
        value: 3687,
    },
    {
        name: '4',
        value: 3687,
    },
];
var placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
    },
};
var data = [];
var color = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)'];
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        data: scaleData[i].value,
        value: 20,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color: color[i],
            },
        },
    });
}
data.push({
    value: 50,
    name: '',
    itemStyle: placeHolderStyle,
});
var seriesObj = [
    {
        name: '',
        type: 'pie',
        
        radius: [140, 200],
        hoverAnimation: false,
        startAngle: 210,
        clockwise:true,
        label: {
                        normal: {
                            position: 'inner',
                            
                            align: 'center',
                            // rotate: -60,
                            textStyle: {
                                color: '#333',
                                fontWeight: 'bold',
                                fontSize: 12,
                                rotate: 30,
                            }
                        }
                    },
        
        data: data,
    },
];
option = {
    backgroundColor: '#fff',
    tooltip: {
        show: true,
    },
    legend: {
         itemWidth:40,
        //  itemHeight:20,
        icon:'path://M180,440Q300,400,460,440L540,340Q320,220,100,340Z',
        show: true,
    },
    toolbox: {
        show: false,
    },
    series: seriesObj,
    graphic: [
        {
            type: 'group',
            left: 'center',
            top: 'middle',
            children: [
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: '0',
                    style: {
                        fill: '#333',
                        text: ['别看了'],
                        font: '16px Microsoft YaHei',
                    },
                },
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: '32',
                    style: {
                        fill: 'red',
                        text: ['80%'],
                        font: '26px Microsoft YaHei',
                    },
                },
            ],
        },
    ],
};
