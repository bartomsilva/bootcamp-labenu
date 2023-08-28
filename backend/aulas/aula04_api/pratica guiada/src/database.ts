import { COURSE_STACK, TCourse } from "./types"
import { Student } from "./types"


export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

// FIXAÇÃO 

export const students: Student[] = [
    {
        id: "01",
        name: "Bart",
        age: 56
    },
    {
        id: "02",
        name: "Sandra",
        age: 48
    },
    {
        id: "03",
        name: "Francy",
        age: 23
    },
    {
        id: "04",
        name: "Pedro",
        age: 13
    },
    {
        id: "05",
        name: "Guilherme ",
        age: 3
    }
]


