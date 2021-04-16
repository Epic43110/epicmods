var musicchanger = {
    'loaded': function() {
        if (longorshort == 1) {
            a0_0x4da7bd = 'https://mope.io/audio/music_game_LONG2.mp3'
        } else if (longorshort == 2) {
            a0_0x4da7bd = "https://media1.vocaroo.com/mp3/1bIvI83Lr1Jq"
        } else if (longorshort == 3) {
            a0_0x4da7bd = "https://mope.io/audio/music_menu.mp3"
        }
    },
    'checks': function() {
        if (typeof a0_0x342ddf != 'undefined') {
            setTimeout(musicchanger.loaded, 100);
            musicchanger.refvar = 0
        } else {
            setTimeout(musicchanger.checks, 50);
            musicchanger.refvar++
            if (musicchanger.refvar == 1) {
                setTimeout(function() {
                    if (musicchanger.refvar != 0) {
                        alert('The music changer script is out of date! Please wait until the script gets updated.');
                    }
                }, 15000)
            }
        }
    },
    'refvar': 0
}
