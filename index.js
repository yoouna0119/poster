$(document).ready(function() {

    let timeline = new TimelineMax({
        repeat: -1,
        yoyo: true }),
    
    feTurb = document.querySelector('#feturbulence');
    
    timeline.add(
    TweenMax.to(feTurb, 15, {
        onUpdate: function () {
        let bfX = this.progress() * 0.005 + 0.025, //base frequency x
        bfY = this.progress() * 0.05 + 0.1; //base frequency y
        feTurb.setAttribute('baseFrequency', `${bfX} ${bfY}`);
        } }),
    0);



    $('.water-bg').ripples({
        resolution: 700,
        dropRadius: 20, //px
        perturbance: 0.04,
    });

    /* setInterval(function() {
        var $el = $('body');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;

        $el.ripples('drop', x, y, dropRadius, strength);
    }, 600);   */
      

})