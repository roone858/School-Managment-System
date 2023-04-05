import  { useState } from 'react'
import { Link } from 'react-router-dom';

export const AddButton = (props:any) => {
     const [isOpen, setIsOpen] = useState(false);
  return (
     <Link
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
        to={isOpen ? `/${props.entity}s` : `/${props.entity}s/add`}
        type="button"
        className="btn btn-success mr-3"
      >
        {props.text}
      </Link>
  )
}
