$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            firstname:{
                required:true,
                minlength:4
            },
            lastname:{
                requered:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            firstname:{
                required:"Enter firstname",
                minlength:"Should be atleast 4 characters long"
            }
            
        }
    })
})