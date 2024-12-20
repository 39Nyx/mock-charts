option = {
    "title": {
        "text": "",
        "subtext": ""
    },
    "tooltip": {
        "trigger": "axis",
        formatter: function(params, ticket, callback) {
                console.log(params)
                var res = params[0].name;
                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ':' + params[i].value;
                }
                setTimeout(function() {
                    
                    callback(ticket, res);
                }, 100)
                return 'loading';
            }
           


    },
    "legend": {
        "data": ["No. of Employees", "Female Employees", "Female Emplyees (Management Team)", "Youth Employees (up to 24 years)"]
    },
    "toolbox": {
        "show": true,
        "feature": {
            "mark": {
                "show": false
            },
            "dataView": {
                "show": false,
                "readOnly": false
            },
            "magicType": {
                "show": true,
                "type": ["line", "bar"],
                "title": "Change"
            },
            "restore": {
                "show": true,
                "title": "Refresh"
            },
            "saveAsImage": {
                "show": true,
                "title": "Save As Image"
            }
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "boundaryGap": false,
        "data": [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        "axisLabel": {
            "show": true
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "show": true
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],
    "grid": {
        "show": false,
        "containLabel": false,
        "left": "0",
        "right": "0",
        "top": "50",
        "bottom": "0"
    },
    "color": ["#7ea0c4", "#b7ada5", "#d2b887", "#af5d56"],
    "series": [{
        "name": "No. of Employees",
        "type": "bar",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "areaStyle": {
                    "opacity": 0.9,
                    "color": "#0000"
                },
                "lineStyle": {
                    "opacity": 0
                }
            }
        },
        "data": [20, 40, 57, 73, 82, 79, 81, 78, 95, 88],
        "showSymbol": false
    }, {
        "name": "Female Employees",
        "type": "bar",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "areaStyle": {
                    "opacity": 0.9,
                    "color": "#F25F5C"
                },
                "lineStyle": {
                    "opacity": 0
                }
            }
        },
        "data": [9, 15, 20, 28, 32, 37, 33, 32, 41, 39],
        "showSymbol": false
    }, {
        "name": "Female Emplyees (Management Team)",
        "type": "bar",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "areaStyle": {
                    "opacity": 0.9,
                    "color": "#FFE066"
                },
                "lineStyle": {
                    "opacity": 0
                }
            }
        },
        "data": [1, 0, 1, 5, 5, 5, 4, 6, 5, 6],
        "showSymbol": false
    }, {
        "name": "Youth Employees (up to 24 years)",
        "type": "bar",
        "smooth": true,
        "itemStyle": {
            "normal": {
                "areaStyle": {
                    "opacity": 0.9,
                    "color": "#4267b2"
                },
                "lineStyle": {
                    "opacity": 0
                }
            }
        },
        "data": [2, 4, 5, 5, 7, 4, 8, 9, 6, 4],
        "showSymbol": false
    }]
};