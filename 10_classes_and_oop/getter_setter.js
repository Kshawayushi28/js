class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}ayushi`
    }
    set password(value){
        this._password=value
    }
}
const ayushi=new User("h@ayushi.ai","abc")
console.log(ayushi.password);
console.log(ayushi.email);
