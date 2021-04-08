// init GitHub
const github = new GitHub();
// init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profileData.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found", "alert alert-danger");
        // you can also use the variable from the browser     
        // ui.showAlert("data.profileData.message", "alert alert-danger");
      } else {
        // show profile
        // console.log(data.profileData);
        ui.showProfile(data.profileData);
        console.log(data.reposData)
        ui.showRepos(data.reposData)
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
