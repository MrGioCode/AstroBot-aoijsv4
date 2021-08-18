module.exports = ({
    name: "verify",
    code: `
    <:tick:856950258219352075> | Usuario \`#$getServerVar[verifynum]\` verificado correctamente!
    $giveRoles[$authorID;$getServerVar[siverify]]
    $setServerVar[verifynum;$sum[$getServerVar[verifynum];1]]
    $onlyIf[$authorID!=$ownerID;<:cross_red:856744445395206144> | No puedo verificar al owner...]
    $onlyIf[$hasRoles[$authorID;$getServerVar[siverify]]==false;<:cross_red:856744445395206144> | Ya estas verificado]
    $onlyIf[$message[1]==$getServerVar[verifycode];<:cross_red:856744445395206144> | Codigo invalido]
    $argsCheck[>1;<:cross_red:856744445395206144> | No haz escrito el codigo de verificacion]
    $onlyForChannels[$getServerVar[verifych];<:cross_red:856744445395206144> | Solo en \`#$channelName[$getServerVar[verifych]]\`...]
    $onlyIf[$getServerVar[verifycode]!=;<:cross_red:856744445395206144> | No hay un codigo de verificaciones]
    $onlyIf[$getServerVar[siverify]!=;<:cross_red:856744445395206144> | No hay un rol de verificacion]
    $onlyIf[$getServerVar[verifych]!=;<:cross_red:856744445395206144> | No hay un canal de verificaciones]`
})