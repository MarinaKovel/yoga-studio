interface Session {
    time: string;
    freeSlots: string;
}

interface Quality {
    start: string;
    end: string;
    value: number;
}
export interface Trainer {
    id: string;
    name: string;
    avatar: string;
    createdAt: string;
    class: string;
    sessions: Session[][];
    personality: Quality[];
}