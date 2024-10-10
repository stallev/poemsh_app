import { ZodIssue } from "zod";
import { RequestStatuses } from "@/constants/RequestStatusesErrors";

type ActionResult<T> = {status: RequestStatuses.success, data: T} | {status: RequestStatuses.success.error, error: string | ZodIssue[]}