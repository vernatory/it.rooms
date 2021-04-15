// function ready() {
//     document.getElementById('photo_gallery').setAttribute('style', 'display: none' );
//   }

//   document.addEventListener("DOMContentLoaded", setTimeout(ready, 1500)  );


document.getElementById('photo_button').onclick = () =>{
    // alert('fdjhk')
    document.getElementById('main').setAttribute('style', 'display: none' );
    document.getElementById('photo_gallery').setAttribute('style', 'display: view' );

    // document.getElementById('photo-gallery').classList.add('none_element');

}



document.getElementById('main_button').onclick = () =>{
    // alert('fdjhk')
    document.getElementById('main').setAttribute('style', 'display: view' );
    document.getElementById('photo_gallery').setAttribute('style', 'display: none' );

    // document.getElementById('photo-gallery').classList.add('none_element');

}