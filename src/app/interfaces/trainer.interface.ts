interface Session {
    time: string;
    freeSlots: number;
}
export interface Trainer {
    id: string;
    name: string;
    avatar: string;
    createdAt: string;
    sessions: Session[][];
}