const form = document.getElementById("gradeForm");
const result = document.getElementById("result");
const errorBox = document.getElementById("error");
const loading = document.getElementById("loading");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  result.classList.add("hidden");
  errorBox.classList.add("hidden");
  loading.classList.remove("hidden");
  submitButton.disabled = true;

  const payload = {
    name: document.getElementById("name").value.trim(),
    assignment: document.getElementById("assignment").value,
    uts: document.getElementById("uts").value,
    uas: document.getElementById("uas").value
  };

  try {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const resultData = await response.json();

    if (!response.ok) {
      throw new Error(resultData.message || "Terjadi kesalahan.");
    }

    showResult(resultData.data);
  } catch (error) {
    errorBox.textContent = error.message;
    errorBox.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
    submitButton.disabled = false;
  }
});

function showResult(data) {
  document.getElementById("resultName").textContent = data.name;
  document.getElementById("finalScore").textContent = data.finalScore;
  document.getElementById("grade").textContent = data.grade;
  document.getElementById("status").textContent = data.status;

  document.getElementById("resultAssignment").textContent = data.assignment;
  document.getElementById("resultUts").textContent = data.uts;
  document.getElementById("resultUas").textContent = data.uas;

  const status = document.getElementById("status");
  status.classList.toggle("fail", data.status !== "LULUS");

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}