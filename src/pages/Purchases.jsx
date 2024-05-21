import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockRequest from "../services/useStockRequest";
import { useEffect, useState } from "react";
import PurchasesTable from "../components/PurchasesTable";
import PurchaseModal from "../components/PurchaseModal";

const Purchases = () => {
  const { getStockForPurch } = useStockRequest();

  const [open, setOpen] = useState(false);

  const initialState = {
    firmId: "",
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
    // getStock("purchases");
    // getStock("firms");
    // getStock("brands");
    // getStock("products");
    getStockForPurch();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Typography color="red" variant="h4" mb={1}>
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>

      <PurchasesTable info={info} setInfo={setInfo} handleOpen={handleOpen}/>

      <PurchaseModal
        open={open}
        info={info}
        setInfo={setInfo}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Purchases;
