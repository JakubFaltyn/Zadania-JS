document.querySelector("#submit_button").onclick = function () {
  document.querySelector("#list").innerHTML += `
            <div>
                <li>
                    ${document.querySelector("#task input").value}
                    <button class="remove">REMOVE</button>
                </li>
            </div>
        `;
  var current_tasks = document.querySelectorAll(".remove");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
