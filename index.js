var images =[
    'pic/1footwear4.jpg',
    'pic/0footwear4.jpg',
    'pic/down1.jpg',
    'pic/both1.jpg',
    'pic/top3.jpg'
    ];
    var rightBtn=document.getElementById('right');
    var leftBtn=document.getElementById('left');
    var i=0;
    var time = 5000;
    function setImage() {
    document.slide.src=images[i];
    }
    function slideImg() {
        if (i<images.length-1){
            i++;
        }
        else{
            i=0;
        }
        setImage()
        setTimeout('slideImg()', time)
    }
    window.onload=slideImg;
    rightBtn.addEventListener('click', function(){
        if (i<images.length-1){
            i++;
        }
        else{
            i=0;
        }
        setImage()
        
    })
    leftBtn.addEventListener('click', function(){
        if (i>0){
            i--;
        }
        else{
            i=images.length-1;
        }
        setImage()
        
    })



