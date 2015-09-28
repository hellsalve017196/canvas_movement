var canvas = document.getElementById("canvas");
var  context = canvas.getContext("2d");

// getting height and width of the canvas
var HEIGHT = canvas.height;
var WIDTH = canvas.width;

// offset coordinates
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;

// for dragging object
var dragging = false;
var startX,startY;

//object
var rects = [];

rects.push(
    {
        x:75-15,
        y:50-15,
        height:30,
        width:30,
        isdraggable:false,
        fill:'green'
    },
    {
        x:75-25,
        y:50-25,
        height:30,
        width:30,
        isdraggable:false,
        fill:'gray'
    },
    {
        x:75-35,
        y:50-35,
        height:30,
        width:30,
        isdraggable:false,
        fill:'red'
    },
    {
        x:75-45,
        y:50-45,
        height:30,
        width:30,
        isdraggable:false,
        fill:'blue'
    },
    {
        x:75-55,
        y:50-55,
        height:30,
        width:30,
        isdraggable:false,
        fill:'pink'
    }
);

var rectangle = function(x,y,width,height) {
    context.beginPath();

    context.rect(x,y,width,height);

    context.closePath();

    context.fill();
}


var clear = function () {
    canvas.height = canvas.height;
    canvas.width = canvas.width;
};

var draw = function () {
    clear();

    context.fillStyle = "gold";

    rectangle(0,0,WIDTH,HEIGHT);

    for(i=0;i<rects.length;i++)
    {
        r = rects[i];

        context.fillStyle = r.fill;
        rectangle(r.x, r.y, r.width, r.height);
    }

};

//draw the objects
draw();
