// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')

function startTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  m = checkTime(m);
  document.getElementById('clock').innerHTML = h + ":" + m;
  var t = setTimeout(function() {
    startTime()
  }, 500);

  if (h < 11) document.getElementById("bgd").className = " morning";
  else if (h < 16) document.getElementById("bgd").className = " day";
  else if (h < 20) document.getElementById("bgd").className = " noon";
  else if (h < 24) document.getElementById("bgd").className = " night",
    document.getElementById("skydeco").style.display = "none";
  else if (h < 6) document.getElementById("bgd").className = " night",
    document.getElementById("skydeco").style.display = "none";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

startTime()
