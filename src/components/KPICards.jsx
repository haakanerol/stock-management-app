import Paper from "@mui/material/Paper";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { purple, amber, green } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KPICards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  // console.log(sales);
  const totalSales = sales?.reduce((acc, sale) => acc + sale.amount, 0);
//   console.log(totalSales);
  const totalPurchases = purchases?.reduce(
    (acc, purch) => acc + purch.amount,
    0
  );
//   console.log(totalPurchases);

  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon />,
      amount: "€" + totalSales.toLocaleString("no-NO"),
      color: green[700],
      bgColor: green[200],
    },
    {
      id: 2,
      title: "Profit",
      icon: <PaymentsIcon />,
      amount: "€" + (totalSales - totalPurchases).toLocaleString("no-NO"),
      color: purple[700],
      bgColor: purple[200],
    },
    {
      id: 3,
      title: "Purchases",
      icon: <ShoppingCartIcon />,
      amount: "€" + totalPurchases.toLocaleString("no-NO"),
      color: amber[700],
      bgColor: amber[200],
    },
  ];

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((item) => (
        <Paper
          key={item.id}
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
            gap: 2,
            width: 250,
          }}
        >
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
          <Box m={1} pl={2}>
            <Typography>{item.title}</Typography>
            <Typography>{item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
