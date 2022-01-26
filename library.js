
// nomor 1
const biodata = { name: "Helmi", gender: "male", age: 16, weight: 47 }
function test() {
  const { name, gender, age, weight } = biodata
  document.getElementById("biodata").innerHTML = `${name}, ${gender}, ${age} years old, ${weight}kg`
}
test()
//  nomor 2
const components = [
  {
    no: 1,
    nama: "Motherboard",
  }, {
    no: 2,
    nama: "VGA"
  }, {
    no: 3,
    nama: "Monitor"
  }, {
    no: 4,
    nama: "GPU"
  }, {
    no: 5,
    nama: "RAM"
  }, {
    no: 6,
    nama: "Harddisk"
  }, {
    no: 7,
    nama: "Mouse"
  }, {
    no: 8,
    nama: "PSU"
  }, {
    no: 9,
    nama: "CPU"
  }, {
    no: 10,
    nama: "Case"
  }
]
components.map(component => {
  const li = document.createElement("li");
  li.innerHTML = component.nama;
  document.getElementById("nomor2").appendChild(li);
})

//nomor 3
let hasil = 0,
  a = 0,
  b = 0,
  c = 0,
  curOp = 1,
  op = ["", ""]
function kali() {
  switch (curOp) {
    case 3:
      alert("PENCET SAMA DENGAN!")
      break;
    default:
      document.getElementById(`operator${curOp}`).innerHTML = "×"
      op[(curOp - 1)] = "times"
      curOp += 1
      break;
  }
}
function bagi() {
  switch (curOp) {
    case 3:
      alert("PENCET SAMA DENGAN!")
      break;
    default:
      document.getElementById(`operator${curOp}`).innerHTML = "÷"
      op[(curOp - 1)] = "divide"
      curOp += 1
      break;
  }
}
function tambah() {
  switch (curOp) {
    case 3:
      alert("PENCET SAMA DENGAN!")
      break;
    default:
      document.getElementById(`operator${curOp}`).innerHTML = "+"
      op[(curOp - 1)] = "plus"
      curOp += 1
      break;
  }
}
function kurang() {
  switch (curOp) {
    case 3:
      alert("PENCET SAMA DENGAN!")
      break;
    default:
      document.getElementById(`operator${curOp}`).innerHTML = "-"
      op[(curOp - 1)] = "minus"
      curOp += 1
      break;
  }
}
async function result() {
  a = parseInt(document.getElementById("a").value)
  b = parseInt(document.getElementById("b").value)
  c = parseInt(document.getElementById("c").value)
  switch (op[0]) {
    case "times":
      hasil = a * b
      break;
    case "divide":
      hasil = a / b
      break;
    case "plus":
      hasil = a + b
      break;
    case "minus":
      hasil = a - b
      break;
  }
  switch (op[1]) {
    case "times":
      hasil *= c
      break;
    case "divide":
      hasil /= c
      break;
    case "plus":
      hasil += c
      break;
    case "minus":
      hasil -= c
      break;
  }
  document.getElementById("kalkulasi").innerHTML = `hasil: ${hasil}`
}
function refresh() {
  a = 0,
    b = 0,
    c = 0,
    curOp = 1,
    op = ["", ""];
  for (let i = 1; i <= 2; i++) {
    document.getElementById(`operator${i}`).innerHTML = ""
  }
  document.getElementById("a").value = ""
  document.getElementById("b").value = ""
  document.getElementById("c").value = ""
}

//nomor 4
let nilai = 0
function submitNilai() {
  nilai = parseInt(document.getElementById("myInput").value)
  if (nilai == 100) {
    document.getElementById("nilai").innerHTML = "S"
  } else if (nilai > 90) {
    document.getElementById("nilai").innerHTML = "A"
  } else if (nilai > 80) {
    document.getElementById("nilai").innerHTML = "B+"
  } else if (nilai > 70) {
    document.getElementById("nilai").innerHTML = "B"
  } else {
    document.getElementById("nilai").innerHTML = "F"
  }
}