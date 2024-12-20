
var data3_src = [900, 500, 350, 750, 500];
var data3_1 = [{
        value: data3_src[0],
        itemStyle: {
            normal: {
                color: "#da8504"
            }
        }
    },
    {
        value: data3_src[1],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[2],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[3],
        itemStyle: {
            normal: {
                color: "#cac7cb"
            }
        }
    },
    {
        value: data3_src[4],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    }
];
var data3_2 = [{
        value: data3_src[0],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[1],
        itemStyle: {
            normal: {
                color: "#309992"
            }
        }
    },
    {
        value: data3_src[2],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[3],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[4],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    }
];
var data3_3 = [{
        value: data3_src[0],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[1],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[2],
        itemStyle: {
            normal: {
                color: "#4275b3"
            }
        }
    },
    {
        value: data3_src[3],
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0)"
            }
        }
    },
    {
        value: data3_src[4],
        itemStyle: {
            normal: {
                color: "#e3ab47"
            }
        }
    }
];

var a = 0;
for (var i = 0; i < data3_1.length; i++) {
    a += data3_1[i].value;
}
data3_1.push({
    value: a,
    itemStyle: {
        normal: {
            color: "rgba(0,0,0,0)"
        }
    }
});
data3_2.push({
    value: a,
    itemStyle: {
        normal: {
            color: "rgba(0,0,0,0)"
        }
    }
});
data3_3.push({
    value: a,
    itemStyle: {
        normal: {
            color: "rgba(0,0,0,0)"
        }
    }
});

option = {
    series: [{
            type: "pie",
            radius: "60%",
            startAngle: -180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: "outside",
                    formatter: "{c}",
                    fontSize: 16
                }
            },
            data: data3_1
        },
        {
            type: "pie",
            radius: "70%",
            startAngle: -180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: "outside",
                    formatter: "{c}",
                    fontSize: 16
                }
            },
            data: data3_2
        },
        {
            type: "pie",
            radius: "65%",
            startAngle: -180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: "outside",
                    formatter: "{c}",
                    fontSize: 16
                }
            },
            data: data3_3
        },
    ]
}