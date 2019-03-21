var app = {
	init: function(){
		this.getGithubData(this.displayUser, 'https://api.github.com/users/Nuorah');
	},

	initRepositories: function(){
		var url = new URL(window.location);
		var login = url.searchParams.get('login');
		this.getGithubData(this.displayRepositories, 'https://api.github.com/users/' + login + '/repos')
	},

	displayUser: function (user) {
		userDiv = document.getElementById("user");
		imgProfil = document.createElement('img');
		divAvatar = document.getElementById('avatar');
		divNom = document.getElementById('nom');
		divLogin = document.getElementById('username');
		imgProfil.src = user.avatar_url;
		imgProfil.id = "imgProfil";
		imgProfil.addEventListener("click", function () {
			window.location = 'repositories.html?login=' + user.login;
			;})
		divNom.innerHTML += user.name;
		divLogin.innerHTML += user.login;
		divAvatar.appendChild(imgProfil);
		userDiv.appendChild(divLogin);
	},


	goRepositories: function(){		
		console.log("click");		

	},

	displayRepositories: function(repositories){
		console.log(repositories);
		repositoriesUl = document.getElementById("repositories");
		for (var i = repositories.length - 1; i >= 0; i--) {
			var repo = document.createElement('li')
			if(repositories[i].description != null){
				repo.innerHTML = repositories[i].name + " : " + repositories[i].description;
			} else {
				repo.innerHTML = repositories[i].name
			}
			repositoriesUl.appendChild(repo);

		}
	},

	getGithubData: function (cb, url) {
		const req = new XMLHttpRequest();
		req.onreadystatechange = function(event) {
			if (this.readyState === XMLHttpRequest.DONE) {
				if (this.status === 200) {
					console.log("Réponse reçue");
					cb(JSON.parse(this.response))
				} else {
					console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
				}
			}
		};
		req.open('GET', url, true);
		req.send(null)
	}

}





