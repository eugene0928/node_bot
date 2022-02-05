const { bot }  = require("../core/bot")

bot.start( (ctx) => {
    ctx.replyWithHTML("salom").then( res => console.log(res))
})