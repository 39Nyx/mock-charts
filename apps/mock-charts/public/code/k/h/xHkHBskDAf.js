myChart.showLoading();
$.get('data/asset/data/product.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                data:[
  {
    "name": "武刚"
  },
  {
    "name": "张晓芹"
  },
  {
    "name": "廖映雪"
  },
  {
    "name": "胡秀梅"
  },
  {
    "name": "周子发"
  },
  {
    "name": "周贵云"
  },
  {
    "name": "余月华"
  },
  {
    "name": "冯云红"
  },
  {
    "name": "石襄生"
  },
  {
    "name": "雷捐献"
  },
  {
    "name": "陈泽民"
  },
  {
    "name": "余静玲"
  },
  {
    "name": "刘军舰"
  },
  {
    "name": "全秀清"
  },
  {
    "name": "刘大萍"
  },
  {
    "name": "曹学礼"
  },
  {
    "name": "徐国义"
  },
  {
    "name": "李艳飞"
  },
  {
    "name": "杨礼"
  },
  {
    "name": "付保森"
  },
  {
    "name": "徐海"
  },
  {
    "name": "张红"
  },
  {
    "name": "陈天权"
  },
  {
    "name": "韩凤英"
  },
  {
    "name": "雷声"
  },
  {
    "name": "张世富"
  },
  {
    "name": "王玲"
  },
  {
    "name": "徐凤香"
  },
  {
    "name": "李磙"
  },
  {
    "name": "刘欣洁"
  },
  {
    "name": "周朝霞"
  },
  {
    "name": "常毅"
  },
  {
    "name": "李海明"
  },
  {
    "name": "陈建敏"
  },
  {
    "name": "马德华"
  },
  {
    "name": "卢涛"
  },
  {
    "name": "曹芳"
  },
  {
    "name": "李秉坤"
  },
  {
    "name": "张凌"
  },
  {
    "name": "代超"
  },
  {
    "name": "刘铁华"
  },
  {
    "name": "郑素珍"
  },
  {
    "name": "胡秀娟"
  },
  {
    "name": "黄玲"
  },
  {
    "name": "王少兰"
  },
  {
    "name": "彭鲁滨"
  },
  {
    "name": "段功华"
  },
  {
    "name": "尤秋敏"
  },
  {
    "name": "李磊"
  },
  {
    "name": "徐斌"
  },
  {
    "name": "郭庆"
  },
  {
    "name": "彭兴珍"
  },
  {
    "name": "刘宏锦"
  },
  {
    "name": "赵文艳"
  },
  {
    "name": "钱定富"
  },
  {
    "name": "葛玲"
  },
  {
    "name": "徐革"
  },
  {
    "name": "李友新"
  },
  {
    "name": "王玉文"
  },
  {
    "name": "徐涛"
  },
  {
    "name": "王顺心"
  },
  {
    "name": "贺韬"
  },
  {
    "name": "龚淑萍"
  },
  {
    "name": "陈金龙"
  },
  {
    "name": "汤吉芳"
  },
  {
    "name": "李安军"
  },
  {
    "name": "袁林丽"
  },
  {
    "name": "杨毅英"
  },
  {
    "name": "宋国清"
  },
  {
    "name": "刘力"
  },
  {
    "name": "徐洪进"
  },
  {
    "name": "纪喜兵"
  },
  {
    "name": "姚明丽"
  },
  {
    "name": "尹丹"
  },
  {
    "name": "廉霞"
  },
  {
    "name": "潘静"
  },
  {
    "name": "程林"
  },
  {
    "name": "邓小红"
  },
  {
    "name": "张献刚"
  },
  {
    "name": "王一民"
  },
  {
    "name": "黄桂芳"
  },
  {
    "name": "乔莲"
  },
  {
    "name": "刘发千"
  },
  {
    "name": "黄守安"
  },
  {
    "name": "王宗群"
  },
  {
    "name": "张文峰"
  },
  {
    "name": "杨国英"
  },
  {
    "name": "樊梅"
  },
  {
    "name": "张银霞"
  },
  {
    "name": "H4200001680003841001001"
  },
  {
    "name": "H4200001680003888001001"
  },
  {
    "name": "H4200001680004515001009"
  },
  {
    "name": "H4200001680004353001011"
  },
  {
    "name": "H4200001285005647001001"
  },
  {
    "name": "XYZB-GCJS2017-336001001"
  },
  {
    "name": "JZZTBJS2017120401001-01"
  },
  {
    "name": "XYZB-GCJS2017-223001001"
  },
  {
    "name": "XYZB-GCJS2017-132001001"
  },
  {
    "name": "XYZB-GCJS2016-114001001"
  },
  {
    "name": "XYZB-GCJS2017-489001001"
  },
  {
    "name": "XYZB-GCJS2018-038001001"
  },
  {
    "name": "XYZB-GCJS2018-129001001"
  }
],
                links: [
  {
    "source": "武刚",
    "target": "H4200001680003841001001",
    "value": 0.004807692
  },
  {
    "source": "张晓芹",
    "target": "H4200001680003841001001",
    "value": 0.004807692
  },
  {
    "source": "廖映雪",
    "target": "H4200001680003841001001",
    "value": 0.004807692
  },
  {
    "source": "胡秀梅",
    "target": "H4200001680003841001001",
    "value": 0.004807692
  },
  {
    "source": "周子发",
    "target": "H4200001680003841001001",
    "value": 0.004807692
  },
  {
    "source": "周贵云",
    "target": "H4200001680003888001001",
    "value": 0.004807692
  },
  {
    "source": "余月华",
    "target": "H4200001680003888001001",
    "value": 0.004807692
  },
  {
    "source": "冯云红",
    "target": "H4200001680003888001001",
    "value": 0.004807692
  },
  {
    "source": "石襄生",
    "target": "H4200001680003888001001",
    "value": 0.004807692
  },
  {
    "source": "雷捐献",
    "target": "H4200001680003888001001",
    "value": 0.004807692
  },
  {
    "source": "陈泽民",
    "target": "H4200001680004515001009",
    "value": 0.004807692
  },
  {
    "source": "余静玲",
    "target": "H4200001680004515001009",
    "value": 0.004807692
  },
  {
    "source": "刘军舰",
    "target": "H4200001680004515001009",
    "value": 0.004807692
  },
  {
    "source": "全秀清",
    "target": "H4200001680004515001009",
    "value": 0.004807692
  },
  {
    "source": "刘大萍",
    "target": "H4200001680004515001009",
    "value": 0.004807692
  },
  {
    "source": "曹学礼",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "徐国义",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "李艳飞",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "杨礼",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "付保森",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "徐海",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "张红",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "徐海",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "曹学礼",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "徐国义",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "李艳飞",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "杨礼",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "付保森",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "张红",
    "target": "H4200001680004353001011",
    "value": 0.004807692
  },
  {
    "source": "陈天权",
    "target": "H4200001285005647001001",
    "value": 0.004807692
  },
  {
    "source": "韩凤英",
    "target": "H4200001285005647001001",
    "value": 0.004807692
  },
  {
    "source": "雷声",
    "target": "H4200001285005647001001",
    "value": 0.004807692
  },
  {
    "source": "张世富",
    "target": "H4200001285005647001001",
    "value": 0.004807692
  },
  {
    "source": "王玲",
    "target": "H4200001285005647001001",
    "value": 0.004807692
  },
  {
    "source": "徐凤香",
    "target": "XYZB-GCJS2017-336001001",
    "value": 0.004807692
  },
  {
    "source": "李磙",
    "target": "XYZB-GCJS2017-336001001",
    "value": 0.004807692
  },
  {
    "source": "刘欣洁",
    "target": "XYZB-GCJS2017-336001001",
    "value": 0.004807692
  },
  {
    "source": "周朝霞",
    "target": "XYZB-GCJS2017-336001001",
    "value": 0.004807692
  },
  {
    "source": "常毅",
    "target": "XYZB-GCJS2017-336001001",
    "value": 0.004807692
  },
  {
    "source": "李海明",
    "target": "XYZB-GCJS2017-336001001",
    "value": 0.004807692
  },
  {
    "source": "陈建敏",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "马德华",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "卢涛",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "曹芳",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "李秉坤",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "张凌",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "代超",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "刘铁华",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "郑素珍",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "胡秀娟",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "黄玲",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "王少兰",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "彭鲁滨",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "段功华",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "尤秋敏",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "李磊",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "徐斌",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "郭庆",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "彭兴珍",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "刘宏锦",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "赵文艳",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "钱定富",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "葛玲",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "徐革",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "李友新",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "王玉文",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "徐涛",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "王顺心",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "贺韬",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "龚淑萍",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "陈金龙",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "汤吉芳",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "李安军",
    "target": "JZZTBJS2017120401001-01",
    "value": 0.004807692
  },
  {
    "source": "袁林丽",
    "target": "XYZB-GCJS2017-223001001",
    "value": 0.004807692
  },
  {
    "source": "杨毅英",
    "target": "XYZB-GCJS2017-132001001",
    "value": 0.004807692
  },
  {
    "source": "武刚",
    "target": "XYZB-GCJS2016-114001001",
    "value": 0.004807692
  },
  {
    "source": "宋国清",
    "target": "XYZB-GCJS2017-223001001",
    "value": 0.004807692
  },
  {
    "source": "刘力",
    "target": "XYZB-GCJS2017-132001001",
    "value": 0.004807692
  },
  {
    "source": "廖映雪",
    "target": "XYZB-GCJS2016-114001001",
    "value": 0.004807692
  },
  {
    "source": "徐洪进",
    "target": "XYZB-GCJS2017-489001001",
    "value": 0.004807692
  },
  {
    "source": "纪喜兵",
    "target": "XYZB-GCJS2017-223001001",
    "value": 0.004807692
  },
  {
    "source": "姚明丽",
    "target": "XYZB-GCJS2017-132001001",
    "value": 0.004807692
  },
  {
    "source": "雷捐献",
    "target": "XYZB-GCJS2017-489001001",
    "value": 0.004807692
  },
  {
    "source": "周朝霞",
    "target": "XYZB-GCJS2017-489001001",
    "value": 0.004807692
  },
  {
    "source": "胡秀梅",
    "target": "XYZB-GCJS2016-114001001",
    "value": 0.004807692
  },
  {
    "source": "周子发",
    "target": "XYZB-GCJS2016-114001001",
    "value": 0.004807692
  },
  {
    "source": "尹丹",
    "target": "XYZB-GCJS2017-223001001",
    "value": 0.004807692
  },
  {
    "source": "张晓芹",
    "target": "XYZB-GCJS2016-114001001",
    "value": 0.004807692
  },
  {
    "source": "廉霞",
    "target": "XYZB-GCJS2017-132001001",
    "value": 0.004807692
  },
  {
    "source": "潘静",
    "target": "XYZB-GCJS2017-489001001",
    "value": 0.004807692
  },
  {
    "source": "程林",
    "target": "XYZB-GCJS2017-489001001",
    "value": 0.004807692
  },
  {
    "source": "邓小红",
    "target": "XYZB-GCJS2017-132001001",
    "value": 0.004807692
  },
  {
    "source": "张献刚",
    "target": "XYZB-GCJS2017-223001001",
    "value": 0.004807692
  },
  {
    "source": "王一民",
    "target": "XYZB-GCJS2018-038001001",
    "value": 0.004807692
  },
  {
    "source": "黄桂芳",
    "target": "XYZB-GCJS2018-038001001",
    "value": 0.004807692
  },
  {
    "source": "乔莲",
    "target": "XYZB-GCJS2018-129001001",
    "value": 0.004807692
  },
  {
    "source": "刘发千",
    "target": "XYZB-GCJS2018-129001001",
    "value": 0.004807692
  },
  {
    "source": "黄守安",
    "target": "XYZB-GCJS2018-129001001",
    "value": 0.004807692
  },
  {
    "source": "王宗群",
    "target": "XYZB-GCJS2018-129001001",
    "value": 0.004807692
  },
  {
    "source": "乔莲",
    "target": "XYZB-GCJS2018-038001001",
    "value": 0.004807692
  },
  {
    "source": "张文峰",
    "target": "XYZB-GCJS2018-038001001",
    "value": 0.004807692
  },
  {
    "source": "杨国英",
    "target": "XYZB-GCJS2018-038001001",
    "value": 0.004807692
  },
  {
    "source": "樊梅",
    "target": "XYZB-GCJS2018-129001001",
    "value": 0.004807692
  },
  {
    "source": "张银霞",
    "target": "XYZB-GCJS2018-129001001",
    "value": 0.004807692
  }
],
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#aaa',
                        fontSize:10
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ]
    });
});