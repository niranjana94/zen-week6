import {Track,RootObject} from './modal'

class songs
{ 

  constructor(song:Track){
    if (song.hub && song.hub.actions && song.hub.actions[1].uri)
    {
    let container = document.getElementById('playlist');
    //container.innerHTML ="";
    let newdiv = document.createElement('div');
    newdiv.id ='containerdiv';   
  
    var divcard = document.createElement('div');
    divcard.classList.add('card', 'mb-3','border');
    divcard.id ='card';
    
    var divrow = document.createElement('div');
    divrow.classList.add('row', 'no-gutters');

    var divcol1 = document.createElement('div');
    divcol1.classList.add('col-md-3');

    var image = document.createElement('img');
     
    image.src = song.images.coverart;   
    image.setAttribute('class','img_thumbnail');
    image.setAttribute('style','width:100px;height:100px;object-fit: cover;') 
    
    divcol1.append(image);

    var divcol2 = document.createElement('div');
    divcol2.classList.add('col-md-3');

    var divbody = document.createElement('div');
    divbody.classList.add('card-body');

    var title = document.createElement('div');
    title.classList.add('titlecard');
    title.innerHTML = song.title;
    
    divbody.append(title);
    var audio = document.createElement('audio');
    audio.src = song.hub.actions[1].uri;
    audio.setAttribute('controls','controls');
    audio.id='audio';
  
    divbody.append(audio);

    divcol2.append(divbody);
    divrow.append(divcol1,divcol2);
    divcard.append(divrow);
    newdiv.append(divcard);
    container.append(newdiv);    

  }
}

}


/*let toggle = ()=>{
  //let card = document.getElementById('title');
  let song :Track;
  let audioplayer = <HTMLAudioElement>document.getElementById('audio');
      if(audioplayer.src === song.hub.actions[0].uri)
      {
        audioplayer.paused ? audioplayer.play :audioplayer.paused;
      }
      else
      {
        audioplayer.src = song.hub.actions[1].uri;
        audioplayer.play();
      }
}
document.getElementById('title').addEventListener('click',toggle);*/



document.getElementById("top").addEventListener("click",
async (e) => {
    e.preventDefault();
    let response = await fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key": "b94a5c72b8mshb92251adbb7ed00p160f8cjsn5b90031f47f0"
          
    }
  });
  let res = await response.json();
  console.log(res['tracks']);
  let container = document.getElementById('playlist');
  container.innerHTML ="";
  for (const song of res['tracks']) {
    new songs(song);
  }    
  });

  document.getElementById("recommendation").addEventListener("click",
async (e) => {
    e.preventDefault();
    let response = await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key": "b94a5c72b8mshb92251adbb7ed00p160f8cjsn5b90031f47f0"
          
    }
  });
  let res = await response.json();
  console.log(res['tracks']);
  let container = document.getElementById('playlist');
  container.innerHTML ="";
  for (const song of res['tracks']) {
    new songs(song);
  }
     
  });

  document.getElementById("search").addEventListener("click",
async (e) => {
    e.preventDefault();
    let search = (<HTMLInputElement>document.getElementById("name")).value;
    let response = await fetch(`https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${search}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key": "b94a5c72b8mshb92251adbb7ed00p160f8cjsn5b90031f47f0"
          
    }
  });
  let res = await response.json();
  console.log(res['tracks']['hits']);
  let container = document.getElementById('playlist');
  container.innerHTML ="";
  for (const song of res['tracks']['hits']) {
    new songs(song['track']);
  }
 
     
  });
  
  





  






