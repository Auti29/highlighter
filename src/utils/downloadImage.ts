import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

export const downloadImg = async (elem: HTMLDivElement) => {
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