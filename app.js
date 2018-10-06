let container = document.querySelector('#container');


let rapbtn = document.querySelector('#rapbtn');
let goldbtn = document.querySelector('#goldbtn');

const playlist = data.filter(songs => {
    return songs.genre === 'Rap';
  })
  .map(songs => {
    return `
    <img class = "image" src = "${songs.image}"/>
     <div>Name:${songs.song}</div>
     <div>Artist:${songs.artist}</div>
    `;
  })
  .join('');

  const playlist2 = data.filter(songs=>{
    return songs.genre === 'Gold';
  })
  .map(songs=> {
    return `
    <img class = "image" src = "${songs.image}"/>
    <div>Name:${songs.song}</div>
    <div>Artist:${songs.artist}</div>
    `;
  })
  .join('');
  


rapbtn.addEventListener('click', function(){
  container.innerHTML = playlist;
});

goldbtn.addEventListener('click', function(){
  container.innerHTML = playlist2;
});

















// data.map(songs=> {
// let song = document.createElement("p");
// container.appendChild(song);
// document.getElementById("rapbtn").addEventListener("click",function(){
// song.innerHTML = songs.genre + ": " + songs.artist + "-" + songs.song
// })
// })

