export const success = (data: any, message: string = "Success") => ({
  success: true,
  data,
  message,
});

export const error = (message: string = "Error") => ({
  success: false,
  message,
});