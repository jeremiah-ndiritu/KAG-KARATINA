export interface Member {
  name: {
    firstName: string;
    lastName: string;
    nickName?: string; // Optional because of the ternary check
  };
  dob: string;
  phoneNumber: string;
  email?: string; // Optional because of the null check
  department: string;
  roles?: string[]; // Optional because of the optional chaining ?.
}
