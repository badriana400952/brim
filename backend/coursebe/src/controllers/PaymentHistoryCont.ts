import { Request, Response } from "express";
import PaymentHistoryService from "../services/PaymentHistoryService";

class PaymentHistoryController {
  find(req: Request, res: Response) {
    PaymentHistoryService.find(req, res);
  }
}

export default new PaymentHistoryController();
