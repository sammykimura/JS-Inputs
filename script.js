

const app = {
  firstname: '',
  lastname:'',
  email:'',
  box:'',


  checkValue: ()=>{

    app.firstname =  document.getElementById('firstname');
    if(app.firstname.value==''){
      firstname.style.borderColor="red";
      console.log("border is red");
    }

    app.lastname = document.getElementById('lastname');
    if(app.lastname.value==''){
      lastname.style.borderColor="red";
    }

    app.email = document.getElementById('email');
    if(app.email.value==''){
      email.style.borderColor="red";
    }

    app.box = document.getElementById('box');
    if(app.box.checked!=true){
      box.style.borderColor="red";
      console.log("box is not checked");
    }

    if (app.firstname.value!=''&& app.lastname.value!='' && app.email.value!=''&& box.checked===true ){

      submitButton.style.visibility = 'hidden';
      console.log("button hidden");
      loader.style.display='block';
      setTimeout(function(){ alert("Thanks for Signing Up!"); }, 3000);
      
    }
  }
}

//let submitButton=document.getElementById('submitbutton');
submitButton.addEventListener("click", app.checkValue());







  /*checkFirstname: () =>{

  },

  checkLastname: () =>{

  },

  checkEmail: ()=>{

  },

  checkBox: ()=>{

  };*/
