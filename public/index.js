var sections = document.querySelector(".listings");
var challenges = document.querySelector(".challenges a");
var labs = document.querySelector(".labs a");
var projects = document.querySelector(".projects a");
var directory = document.querySelector(".directory")

var cardHolder = `<div class="card  text-dark  m-3">
<div class="row no-gutters">
    <div class="col-md-6">
        <img src="../assets/LGtxjGeIkje2QJm7GPK5s4So4.png" class="card-img card-update" alt="...">
    </div>
    <div class="col-md-6">
        <div class="card-body">
            <h3 class="card-title">%texttitle%
            </h3>
            <div class="card-bottom mt-4">
                <a href="#" class="challenge-button ">Challenge</a>
                <p class="card-text">%textbody%</p>
            </div>

        </div>
    </div>
</div>
</div>`;


var challengesData = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => data.map(data=>realData.push(data)))
var dataArr =[];
var realData=[];
console.log(realData)
async function dataRetrieve(data,num) {
    var newlength = Math.ceil(data.length / num);
    var updateData = await data.splice(0, newlength);
    await updateData.map(el => dataArr.push(el));
    console.log(realData, dataArr)
   await dataArr.map(el => rep(el, cardHolder))
}

function rep(el, cardHolder) {
    let output = cardHolder.replace(/%texttitle%/g, el.title)
    let final = output.replace(/%textbody%/g, el.body);
    sections.insertAdjacentHTML("afterbegin", final)
}
console.log(directory)
directory.addEventListener("click", (event) => {

        
         if(event.target.className === "nav-link labs"){
            dataRetrieve(realData,20)
        }
        else if(event.target.className === "nav-link projects"){
            dataRetrieve(realData,30)
        }
        else{
            dataRetrieve(realData,10)
           
        }
    }


)
$(function(){
    $("#nav-placeholder").load("nav.html");
    
  });
  $(function(){
    $("#nav-placehold").load("nav.html");
    
  });