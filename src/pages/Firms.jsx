import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import FirmCard from "../components/FirmCard";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Firms = () => {
  const { getFirms } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getFirms();
    // eslint-disable-next-line
  }, []);
  // console.log(firms);
  return (
    <Box>
      <Typography color="red" variant="h4">
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {firms.map((firm) => (
          <FirmCard key={firm._id} {...firm} />
        ))}
      </div>
    </Box>
  );
};

export default Firms;
