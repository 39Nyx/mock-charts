var datazz = [
    [572, 15793, '辣妈萌宝团'],
    [566, 4763, '美丽心情SING'],
    [540, 628, '茉莉酒'],
    [539, 15528, '明小宣'],
    [536, 3327, 'Linda大琳'],
    [536, 10512, '男神必修课'],
    [535, 30365, '不哭得小屁孩'],
    [534, 101226, '豆包兔'],
    [530, 27646, '逗玩'],
    [529, 11081, '贝窝'],
    [528, 5544, '美妈控'],
    [528, 2166, '育儿小百科'],
    [526, 15886, '茉莉妈妈APP'],
    [526, 8126, '新手妈妈'],
    [526, 6348, '直爽'],
    [526, 10720, '暴走的买买兔'],
    [522, 6164, '爸妈堂育儿'],
    {
        value: [515, 27893, '父母世界'],
        itemStyle: {
            color: '#b83259'
        },
        label: {
            show: true,
            formatter: '父母世界',
            fontWeight: 'bold',
            color: '#b83259',
            position: 'top'
        }
    },
    [515, 731, '挑剔的大朋友'],
    [510, 8036, '高端潮流']
];
var datazj = [
    [389, 351, '假妈爱测评'],
    [387, 333, '妈妈的朋友圈'],
    [381, 772, '育儿者联盟'],
    [376, 328, '试试'],
    [353, 468, '肌萌研究所'],
    [351, 335, '母婴百科'],
    [351, 199, '神奇妈力奥']
];
var legendda = [{
        name: 'TOP20达人账号',
        value: [310, 110000],
        itemStyle: {
            color: '#192c5c'
        },label:{show:true,formatter:'TOP20达人账号',position:'right',fontWeight:'bold'}
    },
    {
        name: '自营账号',
        value: [310, 100000],
        itemStyle: {
            color: '#b83259'
        },label:{show:true,formatter:'自营账号',position:'right',fontWeight:'bold'}
    }
]; 
var wcrw=[
  [572, 757, '辣妈萌宝团'],
  [566, 330, '美丽心情SING'],
  [540, 9, '茉莉酒'],
  [539, 5, '明小宣'],
  [536, 2, 'Linda大琳'],
  [536, 16, '男神必修课'],
  [535, 1, '不哭得小屁孩'],
  [534, 150, '豆包兔'],
  [530, 91, '逗玩'],
  [529, 0, '贝窝'],
  [528, 0, '美妈控'],
  [528, 2, '育儿小百科'],
  [526, 28, '茉莉妈妈APP'],
  [526, 6, '新手妈妈'],
  [526, 16, '直爽'],
  [526, 83, '暴走的买买兔'],
  [522, 88, '爸妈堂育儿'],
  {value:[515, 148, '父母世界'],itemStyle: {
            color: '#b83259'
        },
        label: {
            show: true,
            formatter: '父母世界:148',
            fontWeight: 'bold',
            color: '#b83259',
            position: 'top'
        }},
  [515, 0, '挑剔的大朋友'],
  [510, 5, '高端潮流']
];
var fwpf=[
  [572, 4.33, '辣妈萌宝团'],
  [566, 4.53, '美丽心情SING'],
  [540, 4.6, '茉莉酒'],
  [539, 5, '明小宣'],
  [536, 3, 'Linda大琳'],
  [536, 4.13, '男神必修课'],
  [535, 5, '不哭得小屁孩'],
  [534, 4.54, '豆包兔'],
  [530, 4.38, '逗玩'],
  [529, 0, '贝窝'],
  [528, 0, '美妈控'],
  [528, 2.75, '育儿小百科'],
  [526, 4.17, '茉莉妈妈APP'],
  [526, 4.5, '新手妈妈'],
  [526, 4.5, '直爽'],
  [526, 4.28, '暴走的买买兔'],
  [522, 4.54, '爸妈堂育儿'],
  {value:[515, 4.37, '父母世界'],itemStyle: {
            color: '#b83259'
        },
        label: {
            show: true,
            formatter: '父母世界:4.37',
            fontWeight: 'bold',
            color: '#b83259',
            position: 'bottom'
        }},
  [515, 0, '挑剔的大朋友'],
  [510, 3.5, '高端潮流']
]
option = {
    title: {
        text: ''
    },
    grid: {
        x: '7%',
        y: '7%',
        width: '68%',
        height: '68%'
    },
    /*yAxis: [{

        name: '粉丝数',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        type: 'value',
        scale: true,
        offset: -260,
        axisLabel: {
            formatter: '{value} '
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    }],*/
    yAxis: {

        name: '任务完成数',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        type: 'value',
        scale: true,
        offset: -260,
        axisLabel: {
            formatter: '{value} '
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    },
    xAxis: {

        name: '综合能力',
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        min: 500,
        max: 580,
        offset: -180,
        axisLabel: {
            show: true,
            inside: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        }
    },
    series: [{

        type: 'scatter',
        data: wcrw,
        symbolSize: 11,
        itemStyle: {
            color: '#192c5c'
        },
        markLine: {
            show: true,
            lineStyle: {
                color: '	#59b832',
                type: 'solid'
            },
            data: [{
                    type: 'average',
                    name: '平均值',
                    valueIndex: 0
                },
                {
                    type: 'average',
                    name: '平均值',
                    valueIndex: 1
                }
            ]
        }
    }, /*{
        type: 'scatter',
        data: datazj,
        symbolSize: 11,
        itemStyle: {
            color: '#b83259'
        }
    }, {
        type: 'scatter',
        data: legendda,
        symbolSize: 11,
        
    }*/]
};