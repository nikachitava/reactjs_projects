export interface Itodo {
    id: number;
    task: string;
    time: string;
    complete: boolean;
    handleComplete: (id: number) => void;
    handleDeteleTask: (id: number) => void;
}