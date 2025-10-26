
console.log('Inter.js loaded');


AFRAME.registerComponent('Grap', {
    schema: {
        
    },

    init: function () {
        this.isDrag = false;
        this.cam = document.querySelector('#cam');

        this.addEventListener('click', () => {
            const b = this.el.body;
            if (!b || !this.cam) return;

            if (!this.isDrag) {
                b.setGravity(new Ammo.btVector3(0, 0, 0));
                b.activate();
            } else {
                b.setGravity(new Ammo.btVector3(0, -9.8, 0));
                b.activate();
            }    
        });
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
        if (this.isDrag) return;

        const cam = this.cam;
        const bo = this.el.body;
        if (!bo || !cam) return;
        const campos = new THREE.Vector3();
        cam.object3D.getWorldPosition(campos);

        const camdir = new THREE.Vector3();
        cam.object3D.getworldQuaternion(camdir);

        const graped_item = new THREE.Vector3();
        cam.object3D.getWorldDirection(graped_item);
        campos.add(graped_item.multiplyScalar(-2));

        const trans= new Ammo.btTransform();
        trans.setIdentity();
        trans.setOrigin( new Ammo.btVector3( campos.x, campos.y, campos.z ) );
        trans.setRotation(new Ammo.btQuaternion( camdir.x, camdir.y, camdir.z, camdir.w ));

        bo.setWorldTransform(trans);
        bo.activate();

        this.el.object3D.position.copy(campos);
        this.el.object3D.quaternion.copy(camdir);
    }
});

