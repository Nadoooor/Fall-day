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
