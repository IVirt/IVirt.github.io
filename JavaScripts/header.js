window.addEventListener("load", (event) => {
    //Make the image cycle
    var imgs = document.querySelectorAll('.left-slide .imageContainer img');
    console.log('IMGS', imgs)
    var currentImg = 0; // index of the first image 
    const interval = 3000; // duration(speed) of the slide

    function changeSlide(n) {
        for (var i = 0; i < imgs.length; i++) { // reset
            console.log(i, 'left: ', imgs[i])
            imgs[i].style.opacity = 0;

        }
    
        currentImg = (currentImg + 1) % imgs.length; // update the index number

        if (n != undefined) {
            clearInterval(timer);
            timer = setInterval(changeSlide, interval);
            currentImg = n;
        }

        imgs[currentImg].style.opacity = 1;
    }

    var timer = setInterval(changeSlide, interval);

    var imgsRight = document.querySelectorAll('.right-slide .imageContainer img');
    console.log('IMGS', imgsRight)
    var currentImgRight = 0; // index of the first image 

    function changeSlideRight(m) {
        for (var i = 0; i < imgsRight.length; i++) { // reset
            console.log(i, 'right: ', imgsRight[i])
            imgsRight[i].style.opacity = 0;

        }
    
        currentImgRight = (currentImgRight + 1) % imgsRight.length; // update the index number

        if (m != undefined) {
            clearInterval(timerRight);
            timerRight = setInterval(changeSlideRight, interval);
            currentImgRight = m;
        }

        imgsRight[currentImgRight].style.opacity = 1;
    }

    var timerRight = setInterval(changeSlideRight, interval);

});