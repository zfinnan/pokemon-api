fetch('https://api.github.com/users/zfinnan')
.then(response => {
    return response.json();
});
.then(gitHubData => {
    console.log(gitHubData);
});
.catch(error => {
    console.log(error);
})
