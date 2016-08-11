'use strict';
var judy = document.getElementById('judy');
var maelle = document.getElementById('maelle');
var rachael = document.getElementById('rachael');
var picObjectArray = [];

function PicObject(picElement, gifpath, imgpath) {
  this.picElement = picElement;
  this.gifpath = gifpath;
  this.imgpath = imgpath;
  picObjectArray.push(this);
}

var JudyObject = new PicObject(judy, 'images/catgif.gif', 'images/judy1.jpg');
var MaelleObject = new PicObject(maelle, 'images/april.gif', 'images/maelle1.jpg');
var RachaelObject = new PicObject(rachael, 'images/rachaelgif.gif', 'images/rachael1.jpg');


function handleHover() {
  if (this === judy){
    this.src = JudyObject.gifpath;
  } else if (this === maelle){
    this.src = MaelleObject.gifpath;
  } else if (this === rachael){
    this.src = RachaelObject.gifpath;
  }
}

function handleMouseOut() {
  if (this === judy){
    this.src = JudyObject.imgpath;
  } else if (this === maelle){
    this.src = MaelleObject.imgpath;
  } else if (this === rachael){
    this.src = RachaelObject.imgpath;
  }
}

for (var i = 0; i < picObjectArray.length; i ++){
  picObjectArray[i].picElement.addEventListener('mouseover', handleHover);
  picObjectArray[i].picElement.addEventListener('mouseout', handleMouseOut);
}
