const consoleTextareaLogs = document.querySelector(".console-textarea-logs");
const consoleTextarea = document.querySelectorAll(".console-textarea");
const sudoRegExp = new RegExp("^sudo .+");
consoleTextarea.forEach(el => {
  el.addEventListener("keypress", e => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault();
      const consoleText = el.innerHTML;
      const p = document.createElement("p");
      p.className = "log-item";
      p.innerHTML = consoleText;
      if (sudoRegExp.test(consoleText)) {
        p.innerHTML += `\nuser is not in the sudoers file. Please contact hendratay for access.`;
      } else if (consoleText === "about") {
        window.location.href = "http://hendratay.github.io/about";
      } else if (consoleText === "blog") {
        window.location.href = "http://hendratay.github.io/blog";
      } else if (consoleText === "project") {
        window.location.href = "http://hendratay.github.io/project";
      } else {
        window.open('https://www.google.com/search?q=' + consoleText);
      }
      consoleTextareaLogs.appendChild(p);
      el.innerHTML = "";
    }
  });
});
