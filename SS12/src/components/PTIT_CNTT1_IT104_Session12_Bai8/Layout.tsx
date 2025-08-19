import React from "react";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="table-container">
      <table className="user-table">
        <UserTableHeader />
        <tbody>
          <UserTableRow
            index={1}
            name="Malcolm Lockyer"
            dob="21/03/1961"
            gender="Nam"
            address="New york"
          />
          <UserTableRow
            index={2}
            name="Maria"
            dob="11/02/1990"
            gender="Nữ"
            address="London"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Layout;
