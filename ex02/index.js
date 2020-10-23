/* Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);
*/

function pares(x, y){
    while(x <= y){
        if(x % 2 == 0){
            console.log(x)
        }
        x += 1;
    }
} 

pares(3, 31);
