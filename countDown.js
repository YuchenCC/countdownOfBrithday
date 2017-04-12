

var start = document.querySelector('#but')
var timeX
var years
start.addEventListener('click',function(){
    var value = document.querySelector('#valueDate').value
    console.log(value)
    if (value){
    but.style.display='none'
    valueDate.style.display='none'
    text.style.display='none'
    but1.style.display='inline-block'
    var id = setInterval(function(){
      countDown()
      if (timeX === 0)
      {
        clearInterval(id)
        but1.style.display='none'
        days.innerText = 'Welcome Your Birthday!'
        but.style.display='inline-block'
        valueDate.style.display='inline-block'
        text.style.display='inline-block'
      }
     let stop = document.querySelector('#but1')
    stop.addEventListener('click',function(){
      clearInterval(id)
      but1.style.display='none'       
      timeHours.innerText = '00'
      timeMinutes.innerText = '00'
      timeSeconds.innerText= '00'
      days.innerText = ' '
      but.style.display='inline-block'
      valueDate.style.display='inline-block'
      text.style.display='inline-block'
      
    })
    },1000)
    console.log('第 ' + id + ' 次使用')
    }
  else console.log('wrong')
    //alert('Please select your Birthday and click start! ')

 })
 
  
function countDown(){            
  var date = new Date()  
  //console.log(date)
  value = document.querySelector('#valueDate').value
  var brithday = new Date(value)
  var brithdayInit = brithday - date 
  //console.log( brithdayInit )

 // console.log(value)
  years = 0
  while (brithday.setFullYear(brithday.getFullYear() + 1) <= date)
{
    years++;
}
  brithday.setFullYear(brithday.getFullYear() - 1)    
  //console.log(brithday)
  timeX = (brithday - date)
  if(timeX<0){
    brithday.setFullYear(brithday.getFullYear() + 1) 
    timeX = (brithday - date) - 8*3600000
    }
  else timeX = timeX- 8*3600000
  //console.log(timeX)
  var hours = parseInt(timeX /3600000) 
  var hour = hours % 24
  var day = (hours - hour)/24
  //console.log(hour)
  //console.log(day)
  var minutes = parseInt((timeX -hours * 3600000)/60000)
  var seconds = parseInt((timeX -hours * 3600000 - minutes * 60000)/1000)
  //console.log(hours + "小时" + minutes + "分"+ seconds + "秒")
  
  if(minutes<10)
     timeMinutes.innerText = '0' + minutes
  else timeMinutes.innerText = minutes
  
  if(seconds<10)
     timeSeconds.innerText = '0' + seconds
  else timeSeconds.innerText = seconds
  
  if(hour<10)
     timeHours.innerText = '0' + hour
  else timeHours.innerText = hour
  if (brithdayInit > 0)
    {      
      days.innerText = day + ' ' + 'Days' + ' ' + 'You will born'
    }
  else days.innerText = day + ' ' + 'Days'
  console.log("你已经" + years + " 岁了");

  return timeX
  
}  

 


/*下为时间固定版，input日期 与 系统内置固定时间的倒计时

    
var start = document.querySelector('#but')
var timeX
var date = new Date(1984,3,17,23,59,50)//固定时间  
start.addEventListener('click',function(){
  
  var id = setInterval(function(){
    countDown()
    date.setSeconds(date.getSeconds() + 1)
    console.log(date)
    if (timeX === 0)
      clearInterval(id)
  }
  ,1000)
  
  
  })
  
function countDown(){            

  var value = document.querySelector('#value').value
  var brithday = new Date(value)
  console.log(value)
  var years = 0
  while (brithday.setFullYear(brithday.getFullYear() + 1) <= date)
{
    years++;
}  
  brithday.setFullYear(brithday.getFullYear() - 1) 
  console.log("相差" + years + "年");
  console.log(brithday)
  console.log(date); 
  timeX = (brithday - date)- 8*3600000
  console.log(timeX)
  var hours = parseInt(timeX /3600000)  
  var minutes = parseInt((timeX -hours * 3600000)/60000)
  var seconds = parseInt((timeX -hours * 3600000 - minutes * 60000)/1000)
  console.log(hours + "小时" + minutes + "分"+ seconds + "秒")
  timeHours.innerText = hours
  timeMinutes.innerText = minutes
  timeSeconds.innerText = seconds
  return timeX
}  

*/ 