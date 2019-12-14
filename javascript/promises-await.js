function getInfo () {

	let user = {
		name: "Username",
		lastname: "UserlastName"
	};

	promise = new Promise ((resolve, reject) => {

		let userString = JSON.stringify (user);
		if (typeof userString != "string")
			reject ("error");
		else
			resolve (userString);
	});

	return (promise);
}

//USING THEN-CATCH
getInfo ()
	.then (data => {
		console.log (data);
	})
	.catch (message => {
		console.log (message);
	})

//USING ASYNC AWAIT
async function gettingInfo() {
	let data = await getInfo ();
	console.log (data);
} 

gettingInfo ();
	