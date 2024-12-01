export interface Iusers extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  updateAt: Date;
}
