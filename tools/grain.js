function grainy(force) {
    _seed = floor(fxrand() * 999999)
    randomSeed(_seed)
    noiseSeed(_seed)
    graph.loadPixels();
    let d = graph.pixelDensity();
    let halfImage = 4 * (width * d) * (height * d);
    for (let i = 0; i < halfImage; i += 4) {
        grainAmount = random(-force, force);
        graph.pixels[i] = graph.pixels[i] + grainAmount;
        graph.pixels[i + 1] = graph.pixels[i + 1] + grainAmount;
        graph.pixels[i + 2] = graph.pixels[i + 2] + grainAmount;
        graph.pixels[i + 3] = graph.pixels[i + 3] + grainAmount
    }
    graph.updatePixels();
}
