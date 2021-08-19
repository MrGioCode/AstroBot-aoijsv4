module.exports = ({
   name: "del-poll",
   code: `
$channelSendMessage[$channelID;<:tick:856950258219352075> | Encuesta eliminada en \`#$channelName[$getServerVar[pollsch]]\` correctamente!]
$deleteMessage[$getServerVar[pollsch];$message[1]]
$suppressErrors[<:cross_red:856744445395206144> | No he podido eliminar la encuesta]
$argsCheck[>1;<:cross_red:856744445395206144> | ID del mensaje no proporcionado]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]`
})