declare interface Row {
    id: number; 
    name: string;
    email: string;
    phone: string;
    status: string;
    rols: string[];
    dateCreated: Date;
  }

export default Row;