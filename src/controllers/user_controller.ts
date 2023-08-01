import { Request, Response } from 'express';
import userServices from '../services/user_service';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: User's username
 *           example: heepoke
 *         email:
 *           type: string
 *           description: User's email
 *           example: example@gmai.com
 *         password:
 *           type: string
 *           description: User's password
 *           example: 12345
 */

/**
 * @swagger
 * /apis/users/create:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: Server error
 */
  async function createUserHandler(req: Request, res: Response) {
  const { username, email, password } = req.body;

  try {
    const data = {
      username,
      email,
      password,
    };

    const user = await userServices.createUser(data);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @swagger
 * /apis/users/get:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '500':
 *         description: Server error
 */
 async function getUsersAllHandler(req: Request, res: Response) {
  try {
    const users = await userServices.getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @swagger
 * /apis/users/find/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: Server error
 */
  async function getUserByIdHandler(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  try {
    const user = await userServices.getUserById(userId);
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @swagger
 * /apis/users/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: Server error
 */
  async function updateUserHandler(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  const { username, email } = req.body;
  try {
    const data = {
      username,
      email,
    };

    const user = await userServices.updateUser(userId, data);
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * @swagger
 * /apis/users/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Server error
 */
  async function deleteUserHandler(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  try {
    await userServices.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

const userController = {
  getUsersAllHandler,
  createUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
};

export default userController;
