AFRAME.registerComponent('basket', {

    init: function () {
      this.text = document.querySelector('#scoreText');
        this.score = 0;
        this.el.addEventListener('obbcollisionstarted', (e) => {
            console.log('Collision with basket detected');
            this.score += 1;
            this.text.setAttribute('value', 'Score: ' + this.score);
        });
    },
});
