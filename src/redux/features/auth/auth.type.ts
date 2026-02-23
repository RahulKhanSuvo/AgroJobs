export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  resumeUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LoginSuccessResponse {
  success: true;
  message: string;
  data: {
    user: User;
    accessToken: string;
  };
}

export interface LoginErrorResponse {
  success: false;
  message: string;
}
