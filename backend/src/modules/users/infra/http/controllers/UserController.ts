import express, { Handler } from "express";

//user service
import { UserService } from "../../../services/UserService";

export class UserController {
  userService: UserService = new UserService();
  getFindAllUser: Handler = async (_req, res) => {
    res.json({
      user: await this.userService.findAllUser(),
    });
  };
  getFindByIdUser: Handler = async (req, res) => {
    const { id } = req.params;
    res.json({
      user: await this.userService.findByIdUser(id),
    });
  };
  getFindByUsernameUser: Handler = async (req, res) => {
    const { username } = req.body;
    res.json({
      user: await this.userService.findByUsernameUser(username),
    });
  };
}
