// animate the translation of each div, takes startpoint and endpoint elements
const animateSwap = (startpoint, endpoint) => {
    // get bounding coordinates to handle translation
    const startpointCoord = startpoint.getBoundingClientRect();
    const startX = startpointCoord.x;
    const startY = startpointCoord.y;

    const endpointCoord = endpoint.getBoundingClientRect();
    const endX = endpointCoord.x;
    const endY = endpointCoord.y;

    console.log(startpoint);

    console.log(startX, startY);
    console.log(endX, endY);

    // Now I have the start and end points, I need to get startpoint to translate its own values minus the endpoint
    // then I need to add it back

    const firstTransform = `transform(${endX}px, ${endY}px)`;
    startpoint.style.transform = firstTransform;
    startpoint.style.transitionDuration = 'all 2s';

}

export default animateSwap;