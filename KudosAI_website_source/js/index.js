$( document ).ready(function(){
     showAll();
     $('#inputarticle').on('input', function(){
          let sentence = $(this).val().toLowerCase();

	  let titles = document.getElementsByClassName("card-title");
          let divs = $('.myDivs');
          showAll();
               for(let i = 0; i < divs.length; i++){

                    let div = divs[i];
		    let title = titles[i].innerText.toLowerCase();


                    if(title.includes(sentence))
                        $(div).show();
		    else 
			$(div).hide();
               
          }
     });
     function showAll(){
          let divs = $('.myDivs');
          for(let i = 0; i < divs.length; i++){
               let div = divs[i];
               $(div).show();
          }
     }
});

function sendMail() {

var templateParams = {
    from_name: "New Kudos AI subscriber",
    message: document.getElementById("emailInput").value,
	
};
console.log(document.getElementById("emailInput").value);
emailjs.send('service_k1ob3bf', 'template_nh74jz8', templateParams ) 
    .then((res) => {
	console.log("Success");
alert("Thank you for Subscribing to this Blog!");

       document.getElementById("emailInput").value="";
    })
.catch((err) => alert("Please fill the captcha!"));
}



function GetInTouch() {

var templateParams = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    subject: document.getElementById("subject").value,
    mail: document.getElementById("mail").value,
    message: document.getElementById("message").value,
	
};

emailjs.send('service_k1ob3bf', 'template_lmbrfrb', templateParams ) 
    .then((res) => {

alert("Your message was sent to Anas!");

       document.getElementById("fname").value="";
document.getElementById("lname").value="";
document.getElementById("subject").value="";
document.getElementById("mail").value="";
document.getElementById("message").value="";
    })
.catch((err) => alert("Please fill the captcha!"));
};


function onSubmit(token) {
         document.getElementById("subs").submit();
       };


/*     
function handleSubmit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);
      
        const value = Object.fromEntries(data.entries());
      
        console.log({ value });
        fetch('js/comment.json');
        fs.writeFileSync('js/comment.json', obj.join(',') , 'utf-8'); 

      }
      
      const form = document.getElementById('comment-form');
      form.addEventListener('submit', handleSubmit);
    
      
*/