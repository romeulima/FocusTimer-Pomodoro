import state from './state.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sound from './sounds.js'

export function toggleRunning(){
    sound.buttonPressAudio.play()
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset(){
    sound.buttonPressAudio.play()

    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set(){
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function toggleMusic(){
    state.isMute = !state.isMute
    document.documentElement.classList.toggle('music-on')

    if(!state.isMute){
        sound.bgAudio.play()
        return
    }

    sound.bgAudio.pause()

}