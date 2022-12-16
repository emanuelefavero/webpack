// NOTE: Thanks to rules in webpack.config.js, we are able to import CSS and images (and other assets) this way.
import './style.css'
import RickRollGif from './RickRoll.gif'

function textComponent() {
  const textElement = document.createElement('div')

  textElement.innerHTML = 'Hello webpack'
  textElement.classList.add('hello')

  return textElement
}

function imageComponent() {
  const imageElement = document.createElement('img')

  imageElement.src = RickRollGif
  imageElement.width = 250
  imageElement.height = 250

  return imageElement
}

document.body.appendChild(textComponent())
document.body.appendChild(imageComponent())
