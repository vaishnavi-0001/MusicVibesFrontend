console.log("Welcome to music")
let songIndex = 0;
let audioElement =document.getElementById("audioElement");
let masterPlay = document.getElementById("masterPlay");
let MyProgressBar = document.getElementById("MyProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
    
    {SongName: "Night_changes", filepath: "C:/vaishnavi/project/web development/Night_changes.mp3", coverpath: "Untitled.jpeg" },
    {SongName: "love me like you do", filepath: "C:/vaishnavi/project/web development/love_me.mp3", coverpath: "love.jpeg" },
    {SongName: "Rataan lambiyaan", filepath: "C:/vaishnavi/project/web development/Rat.mp3", coverpath: "rt_1.jpg" },
    {SongName: "Ranjha", filepath: "C:/vaishnavi/project/web development/Ranjha.mp3", coverpath: "ranj.jpeg" },
    {SongName: "Tum prem ho", filepath: "C:/vaishnavi/project/web development/Tum1.mp3", coverpath: "tum.jpeg" },
    {SongName: "Hasi", filepath: "C:/vaishnavi/project/web development/Hasi.mp3", coverpath: "hasi.jpeg" },
];

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].SongName;
});


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else  {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
       
        songIndex = parseInt(e.target.id) -1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlayclassList.remove('fa-play-circle');
        masterPlayclassList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = 'songs/${songIndex}.mp3';
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlayclassList.remove('fa-play-circle');
    masterPlayclassList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = 'songs/${songIndex}.mp3';
    masterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlayclassList.remove('fa-play-circle');
    masterPlayclassList.add('fa-pause-circle');
})