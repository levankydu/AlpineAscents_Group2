expireDate = new Date
expireDate.setMonth(expireDate.getMonth()+6)
jcount = eval(cookieVal("jaafarCounter"))
jcount++
document.cookie = "jaafarCounter="+jcount+";expires=" + expireDate.toGMTString()

function cookieVal(cookieName) {
thisCookie = document.cookie.split("; ")
for (i=0; i<thisCookie.length; i++){
	if (cookieName == thisCookie[i].split("=")[0]){
		return thisCookie[i].split("=")[1]
	}
}
return 0;
}

function page_counter(){
for (i=0;i<(7-jcount.toString().length);i++)
document.write('<span class="counter">0</span>')
for (y=0;y<(jcount.toString().length);y++)
document.write('<span class="counter">'+jcount.toString().charAt(y)+'</span>')
}