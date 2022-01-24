/* այստեղ մենք կստեղծենք ինչ-որ օբյեկտ(Subject), subscribe կլինենք
 դրան, դրանցից ինչ-որ մեկի վրա գործողություն կկիրառենք, և դրանով
 իսկ հանդերձ այդ ամենը կտարածվի բոլոր subscribe-ների վրա */
//ստեղծենք class
class Subject {
    constructor() {
        this.observers = []
    }
    //ստեղծենք մեթոդներ
    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    fire(changes) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(changes) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.state = this.initialState
        }
    }
}
const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs1)

stream$.fire({type:'INCREMENT'})//ավելացնել 1-ով
stream$.fire({type:'INCREMENT'})//ևս ավելացնել 1-ով
stream$.fire({type:'DECREMENT'})//պակասեցնել 1-ով
stream$.fire({type:'ADD', payload: 10})//ավելացնել 10-ով


console.log(obs1.state)//2 //3 //2 //12
console.log(obs2.state)//43 //44 //43 //53
/* ինչպես տեսնում ենք մի տեղում փոփոխություն անելով, որին որ
մենք subscribe ենք եղել, բոլոր տեղերում տեղի է ունենում փոփոխությունները */