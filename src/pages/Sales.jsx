import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockRequest from "../services/useStockRequest";
import { useEffect, useState } from "react";
import SalesTable from "../components/SalesTable";
import SalesModal from "../components/SalesModal";

const Sales = () => {
  const { getStock } = useStockRequest();
  const [open, setOpen] = useState(false);

  const initialState = {
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  };
  const [info, setInfo] = useState(initialState);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStock("sales");
    getStock("brands");
    getStock("products");
    // eslint-disable-next-line
  }, []);
 

  return (
    <div>
      <Typography color="red" variant="h4" mb={1}>
        Sales
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>
      <SalesTable handleOpen={handleOpen} info={info} setInfo={setInfo} />
      <SalesModal
        open={open}
        info={info}
        setInfo={setInfo}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Sales;
