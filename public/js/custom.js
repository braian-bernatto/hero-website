//https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

var gauges = document.querySelectorAll('.single-chart')
gauges.forEach(function (gauge) {
  var value = gauge.getAttribute('value')

  let i = 0
  let myInterval = setInterval(() => {
    gauge.innerHTML = `<svg viewBox="0 0 36 36" class="circular-chart">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray="${i}, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">${i}%</text>
    </svg>`

    if (i < value) {
      i++
    } else {
      clearInterval(myInterval)
    }
  }, 30)
})
