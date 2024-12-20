var date = [];
date.push([2017, 6, 1].join('/'));
date.push([2017, 6, 2].join('/'));
date.push([2017, 6, 3].join('/'));
date.push([2017, 6, 4].join('/'));
date.push([2017, 6, 5].join('/'));
date.push([2017, 6, 6].join('/'));
date.push([2017, 6, 7].join('/'));
date.push([2017, 6, 8].join('/'));
date.push([2017, 6, 9].join('/'));
option = {
    legend: {
        data:['线一','线二']
    },
    xAxis : [
        {
            boundaryGap : false,
            data :date
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    dataZoom:[{
        id: 'dataZoomX',
        type: 'slider',
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
    }
    ],
    series : [
        {
            name:'线一',
            type:'line',
            data:[
                ['2017/6/1',1],
                ['2017/6/3',3],
                ['2017/6/5',5],
                ['2017/6/7',4],
                ['2017/6/9',4],
            ]
        },
        {
            name:'线二',
            type:'line',
            data:[
                ['2017/6/2',3], 
                ['2017/6/4',1],
                ['2017/6/6',6],
                ['2017/6/8',3],
            ]
        }
    ]
};
