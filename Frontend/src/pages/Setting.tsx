import { useSelector, useDispatch } from "react-redux";
import ListDividers from "../Components/mui/ListDividers";
import NestedList from "../Components/mui/NestedList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AccountInfo from "../Components/setting/AccountInfo";
import ChangePass from "../Components/setting/ChangePass";
import DeactivateAcc from "../Components/setting/DeactivateAcc";

export const Setting = () => {
  const students = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="setting">
      

      <Routes>
        <Route path="/" element={<NestedList />} />
        <Route path="/info" element={<AccountInfo/>} />
        <Route
          path="/password"
          element={<ChangePass/>}
        />
        <Route path="/deactivate" element={<DeactivateAcc/>} />
      </Routes>
    </div>
  );
};
