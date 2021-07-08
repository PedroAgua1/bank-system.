import { Router } from "express";
import transactionRoute from "./transationsRoutes";
import { viewrRoute } from "../models/Transaction";

const router = Router()

router.use('/transaction', transactionRoute)
router.use('/transactionViewr', viewrRoute)

export default router

