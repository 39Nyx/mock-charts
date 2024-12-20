var uploadedDataURL = "/asset/get/s/data-1499754499697-Hy3-leGHZ.js";

var geoCoordMap = {
    "天润崇义天星项目":[114.31,25.69],
    "新疆新能源三塘湖一二期项目":[93.44,42.78],
    "新疆新能源托里一二项目":[83.59,45.92],
    "新疆烟墩第五中节能项目":[93.43,42.78],
    "新疆达坂城苇湖梁电厂项目":[87.68,43.77],
    "天润大丰润龙项目":[120.13,33.38],
    "天润赤峰和平营子项目":[118.87,42.28],
    "嘉泽国博二期项目":[106.54,38.91],
    "河南中电投方城二期":[112.53	,33.01],
    "天润攀枝花四期项目":[101.718637,26.582347],
    "云南中华电力寻甸项目":[103.79,25.51],
    "山东栖霞庄子润丰风电场":[121.39,37.52],
    "天润六安金寨朝阳山项目":[120.1,30.86],
    "辽宁朝阳喀左中三家大唐风电场":[120.42,41.58],
    "辽宁朝大唐双庙风电场":[120.43,41.57],
    "山西偏岭联成风电场":[112.53,37.87],
    "宁夏嘉泽项目":[106.39,39.04],
    "天润安阳滑县项目":[114.35,36.1],
    "天润章丘九顶山项目":[117,36.65],
    "天润夏津二期项目":[116.29,37.45],
    "国华山东河口二期项目":[118.14,37.7],
    "中电投江苏大丰项目":[120.45,33.19],
    "中电投山东栖霞润丰项目":[120.83,37.28],
    "天润石堂山一二期项目":[112.12,39.53],
    "天润平鲁大山台一二三期项目":[112.11,39.53],
    "天润山西右玉一二期项目":[112.33,40.18],
    "天润平陆云盖寺项目":[111.2,34.12	],
    "天润夏县一二期项目":[111.22,35.12],
    "天润绛县一二期项目":[111.58	,35.48],
    "天润辽宁义县留龙沟项目":[121.22,41.55],
    "天润攀枝花一二期项目":[101.71,26.6],
    "天润内蒙古达茂三四期项目":[110,40.58],
    "中广核山西右玉项目":[112.43,40.18],
    "天润巧家洗羊塘项目":[102.92,26.9],
    "天润全南天排山项目":[114.53,24.76],
    "天润下水头项目":[112.21,39.53],
    "天润卧龙洞项目":[112.11,39.43],
    "天润哈密烟墩7C项目":[93.44,42.78],
    "天润石堂山三期项目":[112.11,39.53],
    "天润卧龙洞二期项目":[112.11,39.443],
    "天润江西抚州东乡项目":[116.34,28],
    "天润夏县三期项目":[111.32,35.12],
    "中广核广东罗定项目":[111.56,22.77],
    "国电投湖南沅江麓湖项目":[112.36,28.83],
    "新疆新能源哈密烟墩7A项目":[92.44,42.98]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#404a59',
    title: {
        text: '能巢在中国',
        subtext: 'data from Goldwind',
        sublink: 'http://www.goldwind.com',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['2017年下半年计划','2016年全年已完成','2017年上半年完成'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 30,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: '2017年下半年计划',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "天润崇义天星项目", value: 2},
                {name: "新疆新能源三塘湖一二期项目", value: 10.05},
                {name: "新疆新能源托里一二项目", value: 10},
                {name: "新疆达坂城苇湖梁电厂项目", value: 30},
                {name: "新疆烟墩第五中节能项目", value: 20},
                {name: "天润大丰润龙项目", value: 4.93},
                {name: "天润夏津二期项目", value: 10},
                {name: "天润章丘九顶山项目", value: 5},
                {name: "天润安阳滑县项目", value: 8},
                {name: "宁夏嘉泽项目", value: 10},
                {name: "山西偏岭联成风电场", value: 4.95},
                {name: "辽宁朝大唐双庙风电场", value: 4.95},
                {name: "辽宁朝阳喀左中三家大唐风电场", value: 3},
                {name: "天润六安金寨朝阳山项目", value: 5},
                {name: "山东栖霞庄子润丰风电场", value: 4.95},
                {name: "云南中华电力寻甸项目", value: 4.95},
                {name: "天润攀枝花四期项目", value: 5},
                {name: "河南中电投方城二期", value: 3},  
                {name: "嘉泽国博二期项目", value: 4.95},
                {name: "天润赤峰和平营子项目", value: 4.95}
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '2016年全年已完成',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "国华山东河口二期项目", value: 5},
                {name: "中电投江苏大丰项目", value: 13.5},
                {name: "中电投山东栖霞润丰项目", value: 5},
                {name: "天润石堂山一二期项目", value: 20},
                {name: "天润平鲁大山台一二三期项目", value: 10},
                {name: "天润山西右玉一二期项目", value: 10},
                {name: "天润平陆云盖寺项目", value: 5},
                {name: "天润夏县一二期项目", value: 10},  
                {name: "天润绛县一二期项目", value: 10},
                {name: "天润辽宁义县留龙沟项目", value: 5},
                {name: "中广核山西右玉项目", value: 5},
                {name: "天润内蒙古达茂三四期项目", value: 10},
                {name: "天润攀枝花一二期项目", value: 10}
            ]),
            symbolSize: 11,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '2017年上半年完成',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "天润巧家洗羊塘项目", value: 5},
                {name: "天润全南天排山项目", value: 10},
                {name: "天润下水头项目", value: 10},
                {name: "天润卧龙洞项目", value: 15},
                {name: "天润哈密烟墩7C项目", value: 20},
                {name: "天润石堂山三期项目", value: 10},
                {name: "天润卧龙洞二期项目", value: 5},
                {name: "天润江西抚州东乡项目", value: 5},
                {name: "天润夏县三期项目", value: 10},
                {name: "中广核广东罗定项目", value: 5},
                {name: "国电投湖南沅江麓湖项目", value: 5},
                {name: "新疆新能源哈密烟墩7A项目", value: 20},

            ]),
            symbolSize: 11,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
        
    ]
}
