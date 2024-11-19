export interface StateInterface {
    id: number,
    name: string,
    type: "MENU",
    collapse: 0,
    sections: SectionInterface[]
}
export interface SectionInterface {
    id: number
    name: string
    description: string | null
    position: number
    visible: 0 | 1
    images: Array<{ id: number, image: string }>
    items: ItemsInterface[]
}
export interface ItemsInterface {
    id: number
    name: string
    description: string | null
    alcoholic: number,
    price: number,
    position: number,
    visible: 0 | 1,
    availabilityType: "AVAILABLE_NOW",
    sku: string,
    images: Array<{ id: number, image: string }>,
    available: boolean
    modifiers: ModifiersInterface[] | undefined
}
export interface ModifiersInterface {
    id: number,
    name: string,
    minChoices: number,
    maxChoices: number,
    items: ChoiceItemInterface[]
    images: Array<{ id: number, image: string }>,
    available: boolean
}
export interface ChoiceItemInterface {
    id: number,
    name: string,
    price: number,
    maxChoices: number,
    position: number,
    visible: number,
    availabilityType: "AVAILABLE_NOW",
    qty: 1 | undefined
    available: boolean
}