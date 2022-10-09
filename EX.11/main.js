document.querySelector("#submit_button").onclick = function () {

  const newDiv = document.createElement("div");
  const newLi = document.createElement("li");
  const button = document.createElement("button");
  button.classList.add('remove');
  newLi.appendChild(button)

  button.textContent = "Remove";
  newLi.textContent = document.querySelector("#task input").value;

  document.querySelector("#list").appendChild(newDiv.appendChild(newLi));

  var current_tasks = document.querySelectorAll(".remove");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
