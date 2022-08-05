import{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinute,
  buttonRemoveMinute,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from "./elements.js"

export default function({controls, timer, sound}){

  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.buttonPress()
  })

  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.buttonPress()
  })

  buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.buttonPress()
  })

  buttonAddMinute.addEventListener('click', function(){
    controls.addMinutes()
    sound.buttonPress()
  })

  buttonRemoveMinute.addEventListener('click', function(){
    controls.removeMinutes()
    sound.buttonPress()
  })

  buttonForest.addEventListener('click', function(){
    controls.forestActive()
    sound.resetAudio()
    sound.forestAudio.play()
  })

  buttonRain.addEventListener('click', function(){
    controls.rainActive()
    sound.resetAudio()
    sound.rainAudio.play()
  })

  buttonCoffeeShop.addEventListener('click', function(){
    controls.coffeeShopActive()
    sound.resetAudio()
    sound.coffeeShopAudio.play()
  })

  buttonFireplace.addEventListener('click', function(){
    controls.fireplaceActive()
    sound.resetAudio()
    sound.fireplaceAudio.play()
  })
}
