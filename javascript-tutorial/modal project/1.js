const modalBtn=document.querySelector(".modal-btn");
const modal=document.querySelector(".modal-overlay");
const closeBtn=document.querySelector(".close-btn");
const banner=document.querySelector('.banner')

modalBtn.addEventListener('click',function(){
    
    modal.classList.add('open-modal');
    banner.classList.add('banner-1')

})
closeBtn.addEventListener('click',function(){
    modal.classList.remove('open-modal');
    banner.classList.remove('banner-1')
    
})