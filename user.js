/**
 * id: 1, mail: "test@mail.ru"
 */
class User {
    constructor(
        id = 0,
        mail = "",
    ) {
        this.id = id
        this.mail = mail
    }
}

export {User}