function getUserData(id, callback) {
    setTimeout(() => {
        let data = {};
        if (id === 1) {
            data = {
                id: 1,
                name: 'John',
                lastName: 'Doe',
                age: 24
            }
        }
        if (id === 2) {
            data = {
                id: 2,
                name: 'Jane',
                lastName: 'Smith',
                age: 19
            }
        }
        callback(data)
    }, 1000)
}

getUserData(1, user => console.log(user));
getUserData(2, user => console.log(user));
