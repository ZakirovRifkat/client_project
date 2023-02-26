export interface IUser {
  id: number;
  name: string;
  surname: string;
  jobTitle: string;
  userImg: string;
  password: string;
  tasks:{
    done:number, 
    all:number,
  },
  notification:{
    readed:number, 
    all:number,
  },
  efficient:number,
}
