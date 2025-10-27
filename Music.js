AFRAME.registerComponent('music', {
    
    init: function () {
        this.cur = document.querySelector('#curs');
        this.musics = ['Music/1.wav', 'Music/2.mp3', 'Music/3.wav'];
        this.el.addEventListener('click', () => {
            console.log('Music box clicked');
            const currsong = this.cur.getAttribute('sound').src;
            let index = this.musics.indexOf(currsong);
            index = index + 1;
            if (index === 3){
                index = 0;
            }
            this.cur.setAttribute('sound', 'src', this.musics[index]);
        });
    },
});
