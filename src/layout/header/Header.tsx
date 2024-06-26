import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, InputBase, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Notifications from "src/components/Notifications/Notifications";

const pages = ["Urgent", "Company", "Location", "About Us"];
const settings: string[] = ["Profile", "Account", "Feedback", "Logout"];

type HeaderProps = { sx?: React.CSSProperties };
export default function Header({ sx }: HeaderProps) {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElNotif, setAnchorElNotif] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNotifMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotif(event.currentTarget);
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    handleOpenNotifMenu(event);
  };

  const handleMenuClick = (setting: string) => {
    if (setting === "Profile") {
      navigate("/profile");
    }
    if (setting === "Feedback") {
      navigate("/feedback");
    }
    // Add other navigation logic here if needed
    handleCloseUserMenu(); // Close the menu after navigating
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNotifMenu = () => {
    setAnchorElNotif(null);
  };

  return (
    <Box position="absolute" sx={{ zIndex: 1, width: "97vw" }}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mx: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
          onClick={() => navigate("/")}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <SearchIcon color="warning" />
          </Box>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: { xs: "none", md: "flex" },
              borderRadius: 20,
              height: 40,
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search " />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>

          <IconButton
            component="span" // Add the component prop with the value "span"
            onClick={handleNotificationClick}
            sx={{ cursor: "pointer", color: "#FFFFFF" }}
          >
            <NotificationsActiveIcon />
          </IconButton>

          <Popover
            id="notification-popover"
            open={Boolean(anchorElNotif)}
            anchorEl={anchorElNotif}
            onClose={handleCloseNotifMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{ padding: 2 }}
          >
            <Notifications />
          </Popover>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}
