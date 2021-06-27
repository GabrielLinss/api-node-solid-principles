import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  constructor(
    private listUsersUseCase: ListUsersUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.listUsersUseCase.execute()

      return response.send(users);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}