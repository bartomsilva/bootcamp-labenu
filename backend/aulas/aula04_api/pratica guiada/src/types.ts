export enum COURSE_STACK {
    FRONT = "Front-end",
    BACK = "Back-end",
    FULL = "Full-stack"
}

export type TCourse = {
    id: string,
    name: string,
    lessons: number,
    stack: COURSE_STACK
}

export interface Student {
    id: string
    name: string
    age: number
}