export interface loginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}
export interface loginPayload {
  userName: string;
  password: string;
  expiresInMins: number;
}
