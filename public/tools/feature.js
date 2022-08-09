//////////***rY
let rY = {
    n: fxrand(),
    name: '',
    val: 0
}
if (rY.n < 0.33) {
    rY.name = 'A'
    rY.val = 90
}
else if (rY.n < 0.66) {
    rY.name = 'B'
    rY.val = 180
}
else {
    rY.name = 'C'
    rY.val = 0
}

///////////LIGHT
let light = {
    n: fxrand(),
    name: '',
    val: 0.5
}
if (light.n < 0.25) {
    light.val = 0
    light.name = 'OFF'
}
else if (light.n < 0.75) {
    light.val = 50
    light.name = 'SOFT'
}
else {
    light.val = 100
    light.name = 'HARD'
}

//////////ZOOM
// let scl = {
//     n: fxrand(),
//     name: '',
//     val: 0.5
// }
// if (scl.n < 0.25) {
//     scl.val = 0.66
//     scl.name = 'LARGE'
// }
// else if (scl.n < 0.75) {
//     scl.val = 0.5
//     scl.name = 'MEDIUM'
// }
// else {
//     scl.val = 0.25
//     scl.name = 'SMALL'
// }

/////////////////////////GRADIENT
let grd = {
    n: fxrand(),
    name: ""
}

if (grd.n < 0.5) {
    grd.name = "RADIAL"
}
else { grd.name = "LINEAR" }

/////////////////////////FORCE
let turb = {
    n: fxrand(),
    val: 0.1,
    name: ""
}

if (turb.n < 0.25) {
    turb.val = 0.0005
    turb.name = "A"
}
else if (turb.n < 0.5) {
    turb.val = 0.005
    turb.name = "B"
}
else if (turb.n < 0.75) {
    turb.val = 0.05
    turb.name = "C"
}
else {
    turb.val = 0.5
    turb.name = "D"
}

