
function illOn() {
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "ilKey 1s";
	ArtGalStyle.backgroundImage ="url('backOne.png')"

}

function anOn() {
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "anKey 1s";
	ArtGalStyle.backgroundImage ="url('backTwo.png')";
	ArtGalStyle.color = "black";

}

function gdOn(){
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "gdKey 1s";
	ArtGalStyle.backgroundImage ="url('backThree.png')"
}

function Off(lastPic){
	let ArtGalStyle = document.getElementById("ArtGal").style;
	ArtGalStyle.animation = "offKey 1s";
	document.getElementById("ArtGal").style.backgroundImage = "url('backBase.png')";
	ArtGalStyle.color = "white";
}