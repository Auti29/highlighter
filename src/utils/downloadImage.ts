import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

export const downloadImgAsPng = async (elem: HTMLDivElement) => {
    if(!elem) return;
     
    try {const dataUrl = await toPng(elem);
    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = 'highlighter-snippet.png';
    anchor.click();
    return;
    }catch(err){
        console.log("error while downloading image: ", err);
        return;
    }
}
export const downloadImgAsJpeg = async (elem: HTMLDivElement) => {
    if(!elem) return;
     
    try {const dataUrl = await toJpeg(elem);
    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = 'highlighter-snippet.jpeg';
    anchor.click();
    return;
    }catch(err){
        console.log("error while downloading image: ", err);
        return;
    }
}
export const downloadImgAsSvg = async (elem: HTMLDivElement) => {
    if(!elem) return;
     
    try {const dataUrl = await toSvg(elem);
    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = 'highlighter-snippet.svg';
    anchor.click();
    return;
    }catch(err){
        console.log("error while downloading image: ", err);
        return;
    }
}