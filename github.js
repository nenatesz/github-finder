class GitHub {
  constructor() {
    this.client_id = "b031765c50ed563955d7";
    this.client_secret = "e82c80408754c09d9f34e5d76bca8e66cd5a3c2b";
    this.repos_count = 5;
    this.repos_sort = 'created: asc'

    
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();
    //  we will be returning an object because we also want to return the repos from here tooo. this an advantage of using  async/await, as oppose to callbacks where we would have to create a callback to return the profildata and another callback to return the repo
    return {
      profileData: profileData,
      reposData: reposData
    };
  }
}
