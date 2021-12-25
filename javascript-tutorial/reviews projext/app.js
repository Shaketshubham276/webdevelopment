const reviews=[
    {
    id:1,
    name:"shaket saurabh",
    job:"software engineer",
    img:"1.jpg",
    text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quibusdam quos nobis repellendus, iure eum vero voluptate commodi, nesciunt suscipit neque dolorem. Tenetur saepe accusamus iure dolorum at itaque consequuntur dicta corrupti fugit in suscipit, atque iusto nam earum beatae officia a soluta. Voluptatem, iure, fugiat aut tempora perspiciatis atque maiores neque, libero illum soluta iste commodi. Assumenda, atque distinctio obcaecati deleniti"
    },
    {
        id:2,
    name:"shaket shubham",
    job:"business man",
    img:"2.jpg",
    text:"praesentium nesciunt porro nostrum similique nemo, ut harum tenetur est, aliquid error rem esse debitis omnis et! Molestiae voluptatem maxime nisi, dolorum modi doloribus iusto ab explicabo voluptas, nulla architecto! Reiciendis ipsum repellat molestiae, ipsa aliquid atque consectetur corporis unde impedit consequuntur sapiente earum recusandae qui deleniti ad. Magnam dolorem soluta porro autem consequuntur? Iure quibusdam, quos explicabo nulla ipsam qui vel earum libero facere unde, laboriosam aut! Veniam perspiciatis mollitia ad facere consequuntur pariatur temporibus, soluta qui commodi alias. Nemo atque possimus adipisci voluptas "

    },
    {
    id:3,
    name:"kriti gupta",
    job:"finance assistance",
    img:"3.jpg",
    text:"facilis similique voluptate tenetur unde nihil molestias. Quisquam officia quae vero error exercitationem distinctio veritatis ea nihil eligendi repellat. Doloribus, officia temporibus a fugit laudantium, iure ipsam accusamus harum iusto cumque fugiat distinctio pariatur eius. Esse possimus quia quaerat itaque nemo iure tenetur assumenda veniam tempore dicta qui, eaque aut, obcaecati aspernatur doloribus. Minus id architecto nesciunt incidunt eum est deleniti aspernatur fugit omnis repellendus veritatis dolorem quos maiores illum adipisci facilis harum quod  "
    },
    {
        id:4,
        name:"preety gupta",
        job:"artist instructor",
        img:"4.jpg",
        text:"ipsam ut, nihil unde pariatur reprehenderit! Modi voluptate dolorem dolor necessitatibus? Iusto commodi iste facere ex eos! Nihil debitis sed porro accusantium rerum, iste vitae ipsam voluptatem libero totam repudiandae dicta facere laborum similique repellat tempora sunt! Libero saepe asperiores ducimus reiciendis eum doloremque quisquam commodi sint ut? Pariatur culpa sunt, minima adipisci explicabo quae dolorem temporibus quasi excepturi commodi nam iure, similique perferendis veniam vitae nemo harum. Minima molestiae, vitae aliquid quidem quae culpa quam praesentium ex aut odio laudantium voluptate iure quo tempora eveniet nobis odit. Ipsam voluptatibus accusantium voluptate, nisi ipsum ipsa corporis nihil modi, esse deleniti totam? "
        }





];

const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

let currentItem=1;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
});

function showPerson(person) {
    const item =reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})
randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*4)
    showPerson(currentItem)
})