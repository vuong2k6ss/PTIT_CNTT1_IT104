// src/PTIT_CNTT1_IT104_Session31_Bai5/ChangeState.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { changeCompany } from "./companyReducer";

const ChangeState: React.FC = () => {
  const company = useSelector((state: RootState) => state.company);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCompany());
  };

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={handleClick}>Change state</button>
    </div>
  );
};

export default ChangeState;
