//Seven(Wang Jiaxiao).This is an enquiry form that allows customers to request more information. In this way, users can upload some of their own information on the website, and then they can obtain customer information according to the uploaded information, and manage the customer information.
function validateform(){  
    var name=document.myform.name.value;  
    var telephone=document.myform.telephone.value;  
    var home=document.myform.home.value;  
    var email=document.myform.email.value;  
    var learn=document.myform.learn.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(telephone.length<11){  
      alert("Telephone must be at least 11 characters long.");  
      return false;  
      }
      else if (home==null || home==""){  
      alert("Home can't be blank");  
      return false;  
      }
      else if (email==null || email==""){  
      alert("E-mail can't be blank");  
      return false;  
      }
      else if (learn==null || learn==""){  
      alert("Please briefly describe the way you like, don't leave blank!");  
      return false;  
      }
    }  