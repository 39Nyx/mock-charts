option = {
    backgroundColor:"#041c3e",
    tooltip: {
        trigger: "item"
    },
    series: [{
            name: "",
            type: "gauge",
            radius:"75%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 60,
            axisTick: {show: false },
            splitLine: {length: 100*38/75-1+"%", lineStyle: {width: 2, color: "#041c3e" } },
            axisLabel: {show: false },
            pointer: {show: false },
            axisLine: {lineStyle: {opacity: 0 } },
            detail: {show: false },
            data: [{value: 0, name: ""} ]
        },
        {
            name: "",
            type: "pie",
            radius: ["38%","75%"],
            z: 0,
            zlevel: 0,
            label: {normal: {show: true, position: "outside"} },
            hoverAnimation:false,
            itemStyle:{
                emphasis:{
                    opacity:.7
                }
            },
            data: [
                {value: 30, name: "燃气", itemStyle: {normal: {color: "#d93551"} } },
                {value: 30, name: "风电", itemStyle: {normal: {color: "#12c4e7"} } },
                {value: 30, name: "生物质", itemStyle: {normal: {color: "#f9a90f"} } },
                {value: 30, name: "光伏", itemStyle: {normal: {color: "#ccfc15"} } },
                {value: 30, name: "水电", itemStyle: {normal: {color: "#0ef40d"} } }
            ]
        },
        {
            name: "",
            type: "pie",
            radius: ["38%","75%"],
            silent: true,
            z: 0,
            zlevel: 0,
            label: {normal: {show: false, position: "center"} },
            data: [
                {value: 1, name: "", itemStyle: {normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.7,
                        colorStops: [
                            {offset: 0, color: 'transparent'},
                            {offset: 0.379999, color: 'transparent'},
                            {offset: 0.38, color: 'rgba(255,255,255,0.1)'},
                            {offset: 0.55, color: 'rgba(255,255,255,0.5)'},
                            {offset: 0.699999, color: 'rgba(255,255,255,0.1)'},
                            {offset: 0.7, color: 'transparent'},
                            {offset: 1, color: 'transparent'}
                        ],
                        globalCoord: false // 缺省为 false
                    }
                } } }
            ]
        }
    ]
};