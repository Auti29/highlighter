export function getRgb(rgbString: string) {
    const rgb = rgbString.match(/\d+/g);
    if (rgb) {
        return rgb.map((color) => parseInt(color));
    }
    return null;
}