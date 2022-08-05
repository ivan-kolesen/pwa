if (navigator.serviceWorker) {
  
  navigator.serviceWorker.register('./sw.js').then(res => {
    console.log({ res })
  })
} else {
  console.log('Not supported!!!!')
}