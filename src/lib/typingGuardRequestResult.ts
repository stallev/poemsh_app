import { ZodIssue } from "zod";
import { RequestStatuses } from "@/constants/RequestStatusesErrors";
import { ActionResult } from "@/types";

export const isSuccessResult = <T>(
  result: ActionResult<T>
): result is { status: RequestStatuses.success; data: T } => {
  return result.status === RequestStatuses.success;
};

export const isErrorResult = <T>(
  result: ActionResult<T>
): result is { status: RequestStatuses.error; error: string | ZodIssue[] } => {
  return result.status === RequestStatuses.error;
};
