import * as htmlToImage from 'html-to-image';
import { toBlob } from 'html-to-image';


export const copyAsBlob = async (elem: HTMLElement) => {
    if(!elem) return;
    try{
        const blob = await htmlToImage.toBlob(elem);
        if(!blob) return;
        await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob })
        ]);
        return;

    }catch(err){
        console.log(`html-to-image error => ${err}`);
        return;
    }
}