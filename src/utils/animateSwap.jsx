// animate the translation of each div, takes startpoint and endpoint elements
const animateSwap = (startpoint, endpoint) => {
    // get bounding coordinates to handle translation
    const startpointCoord = startpoint.getBoundingClientRect();
    const startX = startpointCoord.x;
    const startY = startpointCoord.y;

    const endpointCoord = endpoint.getBoundingClientRect();
    const endX = endpointCoord.x;
    const endY = endpointCoord.y;

    // Now I have the start and end points, I need to get startpoint to translate its own values minus the endpoint
    // then I need to add it back

    // ok, so translate works by taking the x and y pixel amount, how do I know how far the element needs to move? 

    // by taking the starting position and minusing the end poisition

    const xTrans = Math.floor(startX - endX);
    const yTrans = Math.floor(startY - endY);
    console.log(`translate\nx: ${xTrans}, y: ${yTrans}`);

    startpoint.style.transitionDuration = '1s';
    startpoint.style.transform = `translate(-${startX}px, ${endY}px)`;
    startpoint.style.scale = "0.2";

}

export default animateSwap;