declare interface Row {
    id: number; 
    name: string;
    email: string;
    tel: string;
    status: string;
    rols: string[];
    dateCreated: Date;
  }

export default Row;