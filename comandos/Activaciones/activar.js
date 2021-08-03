module.exports = ({
    name: "activar",
    code: `
$if[$message[1]==informacion]
<:tick:856950258219352075> | Categoria \`informacion\` activada correctamente!
$setServerVar[informacion;true]
$onlyIf[$getServerVar[informacion]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==seguridad]
<:tick:856950258219352075> | Categoria \`automoderacion\` activada correctamente!
$setServerVar[seguridad;true]
$onlyIf[$getServerVar[seguridad]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==establecer]
<:tick:856950258219352075> | Categoria \`establecer\` activada correctamente!
$setServerVar[establecer;true]
$onlyIf[$getServerVar[establecer]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==moderacion]
<:tick:856950258219352075> | Categoria \`moderacion\` activada correctamente!
$setServerVar[moderacion;true]
$onlyIf[$getServerVar[moderacion]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==configuracion]
<:tick:856950258219352075> | Categoria \`configuracion\` activada correctamente!
$setServerVar[configuracion;true]
$onlyIf[$getServerVar[configuracion]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==bienvenidas]
<:tick:856950258219352075> | Categoria \`bienvenidas\` activada correctamente!
$setServerVar[bienvenidas;true]
$onlyIf[$getServerVar[bienvenidas]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==despedidas]
<:tick:856950258219352075> | Categoria \`despedidas\` activada correctamente!
$setServerVar[despedidas;true]
$onlyIf[$getServerVar[despedidas]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$if[$message[1]==sugerencias]
<:tick:856950258219352075> | Categoria \`sugerencias\` activada correctamente!
$setServerVar[sugerencias;true]
$onlyIf[$getServerVar[sugerencias]==false;<:cross_red:856744445395206144> | La categoria ya esta activada]
$onlyPerms[admin;<:cross_red:856744445395206144> | No eres un administrador]
$endif
$argsCheck[>1;<:cross_red:856744445395206144> | Categoria no proporcionada. Uso: !activar {categoria}]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
})
