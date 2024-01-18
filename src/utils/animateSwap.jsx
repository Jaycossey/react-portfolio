// animate the translation of each div, takes startpoint and endpoint elements
const animateSwap = (startpoint, endpoint) => {
    // get bounding coordinates to handle translation
    const startpointCoord = startpoint.getBoundingClientRect();
    const startX = startpointCoord.x;
    const startY = startpointCoord.y;

    const endpointCoord = endpoint.getBoundingClientRect();
    const endX = endpointCoord.x;
    const endY = endpointCoord.y;

    // Transition and transform, after playing around with the values, these are what worked
    startpoint.style.transitionDuration = '500ms';
    startpoint.style.transform = `translate(-${startX - 200}px, ${startY + 200}px) scale(0.5)`; // THIS ONE GOES IN THE RIGHT PLACE!!!!!

    // after initial translation, trigger final placement.
    setTimeout(() => {
        startpoint.style.transform = `translate(${endX}px, -${endY / 4}px) scale(1.4)`; // THIS ONE WORKS!!!!!
    }, 400)
}

export default animateSwap;