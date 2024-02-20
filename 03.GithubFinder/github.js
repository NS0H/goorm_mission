class Github {
    constructor() {
        this.client_id = '6ed90a7d6e518e80f41a';
        this.client_secret = '19447eccbec950f2595028169068f9e84e71b080';
        this.respos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse =
          await fetch(
            `https://api.github.com/users/${user}
            ?client_id=${this.client_id}&client_secret=${this.client_secret}`
          );
        
        const repoResponse =
          await fetch(
            `https://api.github.com/users/${user}/repos
            ?per_page=${this.respos_count}&sort=${this.repos_sort}
            &client_id=${this.client_id}
            &client_secret=${this.client_secret}`
          );
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}

export default Github;