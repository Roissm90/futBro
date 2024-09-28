gsap.registerPlugin(ScrollTrigger)

// EXAMPLE DATA USAGE: 
//<p class="fadein-up" data-anim-duration="3" data-anim-start="top 50%" data-anim-ease="bounce.out" data-anim-size="380">Example</p>


// ****** FADE IN ANIMATION ******
const fadeinElements = $('.fadein');
for (let index = 0; index < fadeinElements.length; index++) {
    let fadeinElement = fadeinElements[index]
    

    gsap.set(fadeinElement, {
        opacity: 0,
    })

    gsap.to(fadeinElement, {
        scrollTrigger: {
            trigger: fadeinElement,
            start: fadeinElement.dataset.animStart || 'top 85%',
            toggleActions: 'play none none reverse',
        },
        opacity: 1,
        duration: fadeinElement.dataset.animDuration || 0.3,
        ease: fadeinElement.dataset.animEase || 'expo.out'
    });
}

// ****** FADE IN UP ANIMATION ******
const fadeinupElements = $('.fadein-up');
for (let index = 0; index < fadeinupElements.length; index++) {
    let fadeinupElement = fadeinupElements[index]
    
    gsap.from(fadeinupElement, {
        scrollTrigger: {
            trigger: fadeinupElement,
            start: fadeinupElement.dataset.animStart || 'top 85%', // Cambia el punto de inicio (aparecerán antes)
            toggleActions: 'play none none reverse',
        },
        y: fadeinupElement.dataset.animSize || 20, // Reduce el recorrido (ajusta según tus necesidades)
        opacity: 0,
        duration:  fadeinupElement.dataset.animDuration || 0.5,
        ease:  fadeinupElement.dataset.animEase || 'expo.out'
    });
}

// ****** FADE IN DOWN ANIMATION ******
const fadeindownElements = $('.fadein-down');
for (let index = 0; index < fadeindownElements.length; index++) {
    let fadeindownElement = fadeindownElements[index]

    gsap.from(fadeindownElement, {
        scrollTrigger: {
            trigger: fadeindownElement,
            start: fadeindownElement.dataset.animStart || 'top 85%', // Cambia el punto de inicio (aparecerán antes)
            toggleActions: 'play none none reverse',
        },
        y: -fadeindownElement.dataset.animSize || -20, // Reduce el recorrido (ajusta según tus necesidades)
        opacity: 0,
        duration: fadeindownElement.dataset.animDuration || 0.3,
        ease: fadeindownElement.dataset.animEase || 'expo.out'
    });
}

// ****** FADE IN LEFT ANIMATION ******
const fadeinleftElements = $('.fadein-left');
for (let index = 0; index < fadeinleftElements.length; index++) {
    let fadeinlefElement = fadeinleftElements[index]

    gsap.from(fadeinlefElement, {
        scrollTrigger: {
            trigger: fadeinlefElement,
            start: fadeinlefElement.dataset.animStart || 'top 85%', // Cambia el punto de inicio (aparecerán antes)
            toggleActions: 'play none none reverse',
        },
        x: fadeinleftElement.dataset.animSize || 20, // Reduce el recorrido (ajusta según tus necesidades)
        opacity: 0,
        duration: fadeinlefElement.dataset.animDuration || 0.3,
        ease: fadeinlefElement.dataset.animEase || 'expo.out'
    });
}

// ****** FADE IN RIGHT ANIMATION ******
const fadeinrightElements = $('.fadein-right');
for (let index = 0; index < fadeinrightElements.length; index++) {
    let fadeinrightElement = fadeinrightElements[index]

    gsap.from(fadeinrightElement, {
        scrollTrigger: {
            trigger: fadeinrightElement,
            start: fadeinrightElement.dataset.animStart || 'top 85%', // Cambia el punto de inicio (aparecerán antes)
            toggleActions: 'play none none reverse',
        },
        x: -fadeinrightElement.dataset.animSize || -20, // Reduce el recorrido (ajusta según tus necesidades)
        opacity: 0,
        duration: fadeinrightElement.dataset.animDuration || 0.3,
        ease: fadeinrightElement.dataset.animEase || 'expo.out'
    });
}
