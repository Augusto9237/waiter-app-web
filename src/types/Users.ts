export interface UserType {
  _id: string;
  name: string;
  password: string;
  office: "MANANGER" | "KITCHEN_ASSISTANT" | "CLERK";
}
