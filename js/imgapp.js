'use strict';
var judy = document.getElementById('judy');
var maelle = document.getElementById('maelle');
var rachael = document.getElementById('rachael');
var picObjectArray = []

function PicObject(picElement, gifpath, imgpath) {
  this.picElement = picElement;
  this.gifpath = gifpath;
  this.imgpath = imgpath;
  picObjectArray.push(this);
}

new PicObject(judy, 'images/catgif.gif', 'images/judy1.jpg');
new PicObject(maelle, 'images/april.gif', 'images/maelle1.jpg');
new PicObject(rachael, 'images/rachaelgif.gif', 'images/rachael1.jpg');



function handleHover() {
  for (var i = 0; i < picObjectArray.length; i++)
    picObjectArray[i].picElement.src = picObjectArray[i].gifpath;
}

function handleMouseOut() {
  for (var i = 0; i < picObjectArray.length; i++)
    picObjectArray[i].picElement.src = picObjectArray[i].imgpath;
}

judy.addEventListener('mouseover', handleHover);
judy.addEventListener('mouseout', handleMouseOut);
maelle.addEventListener('mouseover', handleHover);
maelle.addEventListener('mouseout', handleMouseOut);
rachael.addEventListener('mouseover', handleHover);
rachael.addEventListener('mouseout', handleMouseOut);
