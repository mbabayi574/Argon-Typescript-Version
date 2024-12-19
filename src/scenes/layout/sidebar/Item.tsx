import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

interface ItemProps {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const Item = ({ title, path, icon }: ItemProps) => {
  const location = useLocation();
  return (
    <MenuItem
      component={<Link to={path} />}
      icon={icon}
      rootStyles={{
        color: path === location.pathname ? "#6870fa" : undefined,
      }}
    >
      {title}
    </MenuItem>
  );
};

export default Item;
