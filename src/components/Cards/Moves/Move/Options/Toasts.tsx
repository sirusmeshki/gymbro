import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const onErrorToast = () =>
  toast.error("حرکت قبلا اضافه شده است.", { icon: false });

export const onSuccessToast = () =>
  toast.success("حرکت اضافه شد.", { icon: false });

export const onSetsEmptyToast = () =>
  toast.warning("مقدار ست نمیتواند خالی باشد.", { icon: false });

export const onRepsEmptyToast = () =>
  toast.warning("مقدار تکرار نمیتواند خالی باشد.", { icon: false });

export const onProgressToast = () =>
  toast.error("قابلیت در حال توسعه است.", { icon: false });
