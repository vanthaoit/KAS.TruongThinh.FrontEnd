export interface IMenu {
    id: number | string;
    name: string;
    description: string;
    tags?: string[];
    childMenu? :IMenu[];
} 