import { Routes, Route } from 'react-router-dom';
import AccountInfo from '../Components/setting/AccountInfo';
import ChangePass from '../Components/setting/ChangePass';
import DeactivateAcc from '../Components/setting/DeactivateAcc';
import ControlledAccordions from '../Components/mui/ControlledAccordions';

export const Setting = () => {
  return (
    <div className="setting container">
      <Routes>
        <Route path="/" element={<ControlledAccordions />} />
        <Route path="/info" element={<AccountInfo />} />
        <Route path="/password" element={<ChangePass />} />
        <Route path="/deactivate" element={<DeactivateAcc />} />
      </Routes>
    </div>
  );
};
