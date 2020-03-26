
function illOn() {
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "ilKey .5s";
	ArtGalStyle.backgroundImage = "url('backOne.png')";

}

function anOn() {
	document.getElementById("ArtGal").style.animation = "anKey 2s";
}

function gdOn(){
	document.getElementById("ArtGal").style.backgroundImage = "url('backThree.png')";
}

function Off(lastPic){
	let ArtGalStyle = document.getElementById("ArtGal").style;
	document.getElementById("ArtGal").style.backgroundImage = "url('backBase.png')";
}