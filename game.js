var health = 100;
var hits = 0;
let enemyName = "Shun Di";


function slap() {
  if (health >= 1) {
    health -= 1
    //alert(health);
    console.log(health)
    hits += 1
    update()
  } else {
    alert("your opponent is KO'd!")
  }
}
function punch() {
  if (health >= 1) {
    health -= 5
    //alert(health);
    console.log(health)
    hits += 1
    update()
  } else {
    alert("your opponent is KO'd!")
  }
}
function kick() {
  if (health >= 1) {
    health -= 10
    //alert(health);
    console.log(health)
    hits += 1
    update()
  } else {
    alert("your opponent is KO'd!")
  }
}


function update() {
  document.getElementById("health").innerHTML = `${health}`;
  document.getElementById("hits").innerHTML = `${hits}`;
  document.getElementById("enemy").innerHTML = `${enemyName}`;
}
update()