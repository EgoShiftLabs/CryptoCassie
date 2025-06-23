document.addEventListener("DOMContentLoaded", function () { const form = document.getElementById("promptForm"); const result = document.getElementById("promptResult");

form.addEventListener("submit", function (e) { e.preventDefault();

const scene = document.getElementById("scene").value.trim();
const dialogue = document.getElementById("dialogue").value.trim();

if (!scene || !dialogue) {
  result.textContent = "Please fill out both fields.";
  return;
}

const finalPrompt = `REALISTIC VIDEO PROMPT\n\nScene: ${scene}\n\nCassie's Dialogue:\n\"${dialogue}\"\n\nKeep Cassie consistent: 5'10\" Black American woman, 145 lbs, medium-brown skin, green eyes, wet & wavy hair, youthful, confident, educational and slightly seductive. Output should match her brand and personality.`;

result.textContent = finalPrompt;
form.reset();

}); });

