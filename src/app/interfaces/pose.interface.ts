export interface Pose {
    id?: string;
    name: string;
    duration: number;
    level?: number;
    type?: 'Balance' | 'Strength',
    image?: string;
}