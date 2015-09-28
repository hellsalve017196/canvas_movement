// mouse down
var mousedown = function (e) {

    // telling browser we are handling this event
    e.preventDefault();
    e.stopPropagation();

    // getting current position
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    for(i=0;i<rects.length;i++)
    {
        r = rects[i];

        // if the mouse pointer is down on the particular object
        if( mx > r.x && mx < (r.x + r.width) && my > r.y && my < (r.y+ r.height) )
        {
            dragging = true;
            r.isdraggable = true;
        }
    }


    // saving the current position of the target object
    startX = mx;
    startY = my;
};

// mouse move
var mousemove = function (e) {
    // telling browser we are handling this event
    e.preventDefault();
    e.stopPropagation();

    if(dragging)
    {
        // getting current position
        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);

        // getting the difference
        var dx = mx - startX;
        var dy = my - startY;

        for(i=0;i<rects.length;i++)
        {
            r = rects[i];

            if(r.isdraggable)
            {
                r.x += dx;
                r.y += dy;
            }
        }

        draw();

        // saving current coordinates
        startX = mx;
        startY = my;
    }

};

// mouse up
var mouseup = function (e) {
    // telling browser we are handling this event
    e.preventDefault();
    e.stopPropagation();

    //disabling objects
    for(i=0;i<rects.length;i++)
    {
        r = rects[i];

        if(r.isdraggable)
        {
            r.isdraggable = false;
        }
    }

    dragging = false;
};

canvas.addEventListener('mousedown',mousedown);
canvas.addEventListener('mousemove',mousemove);
canvas.addEventListener('mouseup',mouseup);