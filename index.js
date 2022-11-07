const reqestURL = 'https://users-api-id.herokuapp.com/users'

const xhr = new XMLHttpRequest()

xhr.open('GET', reqestURL)
xhr.responseType = 'json'

xhr.onload = () => {
    console.log(xhr.response);
    const res = xhr.response;
    res.forEach((users) => genItem(users));
}
xhr.send()


function genItem (users) {
    console.log(users.name);
    const user = document.createElement('ul');
    const namePosition = document.createElement('div');
    const nameItem = document.createElement('div');
    const photoItem = document.createElement('img');
    const positionItem = document.createElement('div');
    user.classList.add('styleUser');
    photoItem.classList.add('src');
    photoItem.setAttribute('src', `${users.photo}`)
    nameItem.innerText = users.name;
    positionItem.innerText = users.position;
    namePosition.append(nameItem,positionItem);
    user.append(photoItem);
    user.append(namePosition);
    document.querySelector('ul').append(user);
}