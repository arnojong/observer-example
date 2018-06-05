class Client implements Observer{
    private shop:Subject
    constructor(s:Subject){
        this.shop = s
        this.shop.subscribe(this)
    }
    notify(p:string){
        console.log(p+" is in shop")
    }
}

class Arno implements Observer{
    private shop:Subject
    constructor(s:Subject){
        this.shop = s
        this.shop.subscribe(this)
    }
    notify(p:string){
        console.log("Arno krijgt een " + p)
    }
}