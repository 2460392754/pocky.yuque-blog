export interface IDocService {
    getDocs(id: string, token?: string);
    getDoc(args: IDocApiGetDocArgs);
}

export interface IDocApi {
    getDocs(id: string, token?: string);
    getDoc(args: IDocApiGetDocArgs);
}

export interface IDocApiGetDocArgs {
    id: string;
    docId: string;
    raw: string;
    token?: string;
}
