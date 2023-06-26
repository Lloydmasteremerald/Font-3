noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() {
  video = createCapture(VIDEO);
  video.size(550, 590);
  canvas = createCanvas(550, 500);
  canvas.position(1050, 100);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotposes)
}

function draw() {
  background("#00a2ff");
  textSize(difference);
  text('Naitik', 90, 300);
  document.getElementById("font_size").innerHTML = "The font size of the text will be = " + difference + "px";
  fill('#183896');
  stroke('#62ff00');
}


function modelLoaded() {
  console.log("PoseNet is Initialized!");
}
function gotposes(results) {
    if (results.length > 0) {
      console.log(results)
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX + "  noseY = " + noseY);
  
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = Math.floor(leftWristX - rightWristX);
      console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + " difference = " + difference);
    }
  }

