import { type Middleware, isRejected } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { type ServerValidationErrorResponse } from "@/common/types/types";

const errorMiddleware: Middleware = () => {
  return (next) => (action) => {
    if (isRejected(action) && action.type !== "auth/verify-token/rejected") {
      const { message } = action.error as ServerValidationErrorResponse;
      toast.error(message, { toastId: "action-rejected" });
    }

    return next(action);
  };
};

export { errorMiddleware };
