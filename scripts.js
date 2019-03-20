var app = {
	init: function(){
		//this.displayUser = this.displayUser.bind(this)

		this.getGithubData(this.displayUser, 'https://api.github.com/users/Nuorah');

	},

	displayUser: function (user) {
		userDiv = document.getElementById("user");
		imgProfil = document.createElement('img');
		divAvatar = document.getElementById('avatar');
		divNom = document.getElementById('nom');
		divLogin = document.getElementById('username');
		imgProfil.src = user.avatar_url;
		imgProfil.id = "imgProfil";
		imgProfil.addEventListener("click", function () {this.goRepositories(user.name)})
		divNom.innerHTML += user.name;
		divLogin.innerHTML += user.login;
		divAvatar.appendChild(imgProfil);
		userDiv.appendChild(divLogin);
	},


	goRepositories: function(){		
		console.log("click");
			//window.location = 'repositories.html?login=' + 'Nuorah';
			//this.getGithubData(this.displayRepositories, 'https://api.github.com/users/Nuorah/repos');
	
	},

	displayRepositories: function(repositories){
		repositoriesUl = document.getElementById("repositories");
		for (var i = repositories.length - 1; i >= 0; i--) {
			var repo = document.createElement('li')
			repo.innerHTML = repositories[i].name;
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

function app () {

	var self = this;

	var init = function () {}

}




