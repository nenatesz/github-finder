class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
 </div>
    <div class="col-md-9">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
    <span class="badge badge-success">Following: ${user.following}</span>
    <span class="badge badge-info">Followers: ${user.followers}</span>
    <br></br>
    <ul class="list-group">
    <li class="list-group-item">Name: ${user.name}</li>
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">Blog: ${user.blog}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    <li class="list-group-item">Member since: ${user.created_at}</li>
    </ul>
    </div>
    </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
`;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `
      <div class="card card-body">
      <div class="row">
      <div class="col-md-6">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-info">${repo.stargazers_count}</span>
      <span class="badge badge-success">${repo.watchers_count}</span>
      <span class="badge badge-primary">${repo.forks}</span>
      </div>
      </div>
      </div>
      `;
      document.getElementById("repos").innerHTML = output;
    });
  }

  //    show alert message
  showAlert(message, className) {
    //   clear any remaining alert
    this.clearAlert();
    //    craete div
    const div = document.createElement("div");
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    //  to insert the div created we need to get a parent; this is gotten from the html
    const container = document.querySelector(".searchContainer");

    //  after getting the parent we want to tell where exactly to put the created element
    const search = document.querySelector(".search");
    // insert the alert (div created)
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  //  clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
