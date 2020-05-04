
$(function(){



  
});

let progress = document.getElementById('progressbar'),
    totalHeight = document.body.scrollHeight - window.innerHeight;

    window.addEventListener('scroll',  function () {
        console.log('scroll')
        let progressHight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHight + '%';
    });

    new WOW().init();