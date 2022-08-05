if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js').then(res => {
    console.log({ res })
    notify();
  })

  if (window.Notification) {
    Notification.requestPermission(status => {
      console.log("status", status)

    })
    
  } else {
    console.log("No")
  }

} else {
  console.log('Not supported!!!!')
}

function notify() {
  if (Notification.permission === 'granted') {
    console.log(1)
    navigator.serviceWorker.ready.then((reg) => {
      console.log(2)
      reg.showNotification("Ready")
    })
  }
}