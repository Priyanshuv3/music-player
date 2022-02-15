var songs=[
{
    id:1,
    imagesrc:"./images/get read to fight.png",
    audiosrc:"./songs/06 Get Ready To Fight - Baaghi (Benny Dayal) 190Kbps.mp3",
    title:"Get Ready To Fight - Benny Dayal",
},
{
    id:2,
    imagesrc:"./images/challa mai lad jana.jpg",
    audiosrc:"./songs/Challa.mp3",
    title:"Challa (Main Lad Jaana)  ",
},
{
    id:3,
    imagesrc:"./images/kar har maidaan fatah.jfif",
    audiosrc:"./songs/Kar Har Maidaan Fateh (Sanju) 128 Kbps.mp3",
    title:"Kar Har Maidaan Fateh - Shreya Ghoshal, Sukhwinder Singh",
},
{
    id:4,
    imagesrc:"./images/sultaan.jpg",
    audiosrc:"./songs/Sultan - Title Song - Salman Khan Version.mp3",
    title:"khoon mai tere mitti (sultan) -  Vishal-Shekhar",
},
{
    id:5,
    imagesrc:"./images/brothers anthem.jpg",
    audiosrc:"./songs/Brothers Anthem - Brothers 320 Kbps.mp3",
    title:"Brothers Anthem - Vishal Dadlani",
},
{
    id:6,
    imagesrc:"./images/chak lein de.jpg",
    audiosrc:"./songs/Chak Lein De.mp3",
    title:"Chak Lein De - Kailash Kher",
},
{
    id:7,
    imagesrc:"./images/pinjraa.jfif",
    audiosrc:"./songs/Pinjraa - Gurnazar.mp3",
    title:"Pinjraa - Gurnazar Chattha",
},
{
    id:8,
    imagesrc:"./images/bhag milkha.jfif",
    audiosrc:"./songs/Zinda.mp3",
    title:"Zinda - Siddharth Mahadevan",
},
{
    id:9,
    imagesrc:"./images/dangal.jpg",
    audiosrc:"./songs/Dangal.mp3",
    title:" Dangal  - Daler Mehndi",
},
{
    id:10,
    imagesrc:"./images/Nidarr.jpg",
    audiosrc:"./songs/Nidarr Dino James.mp3",
    title:" Nidarr - Dino James",
},
{
    id:11,
    imagesrc:"./images/beliver imagine dragons.jpg",
    audiosrc:"./songs/Believer Mp3 Imagine Dragons.mp3",
    title:" Believer - Imagine Dragons",
},
{
    id:12,
    imagesrc:"./images/thunder.jfif",
    audiosrc:"./songs/Thunder.mp3",
    title:"Thunder - Gabry Ponte",
},

]
function audio_player(songid)
{
    var song=songs.find(function(song,id){ return song.id===songid});
    document.getElementById("Thumbnail").src=song.imagesrc;
    document.getElementById("audio2").src=song.audiosrc;
    document.getElementById("title2").innerText=song.title;
}