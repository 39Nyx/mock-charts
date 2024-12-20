var dataAll = [
    [
        [1,10],
        [2,7],
        [3,5],
        [4,5],
        [5,3],
        [6,6],
        [7,10],
        [8,9],
        [9,4],
        [10,2],
        [11,5]
    ],
    [
        [1,9],
        [2,6],
        [3,4],
        [4,4],
        [5,2],
        [6,5],
        [7,9],
        [8,8],
        [9,3],
        [10,4],
        [11,8]
    ]
];



option = {
    title:[ {
        text: '水军跟踪进度',
        subtext:'我们是万能的水军',
        x: 'center',
        y: 0
    },
    {
        text: '竞品负面帖子跟进进度',
        x: '75%',
        y: '50%',
        textAlign: 'center'
    },
    {
        text: '竞品正面帖子跟进进度',
        x: '25%',
        y: '50%',
        textAlign: 'center'
    },
    {
        text: '本品负面言论跟进速度',
        x: '75%',
        y: '2%',
        textAlign: 'center'
    },
    {
        text: '本品正面言论跟进速度',
        x: '25%',
        y: '2%',
        textAlign: 'center'
    }
    ],
    grid: [
        {x: '7%', y: '7%', width: '38%', height: '38%'},
        {x2: '7%', y: '7%', width: '38%', height: '38%'},
        {x: '7%', y2: '7%', width: '38%', height: '38%'},
        {x2: '7%', y2: '7%', width: '38%', height: '38%'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {gridIndex: 1, min: 0, max: 15},
        {gridIndex: 2, min: 0, max: 15},
        {gridIndex: 3, min: 0, max: 15}
    ],
    yAxis: [
        {gridIndex: 0, min: 0, max: 15},
        {gridIndex: 1, min: 0, max: 15},
        {gridIndex: 2, min: 0, max: 15},
        {gridIndex: 3, min: 0, max: 15}
    ],
    series: [
        {
            name: 'I',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
            itemStyle:{
                normal:{
                    color:'#00DD00', 
                    lineStyle:{
                       color: '#00DD00' 
                    }
                }
                
            }
        },
        {
            name: 'I',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[1]
        },
        {
            name: 'I',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [[1,0],[2,0],[3,4],[4,0],[5,0],[6,0],[7,0],[8,1],[9,0],[10,0],[11,2]]
        },
        {
            name: 'II',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[0],
            itemStyle:{
                normal:{
                    color:'#00DD00', 
                    lineStyle:{
                       color: '#00DD00' 
                    }
                }
                
            }
        },
        {
            name: 'II',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1]
        },
        {
            name: 'I',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [[1,0],[2,0],[3,4],[4,0],[5,0],[6,0],[7,0],[8,1],[9,0],[10,0],[11,2]]
        },
        {
            name: 'III',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[0],
            itemStyle:{
                normal:{
                    color:'#00DD00', 
                    lineStyle:{
                       color: '#00DD00' 
                    }
                }
                
            }
        },
        {
            name: 'III',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[1]
        },
        {
            name: 'I',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: [[1,0],[2,0],[3,4],[4,0],[5,0],[6,0],[7,0],[8,1],[9,0],[10,0],[11,2]]
        },
        {
            name: 'IV',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[0],
            itemStyle:{
                normal:{
                    color:'#00DD00', 
                    lineStyle:{
                       color: '#00DD00' 
                    }
                }
                
            }
        },
        {
            name: 'IV',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[1]
        },
        {
            name: 'IV',
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: [[1,0],[2,0],[3,4],[4,0],[5,0],[6,0],[7,0],[8,1],[9,0],[10,0],[11,2]]
        }
    ]
};