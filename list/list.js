const janjiAudio = new Audio("Dragon Ball Z Arabic Opening Sub.mp3");
const cartoonAudio = new Audio("Music.mp3");
const forceAudio = new Audio("Alan Walker - Force [Privated NCS Release].mp3");
const squeakyAudio = new Audio(
  "Born Dirty - Squeaky (Official Full Stream).mp3"
);
const hopeAudio = new Audio("./sound/hope.mp3");

// selecting elements
const prevBtn = document.querySelector(".previous");
const playBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".next");
const songName = document.querySelector(".song-name");
const playPauseIcon = document.querySelector("#play-pause-icon");

const songs = [
  { ele: janjiAudio, audioName: "دراغون بول" },
  { ele: cartoonAudio, audioName: "Cartoon by NCS" },
  { ele: forceAudio, audioName: "Force by NCS" },
  { ele: squeakyAudio, audioName: "Squeaky Sound" },
  { ele: hopeAudio, audioName: "Hope by NCS" },
];

for (const song of songs) {
  song.ele.addEventListener("ended", () => {
    updateSong("next");
    playPauseSong();
  });
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener("click", () => {
  playPauseSong();
});
let o = document.querySelector("son");
let y = document.getElementById("addPlaylist");
y.addEventListener("click", () => {
  playPauseSong();
});

nextBtn.addEventListener("click", () => {
  updateSong("next");
  playPauseSong();
});

prevBtn.addEventListener("click", () => {
  updateSong("prev");
  playPauseSong();
});

const updateSong = (action) => {
  currentSong.pause();
  currentSong.currentTime = 0;

  if (action === "next") {
    current++;
    if (current > songs.length - 1) current = 0;
  }
  if (action === "prev") {
    current--;
    if (current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
};

const playPauseSong = () => {
  if (currentSong.paused) {
    currentSong.play();
    playPauseIcon.className = "ph-bold ph-pause";
  } else {
    currentSong.pause();
    playPauseIcon.className = "ph-bold ph-play";
  }
};

function addTask() {
  var task = document.createElement("li");
  var taskcontents =
    '<ul id=new></ul> <button class="delete">delete</button> <button class="AddSong"><a href="songs.html">ajouter</a></button>';
  var x = document.getElementById("task").value;
  task.innerHTML = x + taskcontents;
  localStorage.setItem("playl", task.textContent);

  let k = document.getElementById("list");
  k.append(task);
  k.insertBefore(task, list.children[list.children.length - 2]);
  var removeCartItemButtons = document.getElementsByClassName("delete");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var addSongToPlaylist = document.getElementsByClassName("AddSong");
  for (var i = 0; i < addSongToPlaylist.length; i++) {
    var u = addSongToPlaylist[i];
    u.addEventListener("click", addPlalistPage());
  }
}
let add = document.getElementById("btn");
add.addEventListener("click", addTask);

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}
function addPlalistPage(event) {
  var buttonClicked = event.target;
  var name = buttonClicked.parentElement.textContent;
  localStorage.setItem("name", name);
}

function newplaylist() {
  var sourceElement = document.getElementById("new");
  var destinationElement = document.getElementById("playlistname");
  var texteACopier = sourceElement.textContent;
  destinationElement.textContent = texteACopier;
}
