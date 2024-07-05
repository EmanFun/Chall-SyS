export interface Profile {
  name: string;
  lastName: string;
  fullName?: string; 
  age: string;
  photo: string;
  about: string;
  email: string;
  phoneNumber: string;
  interests: Interest[];
}

interface Interest {
  name: string;
  description?: string;
  img: string;
}



// form data 
export type FormData = {
  fullName: string;
  email: string;
  message: string;
};

// error form
export interface ErrorObject {
  type: string;
  message: string;
}