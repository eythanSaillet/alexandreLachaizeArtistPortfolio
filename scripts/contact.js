console.log("lol")

let form = {

  // DOM element
  emailDiv : document.querySelector('.email'),
  nameDiv : document.querySelector('.name'),
  messageDiv : document.querySelector('.message'),

  // Button
  button1 : document.querySelector('.email img'),
  button2 : document.querySelector('.name img'),
  button3 : document.querySelector('.message img'),

  animation : function(){

    form.button1.addEventListener('click',function(){
      TweenMax.to(form.emailDiv,0.8,{ease: Power3.easeInOut, y:"10vh"})
      TweenMax.to(form.button1,0.2,{ease: Power3.easeInOut, opacity:0})
      TweenMax.to(form.nameDiv,0.8,{ease: Power3.easeInOut, y:"0vh"})
    })

    form.button2.addEventListener('click',function(){
      console.log("lol")
      TweenMax.to(form.emailDiv,1,{ease: Power3.easeInOut, y:"-100vh"})
      TweenMax.to(form.button2,1,{ease: Power3.easeInOut, opacity:0})
      TweenMax.to(form.nameDiv,1,{ease: Power3.easeInOut, y:"-100vh"})
      TweenMax.to(form.messageDiv,1,{ease: Power3.easeInOut, y:"-80vh"})
    })

  },

}
form.animation()
console.log(form)
