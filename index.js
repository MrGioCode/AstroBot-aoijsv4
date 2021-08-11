const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: "!",
    applicationCache: false,
    suppressAll: false
})

bot.onMessage();
bot.loadCommands("./comandos/")
bot.onJoined()
bot.onLeave()
bot.onMessageUpdate()
bot.onBanRemove()

//antiraid
bot.onChannelCreate()
bot.onBanAdd()
bot.onRoleCreate()


//variables
bot.variables({
    informacion: "false",
    seguridad: "false",
    establecer: "false",
    configuracion: "false",
    moderacion: "false",
    bienvenidas: "false",
    despedidas: "false",
    sugerencias: "false",
    //seguridad
    antiban: "off",
    antichannel: "off",
    antilink: "off",
    antiping: "off",
    antiroles: "off",
    antibot: "off",
    //moderacion
    warns: "0",
    muterole: "",
    //bienvenidas
    autorole: "",
    //configuracion
    createrolen: "No-Establecido",
    createchn: "No-Establecido",
    //chat global
    chatglobal: "",
    //buenvenidas y despedidas
    welcomech: "",
    welcomemsg: "($userTag) - Bienvenid@!",
    leavech: "",
    leavemsg: "($userTag) - Adios!",
    //sugerencias
    suggnum: "0",
    suggch: "",
    //Registros
    logsch: "",
    logsnum: "",
    //blacklist 
    blackl: "",
    blacklrazon: "No-Proporcionada",
})



bot.status({
    text: "En v2.0 beta!",
    type: "STREAMING",
    time: 12
})

