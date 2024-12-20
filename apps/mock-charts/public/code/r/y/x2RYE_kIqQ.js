var data = {
    title: '**省',
    dataSex: [{
        name: '男性',
        value: '100.00',
    }, {
        name: '女性',
        value: '200.00',
    }],
    dataAge: [{
        name: '0-10岁',
        value: '200.00'
    }, {
        name: '11-25岁',
        value: '200.00'
    }, {
        name: '26-40岁',
        value: '200.00'
    }, {
        name: '41-55岁',
        value: '200.00'
    }, {
        name: '56-70岁',
        value: '200.00'
    }, {
        name: '70岁以上',
        value: '200.00'
    }],
    dataHostype: [{
        name: '药店',
        value: '200.00'
    }, {
        name: '一级医院',
        value: '200.00'
    }, {
        name: '二级医院',
        value: '200.00'
    }, {
        name: '三级医院',
        value: '200.00'
    }],
    dataDis: [{
        name: '呼吸系统疾病',
        value: '200.00'
    }, {
        name: '循环系统疾病',
        value: '200.00'
    }, {
        name: '内分泌系统疾病',
        value: '200.00'
    }, {
        name: '消化系统疾病',
        value: '200.00'
    }, {
        name: '泌尿系统疾病',
        value: '200.00'
    }, {
        name: '其他',
        value: '200.00'
    }],
};
option = {
    backgroundColor: '#05274C',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    title: [{
            top: '20%',
            text: data.title + '用药年龄分布',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '8%',
        },
        {
            top: '20%',
            text: data.title + '用药性别分布',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '32%',
        }, {
            top: '20%',
            text: data.title + '用药量机构类别占比',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '54%',
        },
        {
            top: '20%',
            text: '药品治疗疾病类型占比',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '81%',
        }
    ],
    // tooltip: {
    // },
    // legend: {
    //     orient: 'vertical',
    //     show: false,
    //     x: 'left',
    //     data: [data.sex[0], data.sex[1], data.sex[2]]
    // },
    series: [
        //吉林省用药年龄分布 begin

        {
            //name: '用药性别数量',
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['14%', '60%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -80],
                    height: 70,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }

                    }
                }
            },
            data: data.dataAge,
        },
        //end
        //吉林省用药性别分布 begin
        {
            //name: '用药性别数量',
            color: ['#76FBC0', '#2AC9FD'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['38%', '60%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -90],
                    height: 70,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }

                    }
                }
            },
            data: data.dataSex,
        },
        //end
        //吉林省用药量机构类别占比 begin
        {
            //name: '用药性别数量',
            color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['62%', '60%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -80],
                    height: 75,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }

                    }
                }
            },
            data: data.dataHostype,
        },
        //end
        //药品治疗疾病类型占比 begin
        {
            //name: '用药性别数量',
            color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
            type: 'pie',
            radius: ['16%', '23%'],
            center: ['88%', '60%'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -80],
                    height: 75,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }

                    }
                }
            },
            data: data.dataDis,
        },
        //end

    ]
};