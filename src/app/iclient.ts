export interface Iclient {
    id: number;
    name: string;
    address: string;
    comment: string;
}
export interface RootObject {
    Iclient: Iclient[];
}
