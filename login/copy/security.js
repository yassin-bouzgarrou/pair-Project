
acc=[{username: 'yassin', password: 'yassin'}]



//$("#singup").hide()

    $("#signBtn").on("click",function(){
    
        var inputPass =$("#signUser").val();
        var inputUser =$("#signPass").val();
        localStorage.setItem("user", inputUser)

        if(inputPass.length<5 || inputUser<5){alert("weak password/username")}
        else{
         
        acc.push({username:inputUser,password:inputPass})
        //$("#singup").show()
        //$("#login").hide()
        console.table(acc)
       }
        

    })
    $("#loginBtn").on("click",function(){acc.forEach(e => {
       
            
        
        var inputUser1 =$("#loginUser").val();
        var inputPass1 =$("#loginPass").val();
        if(e.username===inputUser1 && e.password===inputPass1){
            alert("welcome "+inputUser1);
            setTimeout(window.location.replace('/index.html'),6000) }
        else{alert("Wrong Password Try Again!") }
       
    
    
    
    
    })})
        /* 
        var inputUser1 =$("#loginUser").val();
        var inputPass1 =$("#loginPass").val();
        console.log(inputUser1,inputPass1,e);
        if(e.username===inputUser1 && e.password===inputPass1){window.location.replace('index.html')}
        else{alert("Wrong Password Try Again!") } */
 
        
   
    

        
        /* 
       console.log(inputs)
        for(var i = 0 ; i<acc.length;i++){  
            
        if($("#input5").val().includes(acc[i].password)){
            console.log($("#input5").val())
            alert("true login")
       }else{
        alert("false login")
        }}  */

