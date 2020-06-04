interface IEmployee {
  _id: {
    $oid: string;
  };
  name: string;
  age: number;
  salary: number;
}

export default IEmployee;
