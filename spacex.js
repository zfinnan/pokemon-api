fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then (spaceXData => {
    console.log(spaceXData);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/launches/past')
.then(response => {
    return response.json();
})
.then (spaceXLaunches => {
    console.log(spaceXLaunches);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/cores/B1042')
.then(response => {
    return response.json();
})
.then (spaceXCore => {
    console.log(spaceXCore);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/history/1')
.then(response => {
    return response.json();
})
.then (spaceXHistory => {
    console.log(spaceXHistory);
})
.catch(error => {
    console.log(error);
})

