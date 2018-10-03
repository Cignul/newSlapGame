var health = 100;
var hits = 0;
let enemyName = "Shun Di";


function slap() {
  health -= 1
  //alert(health);
  console.log(health)
  hits += 1
  update()
}
function punch() {
  health -= 5
  //alert(health);
  console.log(health)
  hits += 1
  update()
}
function kick() {
  health -= 10
  //alert(health);
  console.log(health)
  hits += 1
  update()
}


function update() {
  document.getElementById("health").innerHTML = `${health}`;
  document.getElementById("hits").innerHTML = `${hits}`;
  document.getElementById("enemy").innerHTML = `${enemyName}`;
}
update()