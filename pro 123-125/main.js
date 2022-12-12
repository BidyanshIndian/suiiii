function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(700, 150);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotResult);
}

function draw() {
    background('#666');
}

function modelloaded() {
    console.log("modelloaded");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
    }
}