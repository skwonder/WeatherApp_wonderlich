// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')
function timeClass(){
  var now=new Date()
  console.log(now)

  var hours=now.getHours()
  console.log(hours)

  if(hours >=6 && hours <12){
    console.log("morning")
    document.body.classList.add('morning')
  }else if(hours >=12 && hours <=17){
    console.log("afternoon")
    document.body.classList.add('afternoon')
  }else{
    console.log("night")
    document.body.classList.add('night')
    }
}
