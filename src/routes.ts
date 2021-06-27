import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { listUsersController } from "./useCases/ListUsers";
import { showUserController } from "./useCases/ShowUser";
import { editUserController } from "./useCases/EditUser";
import { deleteUserController } from "./useCases/DeleteUser";

const router = Router()

router.get('/', (request, response) => {
  return response.send({ message: 'UP' })
});

router.get('/users', (request, response) => {
  return listUsersController.handle(request, response);
});

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/users/:id', (request, response) => {
  return showUserController.handle(request, response);
});

router.put('/users/:id', (request, response) => {
  return editUserController.handle(request, response);
});

router.delete('/users/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router }