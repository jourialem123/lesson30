function clearScreen(){
    document.getElementById("result").value="";
}
function setScreenValue(value){
    document.getElementById("result").value+=value;
}
function calculateResult(){
    const resultelement=document.getElementById("result");
    const expression =resultelement.value.trim();
    //trim to remove spaces
if(expression==''){
    resultelement.value="Enter an expression ";
    return;
}
try{
    resultelement.value=eval(expression);
}
catch(e){
    resultelement.value="Invalid expression";
}
}