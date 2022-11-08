const reqestURL = 'https://users-api-id.herokuapp.com/users'

const xhr = new XMLHttpRequest()

xhr.open('GET', reqestURL)
xhr.responseType = 'json'

xhr.onload = () => {
    console.log(xhr.response);
    const res = xhr.response;
    res.forEach((users) => renderItem(users));
}
xhr.send()


function renderItem (users) {
    console.log(users.name);
    const user = document.createElement('ul');
    const divForNamePosition = document.createElement('div');
    const userName = document.createElement('div');
    const userPhoto = document.createElement('img');
    const userPosition = document.createElement('div');
    user.classList.add('styleUser');
    userPhoto.classList.add('src');
    userPhoto.setAttribute('src', `${users.photo}`)
    userName.innerText = users.name;
    userPosition.innerText = users.position;
    divForNamePosition.append(userName,userPosition);
    user.append(userPhoto);
    user.append(divForNamePosition);
    document.querySelector('.list-users').append(user);
}