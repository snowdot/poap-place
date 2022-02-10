import textures from "textures";

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generate6DigitRandomNum = () => {
    let digits = "";
    for(let i = 0; i < 6; i++) {
        digits += getRandomIntInclusive(0, 9);
    }
    return digits;
}

export const trimAddress = (address, chars = 4) => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export const createTextures = () => {
    const textureLine1 = textures
    .lines();

    const textureLine2 = textures
    .lines()
    .heavier();

    const textureLine3 = textures.lines()
    .lighter();

    const textureLine4 = textures.lines()
    .thinner();

    const textureLine5 = textures.lines()
    .size(4)
    .strokeWidth(1);

    const textureLine6 = textures.lines()
    .size(8)
    .strokeWidth(2);

    const textureLine7 = textures.lines()
    .orientation("3/8");        

    const textureLine8 = textures.lines()
    .orientation("vertical")
    .strokeWidth(1)
    .shapeRendering("crispEdges");

    const textureLine9 = textures.lines()
    .orientation("3/8", "7/8")
    .stroke("darkorange");

    const textureLine10 =  textures.lines()
    .orientation("vertical", "horizontal")
    .size(4)
    .strokeWidth(1)
    .shapeRendering("crispEdges");

    const textureLine11 = textures.circles();

    const textureLine12 = textures.circles()
    .thicker();

    const textureLine13 = textures.circles()
    .complement();

    const textureLine14 = textures.circles()
    .size(5);

    const textureLine15 = textures.circles()
    .radius(4);

    const textureLine16 = textures.circles()
    .radius(4)
    .fill("transparent")
    .strokeWidth(2);

    const textureLine17 = textures.circles()
    .fill("transparent")
    .radius(4)
    .strokeWidth(2)
    .complement();

    const textureLine18 = textures.circles()
    .size(10)
    .radius(2);

    const textureLine19 = textures.paths()
    .size(8)
    .strokeWidth(2);

    const textureLine20 = textures.paths()
    .d("crosses")
    .lighter()
    .thicker();

    const textureLine21 = textures.paths()
    .d("caps")
    .lighter()
    .thicker();

    const textureLine22 = textures.paths()
    .d("woven")
    .lighter()
    .thicker();

    const textureLine23 =  textures.paths()
    .d("waves")
    .thicker();

    const textureLine24 = textures.paths()
    .d("nylon")
    .lighter()
    .shapeRendering("crispEdges");

    const textureLine25 = textures.paths()
    .d("squares");

    return [
        textureLine1,
        textureLine2,
        textureLine3,
        textureLine4,
        textureLine5,
        textureLine6,
        textureLine7,
        textureLine8,
        textureLine9,
        textureLine10,
        textureLine11,
        textureLine12,
        textureLine13,
        textureLine14,
        textureLine15,
        textureLine16,
        textureLine17,
        textureLine18,
        textureLine19,
        textureLine20,
        textureLine21,
        textureLine22,
        textureLine23,
        textureLine24,
        textureLine25,
    ];
}

export const dataURLtoBlob = (dataURL) => {
    const binary = atob(dataURL.split(',')[1]);
    const array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
}
