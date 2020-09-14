var name = "Nerisa";
var money = 350000;
var age = 20;



if (name == 0 ){
 console.log("Anda Tidak Boleh Memesan");
  throw new Error('Program Berhenti');
}

if (age < 17 ){
  console.log("Anda hanya boleh pesan juice");
  if (money >= 50000 ){
  console.log("Anda bisa pesan minum. Sisa uang anda:", money - 50000);
} else{
  console.log("Uang Tidak Cukup. Anda Harus Pulang!");
}
}

if (age  >= 17 ){
  console.log("Anda hanya boleh pesan anggur");
  if (money >= 300000 ){
  console.log("Anda bisa pesan minum. Sisa uang anda:", money - 300000);
} else{
 console.log("Uang tidak cukup. Anda harus pulang!");
}
} 