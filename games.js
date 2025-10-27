AFRAME.registerComponent('ball', {
    schema: {
        
    },

    init: function () {
      // Do something when component first attached.
      this.el.addEventListener('click', () => {
           const newBall = document.createElement("a-gltf-model");
           newBall.setAttribute("src", "#ball")
           newBall.setAttribute("obb-collider", "");
           newBall.setAttribute("class", "draggable");
           newBall.setAttribute("grap", "");
           newBall.setAttribute("position", "0 1 0");
           newBall.setAttribute("scale", "0.5 0.5 0.5");
           newBall.setAttribute("ammo-body", "type: dynamic; gravity: 0 -9.8 0");
           newBall.setAttribute("ammo-shape", "type: sphere");
              this.el.sceneEl.appendChild(newBall);
      });
    }
});

AFRAME.registerComponent('hidden', {
    init: function () {
        this.vid = document.querySelector('#vidd');
        this.vid2 = document.querySelector('#vid2');
        this.vids = ['#vid', '#vid2'];
        this.index = 0;
        this.el.addEventListener('click', () => {
            this.index = this.index + 1;
            if (this.index === 2){
                this.index = 0;
            }
            this.vid.setAttribute('src', this.vids[this.index]);
            this.vid.play();
            if (this.index === 0){
                this.vid2.pause();
            } else {
                this.vid2.play();
            }
            
        });
    }
});