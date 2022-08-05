import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddMinute,
  buttonRemoveMinute,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sounds()

Events({controls, timer, sound})

