import { Request } from "express";

// for express request's
export interface RequestDefention extends Request {
  user: {
    admin: boolean;
    uid: string;
    disabled: boolean;
  };
  admin: Object;
}
