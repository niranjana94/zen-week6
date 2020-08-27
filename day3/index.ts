let videos = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',

    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',

    'http://techslides.com/demos/sample-videos/small.mp4',

    'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',     
    
    
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'];

class tv{
    constructor(){

    }
}


let powerstate;
powerstate = 0;
let power = () =>{
    powerstate = !powerstate;
    
    if(powerstate)
      { 
          let video = document.getElementById('video');  
          var source = document.createElement('source');
          source.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4";
          source.type = "video/mp4"  ;
          video.append(source); 
    }
    else
    {
        //container.innerHTML ="";
    }
}

type valchange = 1 |-1;

let volume = (change:valchange) => {
    let player = <HTMLVideoElement>document.getElementById("video");
    if (change === -1) {
      if (player.volume !== 0.0) {
        player.volume -= 0.1;
      }
    } else 
        player.volume += 0.1;
      
    
  };

let index = 0;
let channel = (change:valchange) => {
    let player = <HTMLVideoElement>document.getElementById("video");
    if(change === -1)
    {
        if(player.src === videos[0])
        {
            player.src = videos[4];
        }
    }
    else
    {
        if(player.src !== videos[4])
        {
            player.src = videos[index+1];
            //player.play();
            index = index+1;
        }
        else
        player.src = videos[0];
        
    }
    
}

let togglePlay = () => {
    let player = <HTMLVideoElement>document.getElementById("video");
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  };