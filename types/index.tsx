import { StaticImageData } from "next/image";

export interface video {
    id: number,
    title: string,
    category: Array<string>,
    description: string,
    thumbnail: any,
    url: string,
}