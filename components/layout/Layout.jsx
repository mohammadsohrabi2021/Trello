import Link from "next/link";
import React, { useState } from "react";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { signOut, useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function Layout({ children }) {
  const [mune, setMune] = useState(false);
  const muneHandler = () => {
    setMune(!mune);
  };
  const { status } = useSession();

  const logOutHandler = () => {
    signOut();
  };
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid display={{ xs: "flex", md: "none" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={muneHandler}
              >
                {mune ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Grid>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sohrabi Trello
            </Typography>
            {/* <header>
        <p>Sohrabi Trello</p>
      </header> */}
            {status === "authenticated" ? (
              <Button color="inherit" variant="outlined"  onClick={logOutHandler}>Logout<FiLogOut/></Button>
            ) : 
             null
            }
          </Toolbar>
        </AppBar>
      </Box>
      <div className="container--main">
        <Grid display={{ xs: "none", md: "flex" }}>
          <aside>
            <p>Welcome 👋</p>
            <ul>
              <li>
                <VscListSelection />
                <Link href="/">Todos</Link>
              </li>
              <li>
                <BiMessageSquareAdd />
                <Link href="/add-todo">Add Todo</Link>
              </li>
              <li>
                <RxDashboard />
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </aside>
        </Grid>
        {mune ? (
          <aside>
            <p>Welcome 👋</p>
            <ul>
              <li>
                <VscListSelection />
                <Link href="/">Todos</Link>
              </li>
              <li>
                <BiMessageSquareAdd />
                <Link href="/add-todo">Add Todo</Link>
              </li>
              <li>
                <RxDashboard />
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </aside>
        ) : null}
        <section style={{ overflowX: "auto", width: "50%" }}>
          {children}
        </section>
      </div>
    </div>
  );
}

export default Layout;
