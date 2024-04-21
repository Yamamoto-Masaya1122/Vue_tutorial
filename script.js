let app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You load this page on' + new Date().toLocaleString() // app2.messageでmessageの値にアクセスできる。
  }
})