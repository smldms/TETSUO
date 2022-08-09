//////////////PALETTE
let palette = {
    n: fxrand(),
    clr: [],
    bgClr: [],
    extraClr: "",
    name: ""
}

if (palette.n < 0.05 * 1) {
    palette.bgClr = ["#F2EC99", "#141F26"]
    palette.clr = ["#BF3F3F", "#F2EA77"]
    palette.name = "🎨 1"
} else if (palette.n < 0.05 * 2) {
    palette.bgClr = ["#F2A2A9", "#0D0D0D"]
    palette.clr = ["#0D0D0D", "#F2A2A9"]
    palette.name = "🎨 2"
} else if (palette.n < 0.05 * 3) {
    palette.bgClr = ["#59343B", "#2A2D40"]
    palette.clr = ["#75BFB2", "#BF5349"]
    palette.name = "🎨 3"
} else if (palette.n < 0.05 * 4) {
    palette.bgClr = ["#F266C1", "#2F2859"]
    palette.clr = ["#ACEBF2", "#115DBF"]
    palette.name = "🎨 4"
} else if (palette.n < 0.05 * 5) {
    palette.bgClr = ["#400C1F", "#0D0D0D"]
    palette.clr = ["#2DA679", "#F21365"]
    palette.name = "🎨 5"
} else if (palette.n < 0.05 * 6) {
    palette.bgClr = ["#8C837B", "#0D0D0D"]
    palette.clr = ["#BF3F57", "#F2DAC4"]
    palette.name = "🎨 6"
} else if (palette.n < 0.05 * 7) {
    palette.bgClr = ["#8191A6", "#0D0D0D"]
    palette.clr = ["#B0B2BF", "#364559"]
    palette.name = "🎨 7"
} else if (palette.n < 0.05 * 8) {
    palette.bgClr = ["#6D56BF", "#100D26"]
    palette.clr = ["#D9436B", "#292259"]
    palette.name = "🎨 8"
} else if (palette.n < 0.05 * 9) {
    palette.bgClr = ["#5CACF2", "#263173"]
    palette.clr = ["#EAF205", "#3565F2"]
    palette.name = "🎨 9"
} else if (palette.n < 0.05 * 10) {
    palette.bgClr = ["#F21313", "#0A4359"]
    palette.clr = ["#79F2D0", "#BF0A19"]
    palette.name = "🎨 10"
} else if (palette.n < 0.05 * 11) {
    palette.bgClr = ["#5B26A6", "#350F40"]
    palette.clr = ["#2EF2DF", "#BF264F"]
    palette.name = "🎨 11"
} else if (palette.n < 0.05 * 12) {
    palette.bgClr = ["#590202", "#260101"]
    palette.clr = ["#BF1304", "#027368"]
    palette.name = "🎨 12"
} else if (palette.n < 0.05 * 13) {
    palette.bgClr = ["#D7EAF5", "#A3C3D6"]
    palette.clr = ["#507E99", "#315F7A"]
    palette.name = "🎨 13"
} else if (palette.n < 0.05 * 14) {
    palette.bgClr = ["#F2ECE4", "#262626"]
    palette.clr = ["#8C8379", "#D9CEC1"]
    palette.name = "🎨 14"
} else if (palette.n < 0.05 * 15) {
    palette.bgClr = ["#D9C2AD", "#594E45"]
    palette.clr = ["#D9CCB4", "#F2CDA0"]
    palette.name = "🎨 15"
} else if (palette.n < 0.05 * 16) {
    palette.clr = ["#D9CCB4", "#403A40"]
    palette.bgClr = ["#F4A694", "#994F56"]
    palette.name = "🎨 16"
} else if (palette.n < 0.05 * 17) {
    palette.clr = ["#403B32", "#59554D"]
    palette.bgClr = ["#F2EBDF", "#736E66"]
    palette.name = "🎨 17"
} else if (palette.n < 0.05 * 18) {
    palette.bgClr = ["#FFFFFF", "#999999"]
    palette.clr = ["#242424", "#212121"]
    palette.name = "🎨 18"
} else if (palette.n < 0.05 * 19) {
    palette.bgClr = ["#D9C5A0", "#A69981"]
    palette.clr = ["#803F38", "#936B5C"]
    palette.name = "🎨 19"
} else {
    palette.bgClr = ["#F2F1F0", "#071A26"]
    palette.clr = ["#929AA6", "#3F5B73"]
    palette.name = "🎨 20"
}