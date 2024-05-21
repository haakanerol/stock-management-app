import Paper from "@mui/material/Paper";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const KPICards = () => {
  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon />,
      amount: "€15000",
      color: "green",
      bgColor: "lightgreen",
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingCartIcon />,
      amount: "€25000",
      color: "purple",
      bgColor: "lightpurple",
    },
  ];

  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
      {kpiData.map((item) => (
        <Paper key={item.id} elevation={3} sx={{ display: "flex" }}>
          <Avatar
            sx={{
              bgcolor: item.bgColor,
              color: item.color,
              width: 65,
              height: 65,
            }}
          >
            {item.icon}
          </Avatar>
          <Box>
            <Typography>{item.title}</Typography>
            <Typography>{item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
