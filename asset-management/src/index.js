import './style.css'
import { myName } from './myName'

function component() {
  const element = document.createElement('div')

  element.innerHTML = myName('John')
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())
