var health = 100;

function slap() {
  health -= 1
  //alert(health);
  console.log(health)
  update()
}
function punch() {
  health -= 5
  //alert(health);
  console.log(health)
  update()
}
function kick() {
  health -= 10
  //alert(health);
  console.log(health)
  update()
}


function update() {
  document.getElementById("health").innerHTML = `${health}`;
}
update()