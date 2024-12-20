option = {
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [
        {
        type: 'bar',
        //  barWidth:20,
        z: 10,
            stack: "zs",
           itemStyle: {
                        color: {
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#b0b513',
                                    },
                                    {
                                        offset: .5,
                                        color: '#b0b513'
                                    },
                                    {
                                        offset: .5,
                                        color: '#bec81a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#dcdc3c'
                                    }
                            ],
                        },
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        type: 'bar',
        //  barWidth:20,
            stack: "zs",
        z: 10,
           itemStyle: {
                        color: {
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#b0b513',
                                    },
                                    {
                                        offset: .5,
                                        color: '#b0b513'
                                    },
                                    {
                                        offset: .5,
                                        color: '#bec81a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#dcdc3c'
                                    }
                            ],
                        },
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },
      {
            "name": "",
            "type": "pictorialBar",
            symbol: 'diamond',
            "symbolSize": [80, 20],
            "symbolOffset": [-0, 10],
            "z": 1,
               itemStyle: {
                        color: {
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#b0b513',
                                    },
                                    {
                                        offset: .5,
                                        color: '#b0b513'
                                    },
                                    {
                                        offset: .5,
                                        color: '#bec81a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#dcdc3c'
                                    }
                            ],
                        },
        },
            "data": [1, 1, 1, 1, 1, 1,1]
        },
              {
            "name": "",
            "type": "pictorialBar",
            symbol: 'diamond',
            symbolPosition: 'end',
            "symbolSize": [80, 20],
            "symbolOffset": [-0, -10],
            "z": 20,
             itemStyle:{ 
                        opacity: 1,
                         color:'#dcdc3c',
                     },
            "data": [220, 182, 191, 234, 290, 330, 310]
        },
          {
            "name": "",
            "type": "pictorialBar",
            symbol: 'diamond',
            symbolPosition: 'end',
            "symbolSize": [80, 20],
            "symbolOffset": [-0, -10],
            "z": 20,
             itemStyle:{ 
                        opacity: 1,
                         color:'#dcdc3c',
                     },
            "data": [440, 364, 382,468 , 580, 660, 620]
        },
    ]
};
