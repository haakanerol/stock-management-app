import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import FirmCard from "../components/FirmCard";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", image: "", address: "" });
  };

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });

  useEffect(() => {
    getStock("firms");
    // eslint-disable-next-line
  }, []);
  // console.log(firms);
  return (
    <Box>
      <Typography color="red" variant="h4" mb={1}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {firms.map((firm) => (
          <FirmCard key={firm._id} firm={firm} open={open}
          setInfo={setInfo}
          handleOpen={handleOpen}/>
        ))}
      </div>
    </Box>
  );
};

export default Firms;
