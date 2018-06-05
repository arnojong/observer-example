class Shop implements Subject{
    observers:Observer[] = []
    constructor(){

    }
    subscribe(c:Observer){
        this.observers.push(c)
    }
    unsubscribe(c:Observer){
        // remove c from this.clients
    }
    sendMessage(){
        for(let c of this.observers){
            c.notify("game card")
        }
    }
}