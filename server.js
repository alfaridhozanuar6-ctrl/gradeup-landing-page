const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/calculate", (req, res) => {
  const { name, assignment, uts, uas } = req.body;

  if (!name || assignment === undefined || uts === undefined || uas === undefined) {
    return res.status(400).json({
      success: false,
      message: "Semua data harus diisi."
    });
  }

  const tugas = Number(assignment);
  const nilaiUts = Number(uts);
  const nilaiUas = Number(uas);

  if ([tugas, nilaiUts, nilaiUas].some(Number.isNaN) ||
      [tugas, nilaiUts, nilaiUas].some(n => n < 0 || n > 100)) {
    return res.status(400).json({
      success: false,
      message: "Nilai harus berupa angka 0 sampai 100."
    });
  }

  // Bobot: Tugas 30%, UTS 30%, UAS 40%
  const finalScore = (tugas * 0.30) + (nilaiUts * 0.30) + (nilaiUas * 0.40);

  let grade;
  let status;

  if (finalScore >= 85) grade = "A";
  else if (finalScore >= 75) grade = "B";
  else if (finalScore >= 65) grade = "C";
  else if (finalScore >= 50) grade = "D";
  else grade = "E";

  status = finalScore >= 65 ? "LULUS" : "TIDAK LULUS";

  res.json({
    success: true,
    data: {
      name: String(name).trim(),
      assignment: tugas,
      uts: nilaiUts,
      uas: nilaiUas,
      finalScore: Number(finalScore.toFixed(2)),
      grade,
      status
    }
  });
});

app.listen(PORT, () => {
  console.log(`GradeUp berjalan di http://localhost:${PORT}`);
});