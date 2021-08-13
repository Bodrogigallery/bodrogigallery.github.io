var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      setTimeout((window.scrollBy(0, window.innerHeight)), 1000);
    } 
  });
}

function onSubmit(token) {
  document.getElementById("submit").submit();
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6Lfz-PkbAAAAABJV-27C88L5GqghIhXjsDysw9X9', {action: 'submit'}).then(function(token) {
        console.log(token);
        // Add your logic to submit to your backend server here.
    });
  });
}