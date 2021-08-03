module.exports = ({
    name: "desactivar",
    code: `
$if[$message[1]==informacion]
<:tick:856950258219352075> | Categoria \`informacion\` desactivada correctamente!
$setServerVar[informacion;false]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==seguridad]
<:tick:856950258219352075> | Categoria \`seguridad\` desactivada correctamente!
$setServerVar[seguridad;false]
$onlyIf[$getServerVar[seguridad]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==establecer]
<:tick:856950258219352075> | Categoria \`establecer\` desactivada correctamente!
$setServerVar[establecer;false]
$onlyIf[$getServerVar[establecer]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==moderacion]
<:tick:856950258219352075> | Categoria \`moderacion\` desactivada correctamente!
$setServerVar[moderacion;false]
$onlyIf[$getServerVar[moderacion]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==configuracion]
<:tick:856950258219352075> | Categoria \`configuracion\` desactivada correctamente!
$setServerVar[configuracion;false]
$onlyIf[$getServerVar[configuracion]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==bienvenidas]
<:tick:856950258219352075> | Categoria \`bienvenidas\` desactivada correctamente!
$setServerVar[bienvenidas;false]
$onlyIf[$getServerVar[bienvenidas]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==despedidas]
<:tick:856950258219352075> | Categoria \`despedidas\` desactivada correctamente!
$setServerVar[despedidas;false]
$onlyIf[$getServerVar[despedidas]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==sugerencias]
<:tick:856950258219352075> | Categoria \`sugerencias\` desactivada correctamente!
$setServerVar[sugerencias;false]
$onlyIf[$getServerVar[sugerencias]==true;<:cross_red:856744445395206144> | La categoria ya esta desactivada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$argsCheck[>1;<:cross_red:856744445395206144> | Categoria no proporcionada. Uso: !desactivar {categoria}]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
})
