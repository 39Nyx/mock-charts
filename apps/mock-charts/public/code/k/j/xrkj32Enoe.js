        var option = {
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['PM2.5','AQI','PM10']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['201312','201401','201402','201403','201404','201405','201406','201407','201408','201409','201410','201411','201412','201501','201502','201503','201504','201505','201506','201507','201508','201509','201510','201511','201512','201601','201602','201603','201604','201605','201606','201607','201608','201609','201610','201611','201612']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {   name:'PM2.5',
                        type:'line',
                        stack: '总量',
                        data:[72,92,130,83,55,54,48,75,56,59,103,86,58,89,83,78,63,50,52,52,40,41,60,100,134,60,46,84,58,49,53,59,40,47,70,90,105]
                    },
                    {
                        name:'AQI',
                        type:'line',
                        stack: '总量',
                        data:[99,118,158,115,90,85,74,105,83,84,132,116,87,118,116,112,93,80,81,77,64,63,87,121,167,88,68,116,90,80,80,84,62,69,102,121,133]
                    },
                    {
                        name:'PM10',
                        type:'line',
                        stack: '总量',
                        data:[82,104,115,121,89,82,27,33,31,35,68,102,81,70,65,122,83,73,45,44,47,43,54,39,68,50,45,93,87,66,42,33,37,40,49,94,66]
                    },
                  
                ]
            };