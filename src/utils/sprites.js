class SpriteFrames {
    constructor(frameWidth, frameHeight, frameCount, frameRate, stateCount, name) {
        this.frameWidth = frameWidth,
        this.frameHeight = frameHeight,
        this.frameCount = frameCount,
        this.frameRate = frameRate,
        this.stateCount = stateCount,
        this.name = name + `${stateCount}`
    }


}

export default SpriteFrames;