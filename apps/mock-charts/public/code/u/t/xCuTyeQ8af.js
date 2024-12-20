const seriesData = [
    { value: 1048, name: 'A' },
    { value: 735, name: 'B' },
    { value: 580, name: 'C' },
    { value: 484, name: 'D' },
    { value: 300, name: 'E' },
    { value: 300, name: '缺口' },
];
option = {
    title: {
        text: '有缺口的饼图/扇环',
        left: 'center',
        top: '10%',
    },
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', 'rgba(0,0,0,0)'] /* 将最后一个缺口的颜色设为透明 */,
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: function (params) {
            if (params.dataIndex === seriesData.length - 1) return '';
            return (
                `<div style="display: flex; align-items: center; gap: 5px; line-height: 1rem">` +
                `<div style="width: 10px; height: 10px; border-radius: 10px; background-color:` +
                params.color +
                `; fontSize: 20px"></div>` +
                `${params.name}：${params.value}
      </div>`
            );
        },
    },
    legend: {
        show: false /* 必须关闭 */,
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            // radius: ['30%', '50%'], /* 扇环 */
            radius: '50%' /* 饼图 */,
            data: seriesData,
            label: {
                show: true,
                formatter: function (params) {
                    if (params.dataIndex === seriesData.length - 1) return '';
                    return `${params.name}：${params.value}`;
                },
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 2,
            },
        },
    ],
};
