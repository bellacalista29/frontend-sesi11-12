var recipe = [];
recipe[0] = "Beli telur, garam, dan minyak di supermarket terdekat";
recipe[1] = "Siapkan wajan, minyak, dan spatula";
recipe[2] = "Masukkan minyak ke wajan";
recipe[3] = "Pecahkan telur di wajan";
recipe[4] = "Tambahkan garam pada telur";
recipe[5] = "Goreng sampai matang";

let list = document.getElementById("recipeContent");
recipe.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});

var last_step = 5;

document.querySelector("#firstStep").textContent = recipe[0];
document.querySelector("#lastStep").textContent = recipe[last_step];

