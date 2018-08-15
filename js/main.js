const bot = new RiveScript();
bot.loadFile("brain.rive")
	.then(() => {
		console.log("Loading done!!");
		bot.sortReplies();
		document.querySelector("#submit").addEventListener("click", function () {
			let input = document.querySelector("#input").value;

			if (!input) return;

			bot.reply("local-user", input)
				.then((reply) => {
					let output = `
					<li>
						<span class='user'>You</span>
						<p class='message'>${input}</p>
					</li>
					<li>
						<span class='user'>Bot</span>
						<p class='message'>${reply}</p>
					</li>`;

					if (document.querySelector("#output div"))
						document.querySelector("#output").innerHTML = " ";
					document.querySelector("#output").innerHTML += output;
				})
		});
	})
	.catch((e) => {
		console.log(`Error: ${e}`);
	});