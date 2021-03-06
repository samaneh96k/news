import { toast } from "react-toastify";

export const successMessage = message => {
    toast.success(message, {
        position: "top-right",
        closeOnClick: true
    });
};