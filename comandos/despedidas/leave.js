module.exports = ({
    channel: "$getServerVar[leavech]",
    code: `
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemsg];{user_tag};$userTag];{user_name};$username];{user_mention};<@$authorID>];{members_count};$membersCount]`,
    type: 'leaveCommand'
})
