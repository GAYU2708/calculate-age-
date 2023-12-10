function calculateAge(){
    const currentDate= new Date();
    const birthDateinput=document.getElementById('birthDate').value;

    const birthDate=new Date(birthDateinput);

    const age= Math.floor((currentDate-birthDate) / (365*24*60*60*1000));

    const result=document.getElementById('result').textContent=`Your Age is: ${age - 1} years old.`;
}