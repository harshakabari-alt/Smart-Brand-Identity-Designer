function generate() {
  let name = document.getElementById("brandName").value;
  document.getElementById("logo").innerText = name || "Your Brand";

  document.getElementById("c1").style.background = "#4f46e5";
  document.getElementById("c2").style.background = "#22c55e";
  document.getElementById("c3").style.background = "#f59e0b";
}
