import TWEEN, { Tween, Group } from '@tweenjs/tween.js'

const circle1 = document.getElementsByClassName('tween-1')[0]
const circle2 = document.getElementsByClassName('tween-1')[1]

const pos1 = {
  x: 0,
}
const pos2 = {
  x: 1,
}

const group = new Group()
const circle1Tween = new Tween(Object.assign({}, pos1), group)
  .to(pos2, 1000)
  .onUpdate(o => changeCircle(circle1, o))
  .easing(TWEEN.Easing.Bounce.Out)
const circle2Tween = new Tween(Object.assign({}, pos1), group)
  .to(pos2, 1000)
  .onUpdate(o => changeCircle(circle2, o))

circle1Tween.chain(circle2Tween.delay(1000)).start()
console.log(TWEEN.getAll())
// circle1Tween.chan(circle1Tween)
;(function animate() {
  window.requestAnimationFrame(animate)
  group.update()
})()
// console.log(circle1Tween)

function changeCircle(circle, o) {
  console.log(o)
  circle.style.transform = `translateX(${o.x * 500}%)`
}
