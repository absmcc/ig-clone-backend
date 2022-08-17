export interface Photo {
    id: string;
    photoUrl: string;
    like?: number;
    comments?:[string];
    description?: string;

}