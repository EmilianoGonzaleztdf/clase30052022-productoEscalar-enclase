let n: number = 3;
let v1: number[] = new Array(n);
let v2: number[] = new Array(n);
let vmulti: number[] = new Array(n);
let numberv1: number;
let numberv2: number;
let i: number = 0;

for (i = 0; i < n; i++) {
  numberv1 = Number(
    prompt("Indique el número que desea incorporar en la posición " + i, ":")
  );
  v1[i] = numberv1;
  console.log("usted ingreso el valor " + numberv1, "en la la ubicacion " + i);
}

for (i = 0; i < n; i++) {
  numberv2 = Number(
    prompt("Indique el número que desea incorporar en la posición " + i, ":")
  );
  v2[i] = numberv2;
  console.log("usted ingreso el valor " + numberv2, "en la la ubicacion " + i);
}
for (i = 0; i < n; i++) {
  vmulti[i] = v1[i] * v2[i];
}
for (i = 0; i < n; i++) {
  console.log("el resultado de " + vmulti[i]);
}
