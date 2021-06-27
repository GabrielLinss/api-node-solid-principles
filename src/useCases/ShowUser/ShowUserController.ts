import { Request, Response } from "express";
import { ShowUserUseCase } from "./ShowUserUseCase";

export class ShowUserController {
  constructor(
    private showUserUseCase: ShowUserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      const user = await this.showUserUseCase.execute(id)

      return response.send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}