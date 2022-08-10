export interface ICars {
    id?: number
    name: string
    color: string
}

export interface IWinners {
    id?: number
    wins: number
    time: number
    sortByWinsTime: string
    sortByAscDesc: string
}

export interface IWinnersCars extends IWinners {
    id: number
    wins: number
    time: number
    sortByWinsTime: string
    sortByAscDesc: string
    car: ICars
}

export interface IPrimaryState {
    view: string
    garagePage: number
    winnersPage: number
    cars: ICars[]
    winners: IWinnersCars[]
    carsQuantity: number
    winnersQuantity: number
    animation: {},
    sortByWinsTime: string
    sortByAscDesc: string
}

export interface IEntries {
    name: string
    value: string
}