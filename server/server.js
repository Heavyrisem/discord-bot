const voicechannel = require('../VoiceChannel/VoiceChannel');
const getyoutube = require('../VoiceChannel/getyoutube');


class server extends voicechannel {
    constructor(client, message) {
        try {
            super();
            var e = this;

            this.client = client;
            this.servername = message.guild.name;
            this.message = message;

            this.serversetting = {
                'prefix': '!',
                'autoleave': 3000,
            }

            this.voiceChannel = {
                join() {e.Join()},
                now() {e.Now()},
                leave() {e.Leave()},
                addmusic_url(target) {e.addmusic(target)},
                autoleave: undefined,
                playSong: {
                    playing: false,
                    streamOption: {
                        seek: 0,
                        volume: 50
                    },
                    connection: undefined,
                    dispatcher: undefined,
                    queue: [],
                },
                show_queue() {e.queue_show()}
            };
        } catch(error) {
            this.errorhandler(error);
        }
    }

    holdPing() {
        var e = this;
        setInterval(function() {
            e.client.user.setActivity('ping ' + e.client.ping);
        }, 1000);
    }

    errorhandler(msg) {
        const errormsg = new Discord.RichEmbed()
        .setColor('#ff148e')
        .setTitle('⚠️ [server Class] constructor() 에서 오류가 발생했어요.')
        .setDescription(msg)
        .setTimestamp();
  
        message.channel.send(errormsg);
    }
}

module.exports = server;