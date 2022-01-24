/* մենք կարող ենք ստեղծելտարբեր class-ներ, որոնք 
կարող են լինել state-ի էլէմենտներ և այդ state-ի
միջոցով մենք կարող ենք փոփոխել ներքին իրավիճակը
առանձին էլեմենտների */
class Light {
    constructor(light) {
        this.light = light
    }
}
// լուսացույցի գույներ
//փոխենք հերթականությամբ

class RedLight extends Light {
    constructor() {
        super('red')
    }

    sign() {
        return 'Stop!'
    }
}
class YellowLight extends Light {
    constructor() {
        super('yellow')
    }

    sign() {
        return 'Warning!'
    }
}
class GreenLight extends Light {
    constructor() {
        super('green')
    }

    sign() {
        return 'Run!'
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new GreenLight(),
            new YellowLight(),
            new RedLight()
        ]
        this.current = this.states[0]
    }
    //գրենք լոգիկա, որը կորոշի լուսացույցի հերթափոխման հաջորդականությունը
    change() {
        const total = this.states.length
        let index = this.states.findIndex(light => light === this.current)

        if (index + 1 < total) {
            total.current = this.states[index + 1]
        } else {
            this.current = this.states[0]
        }
    }

    sign() {
        return this.current.sign()
    }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()
/*այստեղ ամեն անգամ լուսացույցի լույսերը կփոխվեն։ Կվառվի կանաչը, հետո
կարմիրը, հետո դեղինը և այդպես շարունակ։ Այս․ Run!, Stop!, Warning!
Այս․ էլ լոգիկա չենք գրում ամեն մի stat-ի համար, այլ օգտագործելով change-ը
փոփոխում ենք նշված հերթականությամբ*/
//օր․ rowting realisation...
