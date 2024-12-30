import { Link } from "react-router-dom";
import menu from "./menu.module.css";

export function Menu() {
  return (
    <>
      <div>
        <div className={menu.Avatar}>
          <img src="/avatar.svg" alt="avatar" />
        </div>

        <div>
          <Link to="/">Меню</Link>
          <Link to="/cart">Корзина</Link>
        </div>
      </div>
    </>
  );
}
