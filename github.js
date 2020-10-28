const container = document.querySelector('.container');

fetch('https://api.github.com/users/zfinnan')
.then(response => {
    return response.json();
})
.then(gitHubData => {
    const zachObj = {
        bio: gitHubData.bio,
        username: gitHubData.login,
        name: gitHubData.name
    }
    console.log(zachObj);

    const newElement = document.createElement('p');
    newElement.textContent = zachObj.name;
    container.appendChild(newElement);
})
.catch(error => {
    console.log(error);
})
