class App{
    constructor(){
        let shop = new Shop()
        let channel = new Channel()

        let c = new Client(shop)
        let a = new Arno(shop)

        let cc = new Client(channel)
        let aa = new Arno(channel)

        shop.sendMessage()
        channel.sendMessage()

    }
}

window.addEventListener("load", ()=> new App())