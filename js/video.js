var video = document.querySelector("#player1");

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	var vid = document.getElementById("player1");

	function setPlaySpeed() {
		vid.playbackRate *= 0.95;
		console.log("New speed is " + vid.playbackRate)
	}
	setPlaySpeed();
});

document.querySelector("#faster").addEventListener("click", function () {
	var vid = document.getElementById("player1");

	function setPlaySpeed() {
		vid.playbackRate *= 1.05;
		console.log("New speed is " + vid.playbackRate)
	}
	setPlaySpeed();
});

document.querySelector("#skip").addEventListener("click", function () {
	var vid = document.getElementById("player1");

	function skipAhead() {
		curTime = vid.currentTime

		if (curTime + 15 >= vid.duration) {
			vid.currentTime = 0
		} else {
			vid.currentTime += 15
		}
		console.log("New location " + vid.currentTime)
	}


	skipAhead();
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	var vidVolume = document.querySelector("#volume")
	vidVolume.innerHTML = video.volume * 100 + "%";

});


document.querySelector("#mute").addEventListener("click", function () {
	var vid = document.getElementById("player1");
	function mute() {
		vid.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	function unMute() {
		vid.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}

	function checkMute() {
		if (vid.muted === true) {
			unMute();
		} else {
			mute();
		}
	}
	checkMute();
});

document.querySelector("#slider").addEventListener("click", function () {
	var vid = document.getElementById("player1");

	function volumeSlider() {
		volumeslider = document.getElementById("slider")
		vid.volume = volumeslider.value / 100;
		var vidVolume = document.querySelector("#volume")
		console.log(vid.volume)
		vidVolume.innerHTML = video.volume * 100 + "%";
	}
	volumeSlider();
});

document.querySelector("#vintage").addEventListener("click", function () {
	var elements = document.getElementsByClassName("video")
	elements[0].className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function () {
	var elements = document.getElementsByClassName("oldSchool")
	elements[0].className = "video";
});

