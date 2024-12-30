import { Outlet } from "react-router-dom";
import { Menu } from "../../components/common/menu/Menu.tsx";

export function DefaultLayout() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
