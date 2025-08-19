import React from "react";
import UserActionButtons from "./UserActionButtons";

type Props = {
  index: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
};

const UserTableRow: React.FC<Props> = ({ index, name, dob, gender, address }) => (
  <tr>
    <td>{index}</td>
    <td>{name}</td>
    <td>{dob}</td>
    <td>{gender}</td>
    <td>{address}</td>
    <td><UserActionButtons /></td>
  </tr>
);

export default UserTableRow;
