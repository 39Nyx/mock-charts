option = {
    title: {
        text: 'tween.js'
    },
    tooltip: {},
    xAxis: {
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        // min:10
    },
    series: []
};

myChart.setOption(option);

function animate(time) {
    let id = requestAnimationFrame(animate);
    var result = TWEEN.update(time);
    if (!result) cancelAnimationFrame(id);
}
requestAnimationFrame(animate);

var coords = {
    x: 0
};
var data = [];
var num = 0;
var color = 'red';

const effects = [
    'Back',
    'Bounce',
    'Circular',
    'Cubic',
    'Elastic',
    'Exponential',
    'Linear',
    'Quadratic',
    'Quartic',
    'Quintic',
    'Sinusoidal'
];

var series = [];

var twns = [];
for (let i = 0; i < effects.length; i++) {
    var twn = new TWEEN.Tween(coords).to({
            x: 100
        }, 3000).easing(TWEEN.Easing[effects[i]].Out || TWEEN.Easing[effects[i]].None) // Use an easing function to make the animation smooth.
        .onUpdate(function(e) {
            data.push([num, coords.x]);
            num++;
            myChart.setOption({
                series:series.concat( [{
                    type: 'line',
                    data: data,
                    itemStyle: {
                        color: color
                    },
                    areaStyle: {}
                }])
            });
        }).
    onComplete(function() {
        coords.x = 0;
        series.push({
            type: 'line',
            data: data,
            itemStyle: {
                color: color
            },
            areaStyle: {}
        });
        data=[];
        color = randomColor();

    });
    twns.push(twn);
}

for (let i = 0; i < twns.length - 1; i++) {
    twns[i].chain(twns[i + 1]);
}
twns[0].start();