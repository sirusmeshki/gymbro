import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const onErrorToast = () => toast.error('حرکت قبلا اضافه شده است.')

export const onSuccessToast = () => toast.success('حرکت اضافه شد.')

export const onSetsEmptyToast = () =>
    toast.warning('مقدار ست نمیتواند خالی باشد.')

export const onRepsEmptyToast = () =>
    toast.warning('مقدار تکرار نمیتواند خالی باشد.')

export const onProgressToast = () => toast.error('قابلیت در حال توسعه است.')
