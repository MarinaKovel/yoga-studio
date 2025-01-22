interface Session {
    time: string;
    freeSlots: string;
}
export interface Trainer {
    id: string;
    name: string;
    avatar: string;
    createdAt: string;
    class: string;
    sessions: Session[][];
}