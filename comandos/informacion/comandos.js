module.exports = [({
   name: "comandos",
   code: `
$author[xAstroBot;$authorAvatar]
$description[

**Informacion**
> __!cmd \`inf\`__
**Seguridad**
> __!cmd \`seg\`__
**Establecer**
> __!cmd \`est\`__
**Configuracion**
> __!cmd \`con\`__
**Moderacion**
> __!cmd \`mod\`__
**Bienvenidas**
> __!cmd \`bvd\`__
**Despedidas**
> __!cmd \`dpd\`__
**Sugerencias**
> __!cmd \`sug\`__
**Verificacion**
> __!cmd \`vfy\`__

<:link:856765531382218772> | [invitacion](https://discord.com/api/oauth2/authorize?client_id=864965981290102784&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FkHv3dV3KeW&scope=bot) | [soporte](https://discord.gg/mKQGB6Q2VP) |]
$footer[Lista de categorias $addTimestamp;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$color[WHITE]`
}), ({
   name: "cmd",
   code: `
   $if[$message[1]==inf]
   $author[xAstroBot Informacion;$authorAvatar]
   $description[
   **serverinfo**
   > __!s-i__
   **botinfo**
   > __!b-i__
   **channelinfo**
   > __!ch-i__
   **userinfo**
   > __!u-i__
   **roleinfo**
   > __!r-i__
   **ping**
   > __!latencia__
   **hostinfo**
   > __!host__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==seg]
   $author[xAstroBot Seguridad;$authorAvatar]
   $description[
   **antiban**
   > __!antiban__
   **anticanales**
   > __!antich__
   **antibots**
   > __!antibot__
   **antiroles**
   > __!antiroles__
   **antiping**
   > __!antiping__
   **antienlaces**
   > __!antilinks__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==est]
   $author[xAstroBot Establecer;$authorAvatar]
   $description[
   **Establecer Autorol**
   > __!set-autorole \`[@role]\`__
   **Establecer Muterole**
   > __!set-mute \`[@role]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==con]
   $author[xAstroBot Configuracion;$authorAvatar]
   $description[
   **Dar Rol**
   > __!agregar-rol \`[@usuario]\` \`[@role]\`__
   **Clonar Canal**
   > __!clonar-canal__
   **Crear Canal**
   > __!crear-canal \`[nombre]\`__
   **Crear Rol**
   > __!crear-rol \`[nombre]\`__
   **Remover Rol**
   > __!remover-rol \`[@usuario]\` \`[@role]\`__
   **Establecer Nickname**
   > __!set-nombre \`[@usuario]\` \`[nuevo nombre]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==mod]
   $author[xAstroBot Moderacion;$authorAvatar]
   $description[
   **Banear**
   > __!ban \`[@usuario]\` \`[razon]\`__
   **Desbanear**
   > __!unban \`[@usuario]\`__
   **Silenciar**
   > __!mute \`[@usuario]\`__
   **Dessilenciar**
   > __!unmute \`[@usuario]\`__
   **Bloquear Canal**
   > __!lock__
   **Desbloquear Canal**
   > __!unlock__
   **Resetear Canal**
   > __!nuke__
   **Borrar Mensajes**
   > __!clear \`[cantidad]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==bvd]
   $author[xAstroBot Bienvenidas;$authorAvatar]
   $description[
   **Mostrar Guia**
   > __!guia-bienvenidas__
   **Establecer Canal**
   > __!set-bienvenidas \`[#canal]\`__
   **Establecer Mensaje**
   > __!set-msgbienvenidas \`[texto]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==dpd]
   $author[xAstroBot Despedidas;$authorAvatar]
   $description[
   **Mostrar Guia**
   > __!guia-despedidas__
   **Establecer Canal**
   > __!set-despedidas \`[#canal]\`__
   **Establecer Mensaje**
   > __!set-msgdespedidas \`[texto]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif
   
   $if[$message[1]==sug]
   $author[xAstroBot Sugerencias;$authorAvatar]
   $description[
   **Aceptar Sugerencia**
   > __!acc-sugg \`[id mensaje]\`__
   **Denegar Sugerencia**
   > __!den-sugg \`[id mensaje]\`__
   **Crear Sugerencia**
   > __!new-sugg \`[texto]\`__
   **Establecer Canal**
   > __!set-sugg \`[#canal]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif

   $if[$message[1]==vfy]
   $author[xAstroBot Sistema De Verificacion;$authorAvatar]
   $description[
   **Establecer Canal**
   > __!set-verifych \`[#canal]\`__
   **Establecer Rol Verificado**
   > __!set-siverify \`[@role]\`__
   **Establecer Codigo De Verificacion**
   > __!set-verifycode \`[texto]\`__
   **Verificar**
   > __!verify \`[codigo]\`__]
   $thumbnail[$userAvatar[$clientID]]
   $footer[$userTag $addTimestamp;$authorAvatar]
   $color[BLUE]
   $endif`
})]
