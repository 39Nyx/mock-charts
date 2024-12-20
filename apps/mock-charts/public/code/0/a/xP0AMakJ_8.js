var formatUtil = echarts.format;

var dtlData = [{
    name: '一账通',
    value: 2474,
    children: [{
        name: 'JKOSS',
        value: 426
    }, {
        name: 'JKTOA',
        value: 73
    }, {
        name: 'JKTOALF_EBD',
        value: 12
    }, {
        name: 'JKTOALF_TOASER',
        value: 101
    }, {
        name: 'TOA',
        value: 1083
    }, {
        name: 'TOAMALL',
        value: 709
    }, {
        name: 'TOAWEB_CMS',
        value: 58
    }, {
        name: 'TOAFLLF_MAAM',
        value: 12
    }]
}, {
    name: '中小企业',
    value: 1053,
    children: [{
        name: 'SMELPCORE_CORE',
        value: 347
    }, {
        name: 'SMELPCORE_FINANCE',
        value: 230
    }, {
        name: 'SMELPCORE_SMELPMCHT',
        value: 14
    }, {
        name: 'SMELPCORE_SMELPWG',
        value: 28
    }, {
        name: 'SMELPCORE_WEB',
        value: 50
    }, {
        name: 'SMELPFATAEX',
        value: 14
    }, {
        name: 'SMELPRISK_RISK',
        value: 370
    }]
}, {
    name: '同业',
    value: 1635,
    children: [{
        name: 'FIC2',
        value: 1128
    }, {
        name: 'LSMMS',
        value: 194
    }, {
        name: 'MFICAW',
        value: 91
    }, {
        name: 'YZTTA',
        value: 222
    }]
}, {
    name: '开放平台',
    value: 9422,
    children: [{
        name: 'CDE',
        value: 259
    }, {
        name: 'CMPCC',
        value: 1161
    }, {
        name: 'PACCF1',
        value: 3564
    }, {
        name: 'PAEBD_PAEBD',
        value: 2231
    }, {
        name: 'QHZX',
        value: 384
    }, {
        name: 'PCDP_CDP',
        value: 205
    }, {
        name: 'PIMP_PIMP',
        value: 51
    }, {
        name: 'ZXAR',
        value: 94
    }, {
        name: 'ZXCD1',
        value: 918
    }, {
        name: 'ZXPD1',
        value: 555
    }]
}, {
    name: '贷款',
    value: 2156,
    children: [{
        name: 'MYUE',
        value: 56
    }, {
        name: 'P2PLM',
        value: 351
    }, {
        name: 'P2PPD',
        value: 1619
    }, {
        name: 'PDAP_PDAP',
        value: 112
    }, {
        name: 'PCACORE_QJJ',
        value: 16
    }, {
        name: 'MP2PPD',
        value: 2
    }]
}, {
    name: '银行一账通',
    value: 6576,
    children: [{
        name: 'FO007',
        value: 1078
    }, {
        name: 'FO008',
        value: 799
    }, {
        name: 'FO009',
        value: 483
    }, {
        name: 'FO023',
        value: 665
    }, {
        name: 'FO024',
        value: 644
    }, {
        name: 'FO025',
        value: 1040
    }, {
        name: 'FO027',
        value: 685
    }, {
        name: 'FCES01',
        value: 215
    }, {
        name: 'FPPG_MIP',
        value: 61
    }, {
        name: 'NMPMS_NMPMS',
        value: 32
    }, {
        name: 'FOGZ',
        value: 546
    }, {
        name: 'FO047',
        value: 328
    }]
}]

var color = [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#bda29a",
    "#ca8622",
    "#749f83",
    "#6e7074",
    "#546570",
    "#c4ccd3"
]

var bsLine = []
var bsLineV = {}
for (var key in dtlData) {
    bsLine.push(dtlData[key].name)
    bsLineV[dtlData[key].name] = dtlData[key].value
}
var sbsLineV = Object.keys(bsLineV).sort(function(a, b) {
    return -(bsLineV[a] - bsLineV[b])
});


// 层级样式
function getLevelOption1() {
    return [{
            color: color,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#777',
                    gapWidth: 2
                }
            }
        },
        {
            colorSaturation: [0.35, 0.6],
            //colorAlpha: [1, 0.5],
            upperLabel: {
                normal: {
                    color: '#fff',
                    show: true,
                    height: 30
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#555',
                    gapWidth: 1
                },
                emphasis: {
                    borderColor: '#ccc'
                }
            }
        }
    ];
}


function getLevelOption2() {
    return [{
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#fff',
                    gapWidth: 2
                }
            }
        },
        {
            color: [],
            //colorSaturation: [0.35, 0.6],
            //colorAlpha: [0.5, 1],
            //colorMappingBy: 'value',
            upperLabel: {
                normal: {
                    show: true,
                    height: 30
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#555',
                    gapWidth: 1
                },
                emphasis: {
                    borderColor: '#ccc'
                }
            }
        }
    ];
}

var series0 = {
    name: '数据库',
    type: 'treemap',
    itemStyle: {
        normal: {
            borderColor: '#fff'
        }
    },
    levels: getLevelOption1(),
    leafDepth: 2,
    data: dtlData
};

var series11 = {
    name: '数据库',
    type: 'treemap',
    itemStyle: {
        normal: {
            borderColor: '#fff'
        }
    },
    right: '50%',
    width: '48%',
    levels: getLevelOption1(),
    leafDepth: 2,
    data: dtlData
};

var series12 = {
    name: '数据库',
    type: 'treemap',
    itemStyle: {
        normal: {
            borderColor: '#fff'
        }
    },
    left: '55%',
    width: '40%',
    levels: getLevelOption2(),
    leafDepth: 2,
    data: [dtlData[0]]
};

option = {
    backgroundColor: '#fff',
    title: {
        text: '数据分布',
        left: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
            restore: {},
            dataView: {}
        }
    },
    tooltip: {
        formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
            }

            return [
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join(' - ')) + '</div>',
                'Table Count: ' + formatUtil.addCommas(value),
            ].join('');
        }
    },
    series: [series0]
};

myChart.setOption(option, true);

// 点击事件
myChart.on("click", function(param) {
    var selectedItem = param.name;
    //alert(selectedItem);
    for (var key in dtlData) {
        if (dtlData[key].name === selectedItem) {
            for (var ki in sbsLineV){
                if (sbsLineV[ki] === selectedItem){
                    bsColor = color[ki]
                }
            }
            series12.levels[1].color = [bsColor]
            series12.data = [dtlData[key]]
            option.series = [series11, series12]
            myChart.setOption(option, true);
        }
    }

    if (bsLine.indexOf(selectedItem) < 0) {
        option.series = [series0]
        myChart.setOption(option, true);
    }
});