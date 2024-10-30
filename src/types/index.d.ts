import { ZodIssue } from "zod";
import { RequestStatuses } from "@/constants/RequestStatusesErrors";

export type ActionResult<T> = {status: RequestStatuses.success, data: T} | {status: RequestStatuses.error, error: string | ZodIssue[]}