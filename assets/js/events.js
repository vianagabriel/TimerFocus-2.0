// Script onde fica os eventos!
export default function({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonStop,
  buttonPause,
  buttonIncrement,
  buttonDecrement,
  cardFlorest,
  cardRain,
  cardCoffeShop,
  cardFireplace,
  
}){

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
    
  })
  
  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
    
  })
  
  buttonStop.addEventListener('click', function () {
  
      controls.reset()
      timer.reset()
      sound.pressButton()

    })

    
    buttonIncrement.addEventListener('click', function () {
     timer.increment()
     
  
    })
  
    buttonDecrement.addEventListener('click', function (){
      timer.decrement()
      
    })
  
     cardFlorest.addEventListener('click', function(){
      sound.bgAudioNature.play()
      sound.bgAudioRain.pause()
      sound.bgAudioCoffeShop.pause()
      sound.bgAudioFireplace.pause()
      
    } )


    cardFlorest.addEventListener('dblclick', function(){
      sound.bgAudioNature.pause()
  
   } )
 
   cardRain.addEventListener('click', function(){
     sound.bgAudioRain.play()
     sound.bgAudioNature.pause()
     sound.bgAudioCoffeShop.pause()
     sound.bgAudioFireplace.pause()

   })

   cardRain.addEventListener('dblclick', function(){
    sound.bgAudioRain.pause()
   })
      
  cardCoffeShop.addEventListener('click' , function() {
    sound.bgAudioCoffeShop.play()
    sound.bgAudioRain.pause()
    sound.bgAudioNature.pause()
    sound.bgAudioFireplace.pause()

  })
  
  cardCoffeShop.addEventListener('dblclick', function(){
    sound.bgAudioCoffeShop.pause()
   })

   cardFireplace.addEventListener('click', function() {
     sound.bgAudioFireplace.play()
     sound.bgAudioRain.pause()
    sound.bgAudioNature.pause()
    sound.bgAudioCoffeShop.pause()

   })

   cardFireplace.addEventListener('dblclick', function() {
     sound.bgAudioFireplace.pause()
    })
  }
   

  

   
 

    