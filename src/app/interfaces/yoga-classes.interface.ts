interface ClassPros {
    id: number,
    name: string,
    description: string
}

export interface YogaClasses {
    name: string;
    image: string;
    description: string;
    level: number;
    pros: ClassPros[]
}