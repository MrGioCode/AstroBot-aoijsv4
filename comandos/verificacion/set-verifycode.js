module.exports = ({
    name: "set-verifycode",
    code: `
    <:tick:856950258219352075> | El codigo ha sido establecido ha \`$message\` correctamente!
    $setServerVar[verifycode;$message[1]]
    $onlyIf[$charCount[$message]<10;<:cross_red:856744445395206144> | Maximo 10 caracteres]
    $onlyIf[$checkContains[$message;@everyone;@here;@;#]==false;<:cross_red:856744445395206144> | Se ha prohibido algunas letras por seguridad y estabilidad]
    $onlyIf[$isEmoji[$message]==false;<:cross_red:856744445395206144> | No emojis]
    $argsCheck[>1;<:cross_red:856744445395206144> | Codigo no proporcionado]`
})