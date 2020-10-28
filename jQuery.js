function next(){
    var curentSlide = $Selector.slider.find('li.active');
    if(curentSlide.next().length){
        curentSlide.next().addClass('active');
    }else{
        $Selector.slider.find('li:first-child').addClass('active')
    }
    curentSlide.removeClass('active');
}

function prev(){
    var curentSlide = $Selector.slider.find('li.active');
    if(curentSlide.prev().length){
        curentSlide.prev().addClass('active');
    }else{
        $Selector.slider.find('li:last-child').addClass('active')
    }
    curentSlide.removeClass('active');
}

