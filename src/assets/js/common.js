import FastClick from './fastclick.js'

// 设置rem
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

// 解决click延迟
window.addEventListener('load', () => FastClick.attach(document.body))

// 消除touchmove的错误
// 触摸时浏览器有个默认的事件，这个事件会阻断你的所有操作。所以在操作之前要先把默认事件除掉evt.preventDefault();否则怪异现象层出不穷。
document.documentElement.addEventListener('touchmove', e => e.touches.length && e.preventDefault())
