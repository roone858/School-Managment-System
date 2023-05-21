import { Fab } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const header = location.pathname.split('/')[1];
  const onclick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <Link
      className="add-button"
      onClick={onclick}
      to={isOpen ? `/${header}` : `/${header}/add`}
      type="button"
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
};
