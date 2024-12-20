option = {
  series: {
        type: 'sankey',
        layout:'none',
        layoutIterations: 200,
        data: [
          {
            name: 'a',
            itemStyle: {
              color: 'rgb(70, 235, 255)'
            }
          },
          {
            name: 'b',
            itemStyle: {
              color: 'rgb(0, 255, 255)'
            }
          },
          {
            name: 'b1',
            itemStyle: {
              color: 'rgb(42, 245, 148)'
            }
          },
          {
            name: 'b2',
            itemStyle: {
              color: 'rgb(42, 245, 148)'
            }
          },
          {
            name: 'c',
            itemStyle: {
              color: 'rgb(0, 255, 255)'
            }
          },
          {
            name: 'c1',
            itemStyle: {
              color: 'rgb(253, 230, 52)'
            }
          },
          {
            name: 'c2',
            itemStyle: {
              color: 'rgb(253, 230, 52)'
            }
          }
        ],
        links: [
          {
            source: 'a',
            target: 'b',
            value: 10
          },
          {
            source: 'a',
            target: 'c',
            value: 10
          },
          {
            source: 'b',
            target: 'b1',
            value: 7
          },
          {
            source: 'b',
            target: 'b2',
            value: 3
          },
          {
            source: 'c',
            target: 'c1',
            value: 8
          },
          {
            source: 'c',
            target: 'c2',
            value: 2
          },
        ]
    }
}