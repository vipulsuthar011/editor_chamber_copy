import { BsCheckAll } from "react-icons/bs";

const ListItem = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <>
        <BsCheckAll size={24} color="#EBCE5B" />
      </>
      <span className="tracking-widest">{text}</span>
    </div>
  );
};

export default ListItem;
