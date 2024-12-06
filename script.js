function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

$(document).ready(function(){
    $("#gform").validate({
        rules:{
            name:{
                required:true,
                minlength:3
            },
            place:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                minlength:10,
                maxlength:10,
                digits:true
            },
            message:{
                required:true,
                minlength:20,
                maxlength:100
            }
        },
        messages:{
            phone:{
                minlength:"Enter a valid phone number",
                maxlength:"Enter a valid phone number"
            }
        }
    })
})



// $("#gform").submit((e) => {
//     e.preventDefault();
//     try {
//         $.ajax({
//             url: "https://script.google.com/macros/s/AKfycbxPgOdKDtpDUYOnf9agmvklIw2StUVo_pZsKHV9mJMAHyBCwsQaIYQbifl4Z5cltjDJ/exec",
//             data: $("#gform").serialize(),
//             method: "post",
//             success: function (response) {
//                 alert("Form submitted successfully");
//                 window.location.reload();
//                 //window.location.href="https://google.com";
//             },
// error: function (err) {
//                 console.error("AJAX error:", err);
//                 alert("An error occurred while submitting the form. Please try again.");
//             }
//         });
//     } catch (error) {
//         console.error("Unexpected error:", error);
//         alert("Something went wrong. Please try again later.");
//     }
// });