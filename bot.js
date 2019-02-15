const Discord = require('discord.js');

const Util = require('discord.js');

const prefix = "/";

   const adminprefix = "/v";
const devs = ['406076958980571147','369571367982727168'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`middle east store`,"/")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', message => { //معلومات السيرفر فيه برمشن 
if(message.content.startsWith(prefix +"server")){
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "mute")) { // ميوت مع برمشن 
     

        if (!message.member.hasPermission('MUTE_MEMBERS')) {
            message.channel.send(':lock: ``ليس لديك الصلاحيات الكافية لعمل ميوت ``');
            return;
        }

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply('``ليس لدي الصلاحيات الكافية ``')
        }
        const msmute = require('ms');
        let reasonMute = message.content.split(' ').slice(3).join(' ');
        let timeMute = message.content.split(' ')[2];
        let guildMute = message.guild;
        let adminRoleMute = guild.roles.find("name", "log");
        let memberMute = message.guild.member;
        let userMute = message.mentions.users.first();
        let muteRoleMute = client.guilds.get(message.guild.id).roles.find('name', 'muted');
   

        if (!muteRoleMute) {
            return message.reply('``انشأ رتبة ميوتيد "muted"``');
        }

        if (message.mentions.users.size < 1) {
            return message.reply('``منشن شخص.``');
        }
        if (message.author.id === userMute.id) {
            return message.reply('``لا يمكن استخدامه على نفسك``  :wink:');
        }
        if (!timeMute) {
            return message.reply('``/mute [@mention] [1m] [reason]``ارسل مدة الميوت مثال');
        }
        if (!timeMute.match(/[1-60][s,m,h,d,w]/g)) {
            return message.reply('``/mute [@mention] [1m] [reason]`` اكتب وقت صحيح مثال');
        }
        if (!reasonMute) {
            return message.reply(' ``/mute [@mention] [15m] [reason]``*اعطيني سبب الميوت مثال');
        }
        if (reasonMute.time < 1) {
            return message.reply('TIME?').then(message => message.delete(2000));
        }
        if (reasonMute.length < 1) {
            return message.reply('``اعطيني سبب الميوت``');
        }
        message.guild.member(userMute).addRole(muteRoleMute)

        setTimeout(() => {
            message.guild.member(userMute).removeRole(muteRoleMute)
        }, msmute(timeMute));
        message.guild.channels.filter(textchannel => textchannel.type === 'text').forEach(cnl => {
            cnl.overwritePermissions(muteRoleMute, {
                SEND_MESSAGES: false
            });
        });

        message.reply("تم اعطاء الشخص  ميوت.");

       message.channel.send({embed: {
            color: 16745560,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: 'Mute',
                value: `**Muted:**${userMute.username}#${userMute.discriminator}\n**Moderator:** ${message.author.username}\n**Duration:** ${msmute(msmute(timeMute), {long: true})}\n**Reason:** ${reasonMute}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "middle east bot "//اسم البوت 
            }
          }
        });
		




client.on('message', message => {
    if (message.content.startsWith("-unmute")) {
    

        let guildUnmute = message.guild;
        let argsUnmute = message.content.split(' ').slice(1);
      
        if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: ليس لدي الصلاحيات الكافية  ')
        }
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: ليس لدي الصلاحيات الكافية  ')
        }
        let userUnmute = message.mentions.users.first();
        let muteRoleUnmute = client.guilds.get(message.guild.id).roles.find('name', 'muted');
        if (message.mentions.users.size < 1) {
            return message.reply('منشن شخص');
        }
        message.guild.member(userUnmute).removeRole(muteRoleUnmute).then(() => {
            message.reply(` تم فك الميوت عن  ${userUnmute}`);
        });
    }
});





		
		client.on('message', message => {
    if (message.content == (prefix + "ban")) { //بان مع برمشن
               

        const mmss = require('ms');
        let reason = message.content.split(' ').slice(3).join(' ');
        let time = message.content.split(' ')[2];
        let guild = message.guild;
        let adminRoleban = guild.roles.find("name", "log");
        let usermention = message.mentions.users.first();

        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: ``ليس لديك صلاحيات كافية لعمل بان ``')
        }

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: ``ليس لدي الصلاحيات الكافية للتبنيد``')
        }

    

        if (message.mentions.users.size < 1) {
            return message.reply('منشن شخص')
        }

        if (message.author.id === usermention.id) {
            return message.reply('``لا يمكن تبنيد نفسك`` :wink:')
        }

        if (!time) {
            return message.reply(` ``\ban [@mention] [1d] [Reason]`` مدة البان؟ مثال`)
        }

        if (!time.match(/[1-7][s,m,h,d,w]/g)) {
            return message.reply(`  ``/ban [@mention] [1m] [Reason]``ارسل وقت صحيح مثال `)
        }

        if (!reason) {
            return message.reply(```ارسل السبب مع تطبيق المثال```)
        }

        if (!message.guild.member(usermention).bannable) {
            return message.reply('This member is above me in the `role chain` Can\'t ban them')
        }

        message.reply("تم التبنيد من السيرفر");

        usermention.send(`You've just got banned from ${guild.name}  \n State reason: **${reason}** \n **Disclamer**: If the ban is not timed and Permanent you may not appeal the **BAN**!`)
        message.guild.ban(usermention, 7);
        setTimeout(() => {
            message.guild.unban(usermention.id);
        }, mmss(time));
       message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Ban:",
                value: `**Banned:** ${usermention.username}#${usermention.discriminator}\n**Moderator:** ${message.author.username} \n**Duration:** ${mmss(mmss(time), {long: true})} \n**Reason:** ${reason}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "middle east bot"// اسم البوت 
            }
          }
        });
    }
});



client.on('message', message => {   //اخفاء الروم 
    var prefix = "-";
          if(message.content === prefix + "hide") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ما عندك صلاحيات ادمين :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('تم اخفاءالروم بنجاح ! :white_check_mark:  ')
     }
    });//////////////////Mal Team  By:Mal Mahmoud-QuaStyle

    client.on('message', message => { //اظهار الروم
    var prefix = "-";
          if(message.content === prefix + "show") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ما عندك صلاحيات ادمين :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('تم ')
     }
    });

client.login(process.env.BOT_TOKEN);	    
