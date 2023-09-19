import toast from "react-hot-toast";
const config = { duration: 3000 };
const successToast = (msg) => toast.success(msg, config);

const errorToast = (msg) => toast.error(msg, config);

export { successToast, errorToast };
