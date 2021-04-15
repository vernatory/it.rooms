// function ready() {
//     document.getElementById('photo_gallery').setAttribute('style', 'display: none' );
//   }

//   document.addEventListener("DOMContentLoaded", setTimeout(ready, 1500)  );

if(document.getElementById('click_photo_gallery')){
    document.getElementById('click_photo_gallery').onclick = () =>{

        document.getElementById('first_page').click()
    }
}


document.querySelector('.brone').onclick = () =>{

    swal("Мы всегда рады нашим гостям!", "Наличие мест можно узнать по телефону 8-977-01-12345", "success")
}


// document.getElementById('photo_button').onclick = () =>{
//     // alert('fdjhk')
//     document.getElementById('main').setAttribute('style', 'display: none' );
//     document.getElementById('photo_gallery').setAttribute('style', 'display: view' );

//     // document.getElementById('photo-gallery').classList.add('none_element');

// }



// document.getElementById('main_button').onclick = () =>{
//     // alert('fdjhk')
//     document.getElementById('main').setAttribute('style', 'display: view' );
//     document.getElementById('photo_gallery').setAttribute('style', 'display: none' );

//     // document.getElementById('photo-gallery').classList.add('none_element');

// }