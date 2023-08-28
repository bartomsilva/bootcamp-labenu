import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { CreateCourseSchema } from "../dtos/createCourse.dto"
import { handlerError } from "../errors/handlerError"
import { editCourseSchema } from "../dtos/editCourse.dto"
import { DeleteCourseSchema } from "../dtos/deleteCourse.dto"
import { getCourseInputDTO } from "../dtos/getCourse.dto"

export class CourseController {
  constructor(private courseBusiness: CourseBusiness) { }

  public getCourses = async (req: Request, res: Response) => {
    try {
      
      const input:getCourseInputDTO = {
        q: req.query.q as string
      }

      const output = await this.courseBusiness.getCourses(input)

      res.status(200).send(output)
    } catch (error) {
      handlerError(res, error)
    }
  }

  public createCourse = async (req: Request, res: Response) => {
    try {

      const input = CreateCourseSchema.parse({
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons
      })

      const output = await this.courseBusiness.createCourse(input)

      res.status(201).send(output)
    } catch (error) {
      handlerError(res, error)
    }
  }

  public editCourse = async (req: Request, res: Response) => {
    try {

      const input = editCourseSchema.parse({
        idToEdit: req.params.id,
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons
      })

      const output = await this.courseBusiness.editCourse(input)

      res.status(200).send(output)
    } catch (error) {
      handlerError(res, error)

    }
  }

  public deleteCourse = async (req: Request, res: Response) => {
    try {

      const input = DeleteCourseSchema.parse({
        idToDelete: req.params.id
      })

      const output = await this.courseBusiness.deleteCourse(input)

      res.status(200).send(output)
    } catch (error) {
      handlerError(res, error)
    }
  }
}