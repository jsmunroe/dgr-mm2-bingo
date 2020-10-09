function randomize() {
    var cellImages = $('.cell-image').toArray();

    for (var i = 0; i< cellImages.length; i++) {
        var o = Math.floor(Math.random() * cellImages.length);
        
        var swap = cellImages[i].src;
        cellImages[i].src = cellImages[o].src;
        cellImages[o].src = swap;
    }
}

randomize();
