const IMAGE_URL ="https://placehold.co/200";

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]

const container =document.querySelector('#container');

users.forEach(user =>{
    const card = document.createElement('div')
    card.innerHTML = `
    <img src='${IMAGE_URL}'>
    <h3>${user.user_name}</h3>    
    <h4>${user.description}</h4>
    <h3>${user.age}</h3>
    `
    container.appendChild(card)
});