import * as React from "react"

const scrollIntoView = (id: string) => {
  document
    ?.getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop
  return 0
}

function elmYPosition(eID: string) {
  var elm = document?.getElementById(eID)
  var y = elm?.offsetTop
  var node = elm
  while (node?.offsetParent && node?.offsetParent != document?.body) {
    node = node?.offsetParent
    y += node?.offsetTop
  }
  return y
}

const smoothScroll = (eID: string) => {
  var startY = currentYPosition() || 0
  var stopY = elmYPosition(eID) || 0
  var distance = stopY > startY ? stopY - startY : startY - stopY
  if (distance < 100) {
    scrollTo(0, stopY)
    return
  }
  var speed = Math.round(distance / 50)
  if (speed >= 20) speed = 20
  var step = Math.round(distance / 25)
  var leapY = stopY > startY ? startY + step : startY - step
  var timer = 0
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed)
      leapY += step
      if (leapY > stopY) leapY = stopY
      timer++
    }
    return
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed)
    leapY -= step
    if (leapY < stopY) leapY = stopY
    timer++
  }
  return false
}

export default smoothScroll
