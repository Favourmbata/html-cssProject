const blue = document.getElementById("header1")
let uni_image = document.createElement('img')
uni_image.src = 'data:https://www.123rf.com/photo_83584965_young-woman-using-a-camera-to-take-photo-at-the-park.html'
'';
uni_image.alt = 'school';
uni_image.style = "width:100%;height:100%";


blue.addEventListener("mousemove",function(){
    blue.replaceChild(uni_image)
})


