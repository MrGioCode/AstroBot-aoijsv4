module.exports = ({
    name: "unban",
    code: `
    <:tick:856950258219352075> | \`$userTag[$findUser[$message[1]]]\` desbaneado correctamente
$unban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se menciono una razon.];false;$messageSlice[1]]]
$onlyIf[$findUser[$message[1]]!=$authorID;<:cross_red:856744445395206144> | Tu ID no]
$onlyIf[$findUser[$message[1]]!=$clientID;<:cross_red:856744445395206144> | Mi ID no]
$onlyIf[$findUser[$message[1]]!=$ownerID;<:cross_red:856744445395206144> | ID no encontrada en la banlist]
$onlyIf[$isBanned[$findUser[$message[1]]]==true;<:cross_red:856744445395206144> | ID no encontrada en la banlist]
$argsCheck[>1;<:cross_red:856744445395206144> | Menciona al usuario que deseas desbanear]
$onlyPerms[ban;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[ban;<:cross_red:856744445395206144> | No cuento con el permiso necesario]`
})
