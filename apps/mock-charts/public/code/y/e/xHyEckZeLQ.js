var data = [
   ['2018-01-01',224],
['2018-01-02',166],
['2018-01-03',59],
['2018-01-04',60],
['2018-01-05',102],
['2018-01-06',159],
['2018-01-07',176],
['2018-01-08',57],
['2018-01-09',52],
['2018-01-10',53],
['2018-01-11',59],
['2018-01-12',108],
['2018-01-13',168],
['2018-01-14',210],
['2018-01-15',312],
['2018-01-16',334],
['2018-01-17',376],
['2018-01-18',406],
['2018-01-19',159],
['2018-01-20',155],
['2018-01-21',273],
['2018-01-22',202],
['2018-01-23',92],
['2018-01-24',112],
['2018-01-25',77],
['2018-01-26',83],
['2018-01-27',114],
['2018-01-28',224],
['2018-01-29',62],
['2018-01-30',64],
['2018-01-31',70],
]
option = {
    title: {
        top: 30,
        left: 'center',
        text: '2018年一月份AQI',
        textStyle: {
                fontSize:25
            }
    },
    tooltip : {},
    visualMap: {
        pieces: [{
                min: 0,
                max: 50,
                label:'优',
                color: 'green'
            }, {
                min: 50,
                max: 100,
                label:'良',
                //color: '#f2d643'
                color: 'rgb(239,220,49)'
            }, {
                min: 100,
                max: 150,
                label:'轻',
                color: '#ffb248'
            }, {
                min: 150,
                max: 200,
                label:'中',
                color: '#eb8146'
            }, {
                min: 200,
                max: 300,
               label:'重',
                color: '#d95850'
            }, {
                min: 300,
                label:'严重',
                color: '#893448'
            }],
            left: 'left',
            top: 'bottom',
            textStyle: {
                color: '#000'
            },
       
        //min: 0,
        //max: 450,
        //type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 100,
        textStyle: {
            color: '#000',
            fontSize:16
        }
    },
    calendar: {
        top: 160,
        left: 180,
        right: 180,
        cellSize: ['auto', 70],
        range: '2018-01',
        orient: 'vertical',
        itemStyle: {
            normal: {borderWidth: 0.8}
        },
         dayLabel: {
            show:false,//不显示星期
            //top:'bottom',
           // firstDay: 1,
            //nameMap: 'cn',
            //textStyle: {
            //color: '#000',
            //fontSize:10,
            
        //}
    
        },
        yearLabel: {show: false}
    },
    series: {
         label: {
            normal: {
                show:true,
               formatter: function (params) {
                    return + (params.value[0][8]+params.value[0][8,9]);
               
         }
        },
             formatter:"data[0]"
         },
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: data,
    }
};