import React from "react";
import "./Menu.css";
import {MenuItem, MenuState} from "../../types";

const Menu = (props: MenuState) => {
    //click
    console.log(props);
    const clickHandler = () => {
        console.log("click");
    };
    return (
        <div className="menu">
        <div className="title">Menu</div>
    {props.menu.map((item: MenuItem) => (
        <div className="menu_item" key={linkSanitizer(item.link)}>
        <a href={item.link}> {item.text}</a>
        {item.sublist && <div className="sub_menu">submenu</div>}
            </div>
        ))}
    </div>
);
};

export default Menu;
