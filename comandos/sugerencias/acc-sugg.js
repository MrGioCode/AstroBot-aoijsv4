module.exports = ({
   name: "acc-sugg",
   code: `
$editMessage[$message[1];{author:Sugerencia Aceptada!:$authorAvatar}{description:$getEmbed[$getServerVar[suggch];$message[1];description]}{field:Aceptada Por:**[<@$authorID>]**}{footer:sugerencia aprobada:$authorAvatar}{color:GREEN};$getServerVar[suggch]]
$suppressErrors[<:cross_red:856744445395206144> | No he podido denegar la sugerencia]
$argsCheck[>1;<:cross_red:856744445395206144> | ID del mensaje no proporcionado]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]`
})
