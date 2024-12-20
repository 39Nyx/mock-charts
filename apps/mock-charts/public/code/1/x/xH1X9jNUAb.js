option = {
    backgroundColor: '#091323',
    color: ['#38b4ee'],
    legend: {
        x : 'center',
        y : 'bottom',
        textStyle:{
            color: 'white'
        },
        data:['movie','good','watch','go see','really','horror','want','like','box office','review']
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
    title: {
        text: 'Hot features Trends',
        subtext: 'From Oct13 to Oct22',
        textStyle: {
            color: 'white'
        }
    },
    tooltip: {
        trigger: 'axis'
    },


    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#dededf'
            }
        },
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#23303f'],
                type: 'solid'
            }
        },
        data: ['Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 20', 'Oct 21', 'Oct 22']
    },
    yAxis: {
        min: 0,
        max: 0.35,
        interval: 0.05,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            //    onZero:false
        },
        axisLabel: {
            textStyle: {
                color: '#dededf'
            }
        },
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#23303f'],
                type: 'solid'
            }
        }
    },
    series: [{
        name: 'movie',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#b62b6e"],
        data: ['0.235920879916','0.27794862266','0.23000835816','0.228395065591','0.226110139203','0.279359113503','0.287955029435','0.268144283418','0.276048320524','0.306603966583'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'good',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#9628c6"],
        data: ['0.12872325886','0.280496058648','0.220770761154','0.182431981944','0.14682566098','0.221730200278','0.162395143437','0.210949979838','0.228080277694','0.27332883104'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'watch',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#abb8af"],
        data: ['0.190235378161','0.203205556265','0.152766601473','0.142134775934','0.175255639829','0.205711244306','0.248737061199','0.216278563582','0.250286166925','0.259924482834'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'go see',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#98c807"],
        data: ['0.243218062254','0.195827653723','0.147533427595','0.122240345116','0.161028531738','0.14512112338','0.145246636463','0.151851499118','0.152068983523','0.124735515184'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'really',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#b1a24a"],
        data: ['0.111881315538','0.145038385368','0.108673264875','0.102661964803','0.0936241997912','0.11358182762','0.0987924608078','0.133185891987','0.143545556163','0.128891962551'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'horror',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#edd812"],
        data: ['0.0752788004637','0.0869200601188','0.119193565771','0.146894356937','0.114099376783','0.0775010829752','0.0857608669224','0.10293577229','0.104832132928','0.0894065335759'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'want',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#ef9421"],
        data: ['0.11268860356','0.10564833024','0.0767842218322','0.0675485439772','0.0962880520782','0.0918092128112','0.131406343772','0.110076083521','0.109427340501','0.0975026466274'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'like',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#d13814"],
        data: ['0.0899829564916','0.0988599102144','0.0858105915121','0.0989435875405','0.0737008676042','0.108224472123','0.106449756497','0.114997535222','0.0831837485977','0.126863259049'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'box office',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["#30660f"],
        data: ['0.0234176908062','0.0229327416218','0.16086146957','0.224377930104','0.138944937028','0.0542770521703','0.0338760810839','0.0196295919533','0.0153074684394','0.0275943706925'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    },
    {
        name: 'review',
        type: 'line',
        smooth: true,
        symbolSize: 12,
        color:["00d2f3"],
        data: ['0.114246853554','0.0766673817581','0.0621363853316','0.0831084909387','0.0752001315272','0.0789526456091','0.118113214256','0.141104558616','0.0822486384493','0.0714470659808'],
        label: {
            normal: {
                show: false,
                position: 'top' //值显示
            }
        }
    }
    ]
};