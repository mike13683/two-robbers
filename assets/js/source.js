$(document).ready(function(){

    // hero
    let tl = new TimelineLite();

    tl.fromTo(".header-text h1", 1.5, {autoAlpha:0, left:50}, {autoAlpha:1, left:0})
        .fromTo(".header-text a", 1.5, {autoAlpha: 0, right:50}, {autoAlpha:1, right:0}, "-=1.5")
        .fromTo(".craft__content", 1.5, {autoAlpha:0, top:"62%"}, {autoAlpha:1, top:"50%"},"-=0.5")
        .fromTo(".craft__media img",1.5,{autoAlpha:0,transformOrigin:"right", x: 100}, {autoAlpha:1, x:"0"},"-=1.5")
    ;

    // Moves up
    let controllerUpTween = new ScrollMagic.Controller();

    $(".upScene-js").each(function(){
        let upScene = new ScrollMagic.Scene({
            triggerElement:this,
            triggerHook:0.8
        })
            .addIndicators({
                name:"trigger up"
            })
            .setTween(TweenMax.fromTo(this, 1, {autoAlpha:0, y:40}, {autoAlpha:1, y:0}))
            .addTo(controllerUpTween)
    })

    // awaveawake
    let controller = new ScrollMagic.Controller();

    let awaveawakeTween = TweenMax.staggerFromTo(".stagger-js .col-lg-3", 1, {autoAlpha:0, y:40}, {autoAlpha:1, y:0},0.8);

    let sceneAwaveawake = new ScrollMagic.Scene({
        triggerElement:".stagger-js",
        triggerHook:0.7
    })

        .addIndicators({
            name:"stutter"
        })
        .setTween(awaveawakeTween)
        .addTo(controller)

    // want to char

    let controllerChat = new ScrollMagic.Controller();
    let tweenChat = TweenMax.fromTo(".chat-bg-colour-js", 1, {backgroundColor:"#F28729"}, {backgroundColor:"#343A40"})

    let sceneChat = new ScrollMagic.Scene({
        triggerElement:".chat-bg-colour-js",
        triggerHook:0.8
    })

        .addIndicators({
            name: "chat"
        })
        .setTween(tweenChat)
        .addTo(controllerChat)

});


