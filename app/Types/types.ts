import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type SingleDescItem = {
    title: string,
    icon: IconProp
}

export type LockType = {
    id: number,
    title: string,
    image:string,
    desc: SingleDescItem[],
}