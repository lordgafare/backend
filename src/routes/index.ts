import { Router } from 'express';
import userController from '../controllers/user_controller';

const router = Router();

router.get('/users/get', userController.getUsersAllHandler);
router.get('/users/find/:id', userController.getUserByIdHandler);
router.post('/users/create', userController.createUserHandler);
router.put('/users/update/:id', userController.updateUserHandler);
router.delete('/users/delete/:id', userController.deleteUserHandler);

export default router;