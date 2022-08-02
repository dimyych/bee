import React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import filterIcon from "img/NavBar/filter-icon.png";

const NavBar = ({ apiaries, apiary, setApiary}) => {

  const handleChangeApiary = (event) => {
    setApiary(event.target.value);
  };

  const [filter, setFilter] = React.useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const ApiaryStyle = styled(InputBase)(({ theme }) => ({
    width: "169px",
    height: "42px",
    background: "#F59E0B",
    border: "1px solid #D97706",
    borderRadius: "6px",
    color: "white",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    "& svg": { color: "white" },
  }));

  const FilterStyle = styled(InputBase)(({ theme }) => ({
    width: "193px",
    height: "42px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    color: "#374151",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    "& svg": { color: "#D1D5DB" },
  }));

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 44,
    height: 23,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(24px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: "1px 2px",
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#F59E0B",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 20,
      height: 20,
      borderRadius: 100,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 100,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div className="navBar">
      <FormControl className="navBar__apiarySelect">
        <Select
          sx={{ pl: "13px", marginRight: "28px" }}
          value={apiary}
          onChange={handleChangeApiary}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          input={<ApiaryStyle />}
        >
          {apiaries.map((apiarie, i) => {
            if (i == 0) {
              return (
                <MenuItem
                  key={apiarie.id}
                  value=""
                  sx={{ width: "169px", height: "42px" }}
                >
                  <em>{apiarie.name}</em>
                </MenuItem>
              );
            } else
              return (
                <MenuItem
                  key={apiarie.id}
                  value={apiarie.id}
                >
                  <em>{apiarie.name}</em>
                </MenuItem>
              );
          })}
          {/* <MenuItem value='' sx={{ width: "169px", height: "42px" }}>
            <em>{''}</em>
          </MenuItem>
          <MenuItem value={10}>Пасіка 2</MenuItem>
          <MenuItem value={20}>Пасіка 3</MenuItem>
          <MenuItem value={30}>Пасіка 4</MenuItem> */}
        </Select>
      </FormControl>

      <FormControl className="navBar__filterSelect">
        <Select
          sx={{
            pl: "47px",
            background: `url(${filterIcon}) no-repeat 14px 12px`,
            marginRight: "28px",
          }}
          value={filter}
          onChange={handleChangeFilter}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          input={<FilterStyle />}
        >
          <MenuItem value="">
            <em>Фільтрувати</em>
          </MenuItem>
          <MenuItem value={10}>
            Статус вулика (с жовтою і красною позначкою)
          </MenuItem>
          <MenuItem value={20}>Статус вулика ( с зеленою позначкою)</MenuItem>
          <MenuItem value={30}>
            Температура вулика (меньше порового значення)
          </MenuItem>
          <MenuItem value={40}>
            Температура вулика (більше порового значення)
          </MenuItem>
        </Select>
      </FormControl>

      <FormGroup className="navBar__alarms" sx={{ marginRight: "18px" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AntSwitch inputProps={{ "aria-label": "ant design" }} />
        </Stack>
      </FormGroup>

      <h2 className="navBar__alarms-text">Сигналізація</h2>
    </div>
  );
};

export default NavBar;
