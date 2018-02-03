var flag = 0;
var count = 0;

var bot = new RiveScript();
bot.loadFile("brain.rive", loading_done, loading_error);

function loading_done () {
	console.log("Loading done!!");
	bot.sortReplies();
	flag = 1;
}


function loading_error () {
	console.log("error occured");
}

document.querySelector("#submit").addEventListener("click", function(){
	var input = document.querySelector("#input").value;

	if(!input || flag == 0) return;

	var reply = bot.reply("local-user", input);
	console.log("Bot: " + reply);

	var output = "<li><span class='user'>You</span><p class='message'>"+input+"</p></li>";
	output += "<li><span class='user'>Bot</span><p class='message'>"+reply+"</p></li>";

	if(count++ == 0)
		document.querySelector("#output").innerHTML = " ";
	document.querySelector("#output").innerHTML += output;
});

