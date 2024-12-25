import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";

export interface AlertModel {
  title: string;
  text: string;
  icon: SweetAlertIcon;
  customOptions?: SweetAlertOptions;
  // Không cần định nghĩa lại các tham số của SweetAlertOptions nữa
}

const showAlert = (options: SweetAlertOptions) => {
  return Swal.fire(options);
};

export const confirm = ({ title, icon, text }: AlertModel) => {
  return showAlert({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Confirm it!",
    cancelButtonText: "Cancel",
  });
};
// Success Alerts
export const successAlert = ({
  title,
  text,
  icon,
  customOptions,
}: AlertModel) => {
  return showAlert({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#52c41a", // Màu xanh lá cho thành công
    showCancelButton: false, 
    confirmButtonText: "Okay",
    ...customOptions, // Thêm tùy chỉnh từ customOptions vào
  });
};

// Error Alerts
export const errorAlert = ({
  title,
  text,
  icon,
  customOptions,
}: AlertModel) => {
  return showAlert({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#f5222d", // Màu đỏ cho lỗi
    showCancelButton: false, 
    confirmButtonText: "Okay",
    ...customOptions,
  });
};

// Warning Alerts
export const warningAlert = ({
  title,
  text,
  icon,
  customOptions,
}: AlertModel) => {
  return showAlert({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#faad14", // Màu vàng cho cảnh báo
    showCancelButton: false, 
    confirmButtonText: "Okay",
    ...customOptions,
  });
};

// Info Alerts
export const infoAlert = ({ title, text, icon, customOptions }: AlertModel) => {
  return showAlert({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#1890ff",
    showCancelButton: false, 
    confirmButtonText: "Okay", 
    ...customOptions,
  });
};
