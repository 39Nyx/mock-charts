var uploadedDataURL = "/asset/get/s/data-1531274313426-r1-U41QXX.gexf";

myChart.showLoading();
$.get(uploadedDataURL, function(xml) {
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    console.log(graph)
    var categories = [{
        'name': 'drug'
    }, {
        'name': '白血病(需继续化疗者)'
    }, {
        'name': '癫痫持续状态'
    }, {
        'name': '多发性肌炎/皮肌炎'
    }, {
        'name': '恶性肿瘤的辅助治疗'
    }, {
        'name': '肺气肿'
    }, {
        'name': '肝硬化'
    }, {
        'name': '干燥综合症'
    }, {
        'name': '高血压、糖尿病'
    }, {
        'name': '高血压病'
    }, {
        'name': '股骨头坏死'
    }, {
        'name': '冠心病支架植入术后的抗凝治疗（临时）'
    }, {
        'name': '冠状动脉粥样硬化性心脏病'
    }, {
        'name': '甲状腺功能亢进'
    }, {
        'name': '精神分裂症'
    }, {
        'name': '溃疡性结肠炎'
    }, {
        'name': '颅脑肿瘤'
    }, {
        'name': '慢性肾功能衰竭'
    }, {
        'name': '慢性肾小球肾炎'
    }, {
        'name': '脑出血'
    }, {
        'name': '脑梗塞'
    }, {
        'name': '尿毒症患者的透析治疗'
    }, {
        'name': '器官移植患者的抗排异治疗'
    }, {
        'name': '器质性精神障碍病'
    }, {
        'name': '肾病综合征'
    }, {
        'name': '糖尿病'
    }, {
        'name': '心肌病'
    }, {
        'name': '心境障碍'
    }, {
        'name': '心力衰竭'
    }, {
        'name': '心脏瓣膜疾病'
    }, {
        'name': '心脏瓣膜置换术后抗凝治疗'
    }, {
        'name': '银屑病'
    }, {
        'name': '再生障碍性贫血'
    }, {
        'name': '支气管扩张'
    }, {
        'name': '重症肌无力'
    }, {
        'name': '椎管狭窄'
    }];
    graph.nodes.forEach(function(node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize *= 10;
        node.label = {
            normal: {
                show: true
            }
        };
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: '疾病药物关系图',
            subtext: '疾病与药物之间的关系',
            top: 'top',
            left: 'center'
        },
        tooltip: {},
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: categories,
            roam: true,
            focusNodeAdjacency: true,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            }
        }]
    };
    console.log(option)
    myChart.setOption(option);
}, 'xml');