//Songelement
const songElement = document.getElementById("songElement");

// playBtn and Pause Btn
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

// voulme Up,Down,Slider
const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn");
const volumeSlider = document.getElementById("volumeSlider");

//duration Slider
const durationSlider = document.getElementById("durationSlider");

//skipPlus and skipMinus
const skipPlusBtn = document.getElementById("skipPlusBtn");
const skipMinusBtn = document.getElementById("skipMinusBtn");

//current Playtime
const currentPlayingTime = document.getElementById("currentPlayingTime");
const volumePercentage = document.getElementById("volumePercentage");

//playlist element

const songsDropDown = document.getElementById("songs");
const addToPlaylistBtn = document.getElementById("addToPlaylist");
const playlistSongs = document.getElementById("playlistSongs")
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const playlist = [];

let currentSongIndex = 0;

nextBtn.onclick = () =>
{
    currentSongIndex++;
    songElement.src = "./sounds/" + playlist[currentSongIndex];
    songElement.play();
}

previousBtn.onclick = () =>
{
    currentSongIndex--;
    songElement.src = "./sounds/" + playlist[currentSongIndex];
    songElement.play();
}

playBtn.onclick = () =>
{
    if(playlist.length>0)
    {
        songElement.src = "./sounds/" + playlist[currentSongIndex];
        songElement.play();
    }
}

window.onload = () =>
{
    durationSlider.max = songElement.duration;
};

durationSlider.onchange = (event) =>
{
    const sliderDuration = event.target.value;
    songElement.currentTime = sliderDuration;
}

volumeSlider.onchange = (event) =>
{
    const sliderVolumePercentage = event.target.value;
    songElement.volume = sliderVolumePercentage/100;
    volumePercentage.innerText = `${sliderVolumePercentage} %`;
}



pauseBtn.onclick = () =>
{
    songElement.pause();
}

// skipPlusBtn.onclick = () =>
// {
//     const currentSecond = parseInt(songElement.currentTime);
//     const totalSecond = parseInt(songElement.duration);

//     if(currentSecond<totalSecond)
//     {
//         songElement.currentTime = currentSecond + 5; 
//     }
// }

// skipMinusBtn.onclick = () =>
// {
//     const second = parseInt(songElement.currentTime);
//     if(second>0)
//     {
//         songElement.currentTime = second - 1;   
//     } 
// }

// volumeUpBtn.onclick = () =>
// {
//     let realVolumePercentage = parseInt(songElement.volume * 100);
//     const modifiedVolumePercentage = realVolumePercentage + 5;
//     if(modifiedVolumePercentage<100)
//     {
//         songElement.volume = ((modifiedVolumePercentage)/100);
//     }
//     volumePercentage.innerText = `${modifiedVolumePercentage} %`;
// }

// volumeDownBtn.onclick = () =>
// {
//     let realVolumePercentage = parseInt(songElement.volume * 100);
//     const modifiedVolumePercentage = realVolumePercentage -5;
//     if(modifiedVolumePercentage>=5)
//     {
//         songElement.volume = ((modifiedVolumePercentage)/100);
//     }    
//     volumePercentage.innerText = `${modifiedVolumePercentage} %`;
// }


songElement.addEventListener("timeupdate",()=>
{
    const second = parseInt(songElement.currentTime);

    const displayMinute = parseInt(second / 60);
    const displaySecond  = parseInt(second % 60);


    currentPlayingTime.innerText = ` ${displayMinute} min : ${displaySecond} sec `;
    durationSlider.value = songElement.currentTime;
})

addToPlaylistBtn.onclick = ()=>
{
    const selectedSong = songsDropDown.value;
    playlist.push(selectedSong);
    playlistSongs.innerHTML = "";
    for (let index =0; index < playlist.length; index++) {
        const song = playlist[index];
        playlistSongs.innerHTML = playlistSongs.innerHTML + `<li>${song}</li>`;
    }
}
