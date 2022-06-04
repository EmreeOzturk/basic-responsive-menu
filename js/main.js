const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const links = document.querySelectorAll('ul li');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        console.log("tıklandı");

        links.forEach((link,index) => {
            console.log(index);
            if(link.style.animation){
                link.style.animation=``;
            }else{
                link.style.animation = `linksAnima 0.5s ease forwards  ${index/5+0.1}s`;

            }

        });
        burger.classList.toggle('close');
    });

}
navShow();