import { LightningElement } from 'lwc';

// * GitHub API Base URL
const GITHUB_URL = 'https://api.github.com/users/';

export default class GithubInfo extends LightningElement {

    username;
    user = {};

    // * This method will return if the user object is populated or not
    get userPopulated() {
        return this.user && this.user.id;
    }

    // * This method will return the github url for the searched user
    get githubURL() {
        return 'https://www.github.com/' + this.username;
    }

    // * This method will set the username as the user is typing the text in the input field
    updateUsername(event) {
        this.username = event.target.value;
    }

    // * This method is used to call GitHub API using fetch method and get the user details
    getGithubStats() {
        if(this.username) {
            this.user = {};
            fetch(GITHUB_URL + this.username)
            .then(response => {
                console.log(response);
                if(response.ok) {
                    return response.json();
                } else {
                    throw Error(response);
                }
            })
            .then(githubUser => {
                this.user = {
                    id: githubUser.id,
                    name: githubUser.name,
                    image: githubUser.avatar_url,
                    blog: githubUser.blog,
                    about: githubUser.bio,
                    repos: githubUser.public_repos,
                    gists: githubUser.public_gists,
                    followers: githubUser.followers
                };
            })
            .catch(error => console.log(error))
        } else {
            alert('Please specify a username');
        }
    }

}