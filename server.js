const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
token: "token-aqui",
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
    //verify system
    verifych: "",
    verifynum: "0",
    verifycode: "",
    siverify: "",
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
    //encuestas
    pollsch: "",
    pollsnum: "0",
    //Registros
    logsch: "",
    logsnum: "",
    //Confesiones
    confesiones: "",
    //blacklist 
    blackl: "",
    blacklrazon: "No-Proporcionada",
})



bot.status({
    text: "moderando $serverCount servidores!.",
    type: "STREAMING",
    time: 12
})

