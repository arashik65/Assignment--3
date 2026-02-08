function validOtp(otp) {
        if(typeof otp !== "string"){
            return "Invalid";
        } 
        if(otp.length !==8 || otp.startsWith("ph-") =="false"){
            return false;
        } 
       
       return true;
}
const output=validOtp("ph-10985");
console.log(output)