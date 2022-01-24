//prototype pattern
const car = {
    wheels: 4,
    init() {
        console.log(`I have a ${this.wheels} whee
        , my owner is ${this.owner}`)
    }
}

//էստեղ մենք չունենեք owner հատկություն, որը կստեղծենք հիմա
const carWithOwner = Object.create(car, {
    owner: {
        value: "Hamlet"
    }
})

//կկանչենք carWithOwner-ին
carWithOwner.init()

//կհամեմատենք, արդյոք carWithOwner-ի protoype car-ն է
console.log(carWithOwner.__proto__ === car)