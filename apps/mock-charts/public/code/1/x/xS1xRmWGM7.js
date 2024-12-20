
var data = {
    name: "Echarts",
    children: [
        {
          name: "Javascript",
          value: 1,
          collapsed: true,
          children: [
            {name: "GIS", value: 1},
            {name: "AngularJs", value: 1},
            {name: "Ember", value: 1},
            {name: "Vue", value: 1},
            {name: "React", value: 1},
            {name: "ReactNative", value: 1},
            {name: "微信小程序", value: 1}
          ]
        },
        {name: "Python", value: 1},
        {name: "R", value: 1},
        {name: "Julia", value: 1},
        {name: "PureScript", value: 1},
        {name: "IOS", value: 1},
        {name: ".NET", value: 1},
        {name: "PHP", value: 1},
        {name: "Nodejs", value: 1},
        {name: "util", value: 1}
      ]
    };

option = {
    backgroundColor: '#fff',
    series: [
        {
            type: 'tree',
            data: [data],
            label: {
                position: 'left',
                verticalAlign: 'right',
                fontSize: 12
            },

            animationDurationUpdate: 500

        }
    ]
}