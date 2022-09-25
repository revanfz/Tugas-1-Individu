window.onload = function () {
  let table = document.getElementById("mahasiswa");
  for (i = 0; i < table.rows.length; i++) {
    if (i === 0) {
      let th = document.createElement("th");
      let txt = document.createTextNode("Nilai Mutu");
      th.appendChild(txt);
      table.rows[i].append(th);
    } else {
      let td = document.createElement("td");
      let txt = document.createTextNode(
        getGrade(table.rows[i].cells[3].innerText)
      );
      td.appendChild(txt);
      table.rows[i].append(td);
    }
  }
};
const getGrade = (nilai) => {
  nilai = parseInt(nilai);
  if (nilai) {
    if (nilai >= 80) {
      return "A";
    } else if (nilai >= 70) {
      return "AB";
    } else if (nilai >= 60) {
      return "B";
    } else if (nilai >= 50) {
      return "BC";
    } else if (nilai >= 40) {
      return "C";
    } else if (nilai >= 10) {
      return "D";
    } else {
      return "E";
    }
  } else {
    return "Nilai tidak valid";
  }
};
