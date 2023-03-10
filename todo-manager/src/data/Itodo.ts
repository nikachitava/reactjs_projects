export interface Itodo {
    id: number;
    task: string;
    time: number;
    complete: boolean;
    handleComplete: (id: number) => void;
    handleDeteleTask: (id: number) => void;
}