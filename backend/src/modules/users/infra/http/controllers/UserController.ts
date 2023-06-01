import express, { Handler } from "express";

//user service
import { UserService } from "../../../services/UserService";

export class UserController {
  userService: UserService = new UserService();
  getFindAllUser: Handler = async (_req, res) => {
    res.json({
      user: this.userService.findAllUser(),
    });
  };
}
