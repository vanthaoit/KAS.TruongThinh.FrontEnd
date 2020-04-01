export interface IMenu {
    id: number | string;
    name: string;
    description: string;
    tags?: string[];
    url?: string;
    childMenu? :IMenu[];
} 