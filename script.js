let url = "https://inshorts.deta.dev/news?category=national";






async function f() {
 try{
   const response = await fetch(url);
   let users = await response.json();
   //console.log("hi",users);
   xxxxxxx(users,users.data.length);
   return users;
  }catch(err){
    console.error(err); 
  }
}
 f().then(m => {
 //  xxxxxxx(m,m.data.length);

});

   

function xxxxxxx(m,len)
{

 // console.log("catch",m);

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
let container = document.querySelector('#mynews');
removeAllChildNodes(container);

for(let i=0; i<len;i++){

let newelement = document.createElement("div");

newelement.innerHTML=`
<div class="row border">

    <div class="col-lg-5 col-md-12 col-sm-12" id="data1">
             <div class="image-box">
             <img class="img-thumbnail" id="image1" src="download.jfif" alt="Card image cap"></div>
             </div>
    <div class="col-lg-7 col-md-12 col-sm-12">
      <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <p class="card-text1"><label><b>short</b></label><small class="text-muted">Last updated 3 mins ago</small></p>
           <div class="text-wrap"> <p class="card-text">Some quick example .</p>   
            <p class="card-text2"><label><i>read more at </i></label><a href="#" class="card-link text-black">Card link</a></p>
          </div>
      </div>
</div>

`
let mynews = document.querySelector("#mynews");

mynews.appendChild(newelement);

}





let v = document.querySelectorAll(".img-thumbnail");


for(let i=0;i<v.length;i++)
v[i].src = m.data[i].imageUrl


let v1 = document.querySelectorAll(".card-title");

for(let i=0;i<v1.length;i++)
v1[i].innerText = m.data[i].title;

let v2 = document.querySelectorAll(".card-text");
for(let i=0;i<v2.length;i++)
v2[i].innerText = m.data[i].content;

let v3 = document.querySelectorAll(".text-muted");

for(let i=0;i<v3.length;i++)
{
let author =` by ${m.data[i].author} / ${m.data[i].time} on ${m.data[i].date}`;
v3[i].innerText = author;
}

let v4 = document.querySelectorAll(".card-link");
// console.log(v4);

for(let i=0;i<v4.length;i++)
{
let link = m.data[i].readMoreUrl;
if(link == null)
{
  v4[i].innerHTML = ` no source available`;
  
}
else{
v4[i].innerHTML = ` source`;
v4[i].href=link;
}
}
}


let v5 =  document.querySelectorAll(".dropdown-item");
// console.log(v5);

for (let i = 0; i < v5.length; i++) {
  v5[i].addEventListener("click", function() {
    // console.log(v5[i].innerHTML);
    let val = v5[i].innerHTML;
  url = `https://inshorts.deta.dev/news?category=${val}`;

  //location.reload();
  f();


  // async function f1() {
  //   try{
  //     let response1 = await (fetch(`https://inshorts.deta.dev/news?category=${val}`));
  //     let users1 = await response1.json();
  //      console.log(users1);
  //     return users1;
  //    }catch(err){
  //      console.error(err); 
  //    }
  //  }
  //  f1();  
// }


});
}