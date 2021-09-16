$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});

var courses = [
    {
        id: 1,
        name: 'Html,Css',
        coin: 250
    },
    {
        id: 2,
        name: 'JS',
        coin: 50
    },
    {
        id: 3,
        name: 'NodeJS',
        coin: 0
    },
    {
        id: 4,
        name: 'Sass,Scss',
        coin: 200
    },
    {
        id: 1,
        name: 'Java',
        coin: 20
    },

];

codeHandler = (course) => {
    return course.coin;
}

var totalCoin = courses.map(codeHandler);

console.log(totalCoin);



const imageBtns = document.querySelectorAll('#image-btn');

viec1 = () => {
    alert('Please enter');
}

for (const imageBtn of imageBtns) {
    imageBtn.addEventListener('click',viec1);
}
   

// const boxBtn = document.querySelector('#btn-submit');

// viec1 = () => {
//     console.log('Viec1');
// }

// boxBtn.addEventListener('click',viec1);