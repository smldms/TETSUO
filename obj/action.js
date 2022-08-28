class myObj {
  constructor() {
    this.tileCount = 25;
    this.offset = fxrand();
    this.offset2 = fxrand();
    this.pushX = [];
    this.pushY = [];
    this.pushZ = [];
    this.count = 0;
    this.rotation = fxrand() * 360
  }
  back() {
    rectMode(CENTER)
    angleMode(DEGREES)
    graph.fill(palette.bgClr[1])
    graph.rect(0, 0, graph.width, graph.height)
    graph.noStroke()
    graph.fill(palette.bgClr[0])
    graph.rect(fxrandBetween(width * 0.25, width * 0.75), fxrandBetween(height * 0.25, height * 0.75), width / 2)
    graph.push()
    graph.noFill()
    graph.stroke(0)
    graph.strokeWeight(width / 10)
    graph.rect(0, 0, width, height)
    graph.pop()
    grainy(25)
    imageMode(CENTER)
    image(graph, 0, 0, width, height)
  }

  buildBoxes() {
    stroke(palette.clr[1])
    noFill()
    // noStroke()
    for (let gridY = 0; gridY < this.tileCount; gridY++) {
      for (let gridX = 0; gridX < this.tileCount; gridX++) {
        let mapping = map(noise(this.offset), 0, 1, -width, width)
        let posX = width / this.tileCount * gridX;
        let posY = height / this.tileCount * gridY;
        let distance = dist(posX, posY, width / 2, height / 2);
        let radius = height / 2;
        if (distance > radius) {
          this.pushX.push(posX)
          this.pushY.push(mapping)
          this.pushZ.push(posY)
        }
        this.offset += 0.5;
      }
      this.count++;
    }
  }

  show() {
    translate(-width / 2, 0, -height / 2)
    for (let i = 0; i <= this.pushX.length - 1; i++) {
      blendMode(random([MULTIPLY, SCREEN, ADD, DIFFERENCE]))
      // percent = Math.round(i / (this.pushX.length - 1) * 100);
      push()
      let bSize = width / (this.tileCount * fxrandBetween(0.15, 1))
      let mappingY = map(noise(this.offset), 0, 1, 1, 2)
      translate(this.pushX[i] + bSize, fxrandBetween(-1500, 1500), this.pushZ[i] + bSize)
      fill(palette.clr[0])
      push()
      translate(-width * 2 + fxrand() * width * 2, -width * 2 + fxrand() * width * 2, -width * 2 + fxrand() * width * 2)
      rotateY(fxrand() * 360);

      scale(fxrandBetween(0.3, 5))
      model(obj)
      scale(fxrandBetween(50, 250))
      model(btc)

      pop()
      rotateX(this.rotation);
      box(bSize, this.pushY[i] * mappingY, bSize)
      pop()
    }
    this.offset += turb.val;
    // this.offset += 0.0005
  }
}