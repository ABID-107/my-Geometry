function calculateTriangle() {
    // base
    const triangleB = document.getElementById('triangle-base')
    const triangleBase = triangleB.value;
    const base = parseFloat(triangleBase)
    // hight
    const triangleH = document.getElementById('triangle-hight')
    const triangleHight = triangleH.value;
    const hight = parseFloat(triangleHight)
    // both are calculated in below
    const anwserT = 0.5 * base * hight;
    console.log('Area of the triangle: ', anwserT);
    // display area 
    const resultT = document.getElementById('showMeT')
    resultT.innerText = anwserT;
}
function calculateRombush() {
    // Width
    const rombushW = document.getElementById('rhombus-width')
    const rombushWidth = rombushW.value;
    const width = parseFloat(rombushWidth)
    // Lenth
    const rhombusL = document.getElementById('rhombus-lenth')
    const rhombusLenth = rhombusL.value;
    const lenth = parseFloat(rhombusLenth)
    // both are calculated in below
    const anwserR = width * lenth;
    console.log('Area of the triangle: ', anwserR);
    // display area 
    const resultR = document.getElementById('showMeR')
    resultR.innerText = anwserR;
}