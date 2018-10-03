var health = 100;

function slap() {
  health -= 1
  //alert(health);
  console.log(health)
}

function update() {
  document.getElementById("health").innerHTML = `${health}`;
}
update()
slap()