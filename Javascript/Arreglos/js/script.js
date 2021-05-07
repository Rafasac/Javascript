let colores=["rojo", "verde", "blanco", "azul"];
console.log("Posición o indice 0: "+colores[0]);
console.log("Posición o indice 1: "+colores[1]);
console.log("Posición o indice 2: "+colores[2]);
console.log("Posición o indice 3: "+colores[3]);
console.log(colores);
//otra forma de definir
let frutas=new Array();
frutas[0]="Melón";
console.log(frutas[0]);
//Otra forma
var numero= new Array(5);
numero[0]=10;
numero[1]=50;
numero[2]=100;
numero[3]=150;
numero[4]=200;
console.log(numero);
for(let num in numero){
    console.log (num+" = "+numero[num]);
}
//matrices multidimencionales
let matrizFila =new Array();
for(let x=0; x<=10; x++){
    matrizFila[x]=new Array();
    for(let y=0; y<=10; y++){
        matrizFila[x][y]=x+""+y;
    }
}
for(let elemento in matrizFila){
    console.log(elemento +" = "+matrizFila[elemento]);
}
console.log(matrizFila[2][5]);