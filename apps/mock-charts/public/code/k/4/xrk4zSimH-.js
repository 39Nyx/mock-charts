option = {
};

setTimeout(function () {
    
    var line0 = [];
    var line1 = [];
    
    for (var i = 0; i < 20; i++) {
        line0.push([i * 80, Math.random() * 500]);
        line1.push([i * 80, Math.random() * 500]);
    }
    
    var zr = myChart.getZr();
    var ctx = zr.painter.getLayer(0).ctx;


    drawArea(
        ctx, 
        {
            points: line0,
            y: 600,
            fill: '#FCBFC9',
            stroke: 'red'
        },
        {
            points: line1,
            y: 0,
            fill: '#C3BAFD',
            stroke: 'blue'
        }
    );

    drawArea(
        ctx, 
        {
            points: line1,
            y: 600,
            fill: '#C3BAFD',
            stroke: 'blue'
        },
        {
            points: line0,
            y: 0,
            fill: '#FCBFC9',
            stroke: 'red'
        }
    );
    
    buildPath(ctx, line0);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'red';
    ctx.stroke();    

    buildPath(ctx, line1);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'blue';
    ctx.stroke();    
        
})

function drawArea(ctx, lineOpt, clipLineOpt) {

    ctx.save();
    
    buildArea(ctx, clipLineOpt.points, clipLineOpt.y);
    ctx.closePath();
    // ctx.stroke();
    ctx.clip();
    
    buildArea(ctx, lineOpt.points, lineOpt.y);

    ctx.fillStyle = lineOpt.fill;
    ctx.fill();
    
    ctx.restore();
    
}

function buildPath(ctx, line) {
    ctx.beginPath();
    ctx.moveTo(line[0][0], line[0][1]);
    for (var i = 1; i < line.length; i++) {
        ctx.lineTo(line[i][0], line[i][1]);    
    }
}

function buildArea(ctx, line, y) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (var i = 0; i < line.length; i++) {
        ctx.lineTo(line[i][0], line[i][1]);    
    }
    ctx.lineTo(line[line.length - 1][0], y);
    ctx.closePath();
}