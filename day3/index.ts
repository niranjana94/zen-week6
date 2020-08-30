let videos = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',

  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',

  'http://techslides.com/demos/sample-videos/small.mp4',

  'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',


  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'];

class tv {
  constructor() {

  }
}

let powerstate;
powerstate = 0;

document.getElementById('power').addEventListener('click', () => {
  powerstate = !powerstate;
  let container = document.getElementById('tv_container');
  if (powerstate) {
    let video = document.createElement('video');
    //video.setAttribute('style','width="580"; height="320";');
    video.id = "video";
    var source = document.createElement('source');
    source.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";
    source.type = "video/mp4";
    video.append(source);
    container.append(video);
    let player = <HTMLVideoElement>document.getElementById("video");
    player.load();
    player.play();

  }
  else {
    container.innerHTML = "";
  }

});

document.getElementById('reducevolume').addEventListener('click', () => {
  let player = <HTMLVideoElement>document.getElementById("video");

  if (player.volume !== 0.0) {
    player.volume -= 0.1;
  }

});

document.getElementById('increasevolume').addEventListener('click', () => {
  let player = <HTMLVideoElement>document.getElementById("video");
  player.volume += 0.1;

});

let index = 0;
document.getElementById('channelup').addEventListener('click', () => {
  let player = <HTMLVideoElement>document.getElementById("video");
  if (player.src !== videos[4]) {
    player.src = videos[index + 1];
    player.play();
    index = index + 1;
  }
  else
    player.src = videos[0];
    player.play();

});

document.getElementById('channeldown').addEventListener('click', () => {
  let player = <HTMLVideoElement>document.getElementById("video");
  if (player.src === videos[0]) {
    player.src = videos[4];
    player.play();
  }

});

document.getElementById('play').addEventListener('click', () => {
  let player = <HTMLVideoElement>document.getElementById("video");
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
});

