option = {
   "title": {
      "text": "自定义的折柱混合--BarLine",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    "backgroundColor": "#1c2e40",
    "color": "green",
    "tooltip": {
      "trigger": "axis",
      "axisPointer": {
        "type": "cross",
        "crossStyle": {
          "color": "#384757"
        }
      }
    },
    "legend": {
      "data": [
        {
          "name": "待处理",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "已处理",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "完成率",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        }
      ],
      "top": "10%",
      "textStyle": {
        "color": "#fff"
      }
    },
    "xAxis": [
      {
        "type": "category",
        "data": [
          "1街",
          "2街",
          "3街",
          "4街",
          "5街",
          "6街"
        ],
        "axisPointer": {
          "type": "shadow"
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        }
      }
    ],
    "yAxis": [
      {
        "type": "value",
        "name": "不文明现象",
        "nameTextStyle": {
          "color": "#7d838b"
        },
        "min": 0,
        "max": 5,
        "interval": 1,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        }
      },
      {
        "type": "value",
        "name": "完成率",
         "min": 0,
        "max": 100,
        "show": true,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "yellow"
          }
        }
      }
    ],
    "grid": {
      "top": "20%"
    },
    "series": [
      {
        "name": "待处理",
        "type": "bar",
       "barWidth":10,
        "data": [
          4,
          4.6,
          0.4,
          3.6,
          4.8,
         2.4
        ],
        "barWidth": "auto",
        "itemStyle": {
          "normal": {
            "color":'red'
          }
        }
      },
      {
        "name": "已处理",
        "type": "bar",
         "yAxisIndex": 1,
        "data": [
           100,
          33,
          100,
          60,
          70,
         10
        ],
        "barWidth": "auto",
        "itemStyle": {
          "normal": {
            "color":'orange'
          }
        },
          "smooth": true,
        "barGap": "0"
      }
    ]
};

