let a;
let b;
let c;

function nhanDuLieuA() {
  a = parseInt(document.getElementById("soa").value);
}
function nhanDuLieuB() {
  b = parseInt(document.getElementById("sob").value);
}
function nhanDuLieuC() {
  c = parseInt(document.getElementById("soc").value);
}

// BT1

function sochanle() {
  document.getElementById("ketqua").innerHTML = kiemTraSoChanLe(a);
  document.getElementById("ketqua2").innerHTML = kiemTraSoChanLe(b);
  document.getElementById("ketqua3").innerHTML = kiemTraSoChanLe(c);
}

function kiemTraSoChanLe(n) {
  if (n % 2 === 0) {
    return n + " là số chẵn";
  } else if (isNaN(n)) {
    return "Vui lòng nhập số.";
  } else {
    return n + " là số lẻ";
  }
}

// BT2

function findMax() {
  document.getElementById("ketqua").innerHTML = kiemTraMax(a, b, c);
}

function kiemTraMax(x, y, z) {
  let max = x;

  if (isNaN(x, y, z)) return "Vui lòng nhập số.";
  if (y > max) max = y;
  if (z > max) max = z;

  return max + " là số lớn nhất.";
}

// BT3

// function giaiThua() {
//   let giaiThuaKetQua = 1;
//   let giaiThuaA = 1;
//   let giaiThuaB = 1;
//   let giaiThuaC = 1;
//   let tempMax = kiemTraMax(a, b, c);

//   for (let i = 1; i <= tempMax; i++) {
//     giaiThuaKetQua *= i;
//     if (i == a) {
//       giaiThuaA = giaiThuaKetQua;
//     } else if (i == b) {
//       giaiThuaB = giaiThuaKetQua;
//     } else {
//       giaiThuaC = giaiThuaKetQua;
//     }
//   }

//   document.getElementById("ketqua").innerHTML = `${a}! = ${giaiThuaA}`;
//   document.getElementById("ketqua2").innerHTML = `${b}! = ${giaiThuaB}`;
//   document.getElementById("ketqua3").innerHTML = `${c}! = ${giaiThuaC}`;
// }

function giaiThua() {
  document.getElementById("ketqua").innerHTML = `${a}! = ${tinhGiaiThua(a)}`;
  document.getElementById("ketqua2").innerHTML = `${b}! = ${tinhGiaiThua(b)}`;
  document.getElementById("ketqua3").innerHTML = `${c}! = ${tinhGiaiThua(c)}`;
}

function tinhGiaiThua(n) {
  let giaiThuaKetQua = 1;

  for (let i = 1; i <= n; i++) {
    giaiThuaKetQua *= i;
  }

  return giaiThuaKetQua;
}

// BT4

function inSoChan() {
  document.getElementById("ketqua").innerHTML = timSoChan(a);
  document.getElementById("ketqua2").innerHTML = timSoChan(b);
  document.getElementById("ketqua3").innerHTML = timSoChan(c);
}

function timSoChan(n) {
  let arr = [];
  let j = 0;
  for (i = 0; i <= n; i += 2) {
    if (i !== 0) {
      arr[j] = i;
      j++;
    }
  }
  return arr.join(", ");
  // return arr;
}

// BT5

function tongChanMang() {
  document.getElementById("ketqua").innerHTML = tinhTongChan(a, b, c);
}

function tinhTongChan(x, y, z) {
  let arr = [];
  arr.push(x, y, z);

  let tongChan = 0;

  for (let i of arr) {
    if (i > 0) {
      tongChan += i;
    }
  }

  return tongChan;
}
