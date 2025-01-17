// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const friendsList = [];
const friendsListElement = document.getElementById('listaAmigos');
const resultElement = document.getElementById('resultado');

function agregarAmigo() {
    const friendName = document.getElementById('amigo').value;
    if (friendName === '') {
        alert('Debes ingresar un nombre');
        return;
    }

    friendsList.push(friendName);
    document.getElementById('amigo').value = '';
    showFriendsList();
}

function showFriendsList() {
    friendsListElement.innerHTML = '';
    friendsList.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsListElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (friendsList.length === 0) {
        alert('Debes agregar amigos primero');
        return;
    }

    friendsListElement.innerHTML = '';

    const friendIndex = getRandomListIndex(friendsList.length);
    const randomFriend = friendsList[friendIndex];

    resultElement.innerHTML = `El amigo secreto sorteado es: ${randomFriend}`;
}

function getRandomListIndex(listLength) {
    return Math.floor(Math.random() * listLength);
}