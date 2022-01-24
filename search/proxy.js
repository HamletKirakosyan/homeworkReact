/*proxy pattern-ները մեզ հնարավորություն են տալիս մի շարք
գործողությունների արդյունքում խուսափել սերվեր ավելորդ հարցում ուղղարկելուց*/
function networkFetch(url) {
    return `${url}- response from server`
}

//ստեղծենք քեշ և դնենք պայման
const cash = new Set()
const proxiedFetch = new Proxy(networkFetch, 
    {apply(target, thisArg, args) {
        const url = args[0]
        if (cash.has(url)) {
            return `${url}- response from cashe`
        } else {
            cash.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch("angular.io")) //response from server
console.log(proxiedFetch("react.io")) //response from server
console.log(proxiedFetch("angular.io")) //response from cash, այստեղ պատասխանը քեշից է
