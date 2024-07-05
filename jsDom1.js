function addClass() {
  const className = document.getElementById("classInput").value.trim();
  const paragraph = document.getElementById("text");

  if (className === "")
    return;

  paragraph.classList.remove("highlight", "underline", "bold");
  paragraph.classList.add(className);

  document.getElementById("classInput").value = "";
}

function disappear1() {
  const line = document.getElementById("line1");
  line.style.display = (line.style.display === 'none' ? 'block' : 'none');
}
function disappear2() {
  const line = document.getElementById("line2");
  line.style.display = (line.style.display === 'none' ? 'block' : 'none');
}
function disappear3() {
  const line = document.getElementById("line3");
  line.style.display = (line.style.display === 'none' ? 'block' : 'none');
}

function changeText() {
  const button = document.getElementById('myButton');
  button.textContent = 'לחץ!';
  button.disabled = true; 
}
