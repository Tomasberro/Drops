import { getToken } from "../../redux/users/userActions";
import jwt_decode from "jwt-decode";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/Logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import {
  UserTooltip,
  TooltipsMarcas,
  TooltipsCategorias,
  titleUser,
  titleMarcas,
  titleCategorias,
  titleUserLog,
} from "./ToolTIps.js";
import "./NavBar.css";
import { getProductsByName } from "../../redux/products/productsAction";

function NavBar() {
  const [loged, setLoged] = useState({
    userState: false,
    userData: {},
    userAdmin: {},
  });
  useEffect(() => {
    const x = getToken();
    console.log("esta es mi x ", x);
    if (x.msg) {
      return setLoged({
        userState: false,
      });
    } else {
      const userDecoded = jwt_decode(x);
      setLoged({
        userState: true,
        userData: userDecoded,
        userAdmin: userDecoded.user ? userDecoded.user.userType : "",
      });
    }
  }, []);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { cart } = useSelector((state) => state.cartReducer);
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    dispatch(getProductsByName(name));
    // dispatch(cleanAction())
  }
  return (
    <div className="NavContainer">
      <Box className="LogoContainer">
        <Link to="/">
          <img src={logo} className="Logo ball" alt="" />
        </Link>
      </Box>
      <Box className="MenuContainer">
        <div>
          <ul>
            <TooltipsMarcas title={titleMarcas}>
              <li className="Menu swoopInTop ">marcas</li>
            </TooltipsMarcas>
            <TooltipsCategorias title={titleCategorias}>
              <li className="Menu swoopInTop">categorías</li>
            </TooltipsCategorias>
            <li className="Menu swoopInTop">
              <a href="/catalogue">catálogo</a>
            </li>
            <li className="Menu swoopInTop">
              <a href="#Nosotros">nosotros</a>
            </li>
            <li className="Menu swoopInTop">
              <a href="#Location" className="">
                contacto
              </a>
            </li>
            {/* <TooltipsMarcas title={titleMarcas}><li className="Menu swoopInTop hvr-float-shadow">marcas</li></TooltipsMarcas> */}
            {/* <TooltipsCategorias><li className="Menu swoopInTop hvr-float-shadow">categorías</li></TooltipsCategorias> */}
            {/* <li className="Menu swoopInTop hvr-float-shadow">nosotros</li>
                        <li className="Menu swoopInTop hvr-float-shadow">contacto</li> */}
          </ul>
        </div>
      </Box>
      <Box className="ToolsContainer">
        <div>
          <div className="Tool">
            <form className="FormSearch">
              <input
                type="search"
                className="SearchBar"
                placeholder="Buscar ..."
                onChange={handleInputChange}
              />
              <i
                className="fa fa-search spinIn"
                onClick={(e) => handleSubmit(e)}
                href="/catalogue"
              ></i>
            </form>
          </div>

          <div className="Tool">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon
                className="spinIn"
                sx={{
                  fontSize: 25,
                  transition: "0.5s all",
                  "&:hover": {
                    color: "#f00",
                    cursor: "pointer",
                  },
                }}
              />{" "}
            </Badge>
          </div>

          {loged.userState ? (
            <UserTooltip title={titleUserLog}>
              <div className="Tool">
                <AccountCircleIcon
                  className="spinIn"
                  sx={{
                    fontSize: 25,
                    transition: "0.5s all",
                    "&:hover": {
                      color: "#f00",
                      cursor: "pointer",
                    },
                  }}
                />
              </div>
            </UserTooltip>
          ) : (
            <UserTooltip title={titleUser}>
              <div className="Tool">
                <AccountCircleIcon
                  className="spinIn"
                  sx={{
                    fontSize: 25,
                    transition: "0.5s all",
                    "&:hover": {
                      color: "#f00",
                      cursor: "pointer",
                    },
                  }}
                />
              </div>
            </UserTooltip>
          )}
        </div>
      </Box>
    </div>
  );
}

export default NavBar;
