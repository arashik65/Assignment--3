function validOtp(otp) {
       if(typeof otp !== "string"){
          return "Invalid";
       }  
       if(otp.length !== 8 || otp.startsWith( "ph-") === false){
        return false;
       }
      return true; 
}
  const validation= validOtp("ph-10985");
  const validation2= validOtp("ph-1234");
  const validation3= validOtp("abc-12345");
  const validation4= validOtp(["ph-10985"]);
  const validation5= validOtp(12345678);
  console.log(validation);
  console.log(validation2);
  console.log(validation3);
  console.log(validation4);
  console.log(validation5);


 /** 
  * output 
  * true
false
false
Invalid
Invalid
  */




