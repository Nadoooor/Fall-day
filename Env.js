console.log('Env component loaded');

AFRAME.registerComponent('env', {
    init: function () {
        console.log('Env component init');
    this.env = document.querySelector('#env');
    this.text = document.querySelector('#current');
    this.envs = ['forest', 'default', 'city', 'starry', 'arches', 'goaland', 'threetone', 'yavapai', 'goldmine', 'japan'];
    this.el.addEventListener('click', () => {
        console.log('Environment change clicked');
        const current = this.env.getAttribute('environment').preset;
        let index = this.envs.indexOf(current);
        index = index + 1;
        if (index === 10){
            index = 0;
        }
        this.env.setAttribute('environment', 'preset', this.envs[index]);
        this.text.setAttribute('value', 'Current Environment: ' + this.envs[index]);
    });
}});
