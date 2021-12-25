// lorem text
const text=[
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repellat quibusdam obcaecati aliquam deserunt quidem assumenda magni, temporibus officiis sed esse rem illo possimus fugit, odio inventore? Blanditiis, consectetur aperiam temporibus, perferendis soluta officia quis hic suscipit adipisci, minus numquam! Soluta, nostrum possimus ratione nesciunt laboriosam quas repudiandae quibusdam aliquid, autem saepe, facilis quae ut dignissimos. Magni veritatis porro assumenda fuga odio est nesciunt vero sit rem ipsa, laboriosam alias quibusdam quaerat. Perspiciatis laboriosam unde aut.`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum excepturi ratione debitis itaque, officiis quibusdam at reprehenderit nemo hic nisi facilis facere et dolore, autem pariatur ad a minima sint? Cumque consequuntur ea facilis deleniti eum nisi dicta ipsa nobis quidem fugiat pariatur optio id soluta assumenda perspiciatis, sint a adipisci accusantium eos quae minus. Libero, ipsa. Suscipit sequi, deleniti eligendi dignissimos et corporis nobis. Culpa ducimus rerum labore sapiente, ea, aut a facere sequi deserunt amet consequatur.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quia inventore tenetur, at quos maiores necessitatibus saepe facilis fugit. Laborum, tempora commodi deleniti enim unde omnis ipsa non doloremque perferendis id praesentium, mollitia asperiores sequi debitis in provident rem qui placeat fugiat. Sunt magnam explicabo necessitatibus voluptatum ex fuga veniam nesciunt facilis tempora?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat. Recusandae placeat quibusdam minima esse sint accusamus nesciunt, expedita aliquam dolor quis voluptatem optio iste exercitationem quasi perspiciatis libero. Nulla totam reprehenderit voluptatibus qui!`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde harum accusantium minima obcaecati similique perspiciatis, sed ut quia excepturi provident adipisci accusamus, nostrum nesciunt natus dolorem incidunt consequatur molestias numquam tempora ducimus deserunt at beatae facilis. Nulla quasi laboriosam maxime saepe architecto quod ipsam, rem minima nisi quibusdam perferendis eius impedit aperiam nihil vitae obcaecati velit non sed quam. Porro nihil, illo nulla provident quia deleniti architecto vero dolorum perferendis aspernatur commodi dolore enim neque doloribus error magni distinctio vitae esse minus quisquam, itaque tempora ex. Voluptate, vel sed?`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore qui officiis delectus eius magnam, voluptas sed dicta fugit! Blanditiis et perspiciatis ipsum maxime alias inventore dolore ad voluptatem tenetur? Corrupti et eaque ut dolore consectetur corporis iusto, exercitationem, tempore earum impedit laudantium nesciunt. In odio, officia facere consequuntur debitis illo. Cumque ipsum natus accusamus temporibus eaque hic dicta sunt corporis vero dignissimos? Quae dolorem iste mollitia necessitatibus corrupti veritatis, incidunt esse impedit voluptas enim. Sed illo tenetur fuga, temporibus ut cumque cum reiciendis voluptatum quis non nostrum numquam. Consequatur beatae odit dolorem, harum placeat ut ab repellat id illum rerum optio voluptate laudantium alias ea vero pariatur cumque adipisci accusantium fugiat? Odio veritatis officiis accusamus dolor eveniet dolorum amet tenetur.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis iste atque consequuntur, illum quod. Repellat dolorem error eligendi nostrum ipsam iure, repellendus placeat qui asperiores consequatur impedit, saepe rerum accusamus dicta et quas fugiat facilis totam dignissimos dolores aliquid optio ratione quasi soluta. Eum, doloremque aperiam molestiae consectetur reiciendis, consequuntur repellat qui porro fugit perspiciatis temporibus mollitia asperiores sapiente illum explicabo aspernatur unde nulla!`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt quos aliquam maiores pariatur sed quam maxime porro exercitationem magni accusantium nostrum magnam natus error animi sapiente, debitis consequatur autem deleniti nemo aliquid. Aspernatur?`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita enim aliquam rem blanditiis praesentium a excepturi, cumque ducimus est delectus facere eaque ipsa, aut autem accusantium! Dolor ipsa assumenda tempora eligendi sunt earum aliquam, omnis repellat magni, officia inventore beatae at iste odit modi voluptatibus ab, delectus ea quasi totam aut velit repudiandae! Ducimus sequi veniam magni, obcaecati quia magnam unde voluptatem, quo nemo explicabo nihil itaque ullam, natus facilis sunt maxime! Libero quas fugit deleniti esse, voluptates aspernatur.`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius repellendus fugit esse dignissimos aspernatur unde possimus, cupiditate aperiam voluptate ipsum, minus facilis, libero voluptatibus consequuntur ut placeat! Vitae quidem in at maxime cupiditate ea commodi sunt, quasi rerum nulla id ipsum quaerat! Maiores vero aspernatur esse quasi reiciendis, nobis, aliquid sint architecto deleniti sequi dicta necessitatibus, sapiente quis eligendi rem eius unde adipisci inventore recusandae?`
]

const form=document.querySelector(".lorem-form")
const amount=document.getElementById("amount")
const result=document.querySelector(".lorem-text")

form.addEventListener("submit",function(e){
    e.preventDefault();

    // parse int helps to convert from string to integer
    const value=parseInt(amount.value);
    const random=Math.floor(Math.random()*text.length);
    
    // empty
    // -1
    // >9

    if(isNaN(value) || value<0 || value>9){
        result.innerHTML=`<p class="result">${text[random]}</p>`;
    }
    else{
        let tempText=text.slice(0,value);
        tempText=tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        
    }
    
})