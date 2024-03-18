function funcionNormal(){
return 'funcion01';
}
const  funcionArrow=()=>('funcionArrow');
const  funcionArrow2=(param1=0, param2=1)=>(param1+param2);
console.log(funcionNormal(),funcionArrow2(1,2));

