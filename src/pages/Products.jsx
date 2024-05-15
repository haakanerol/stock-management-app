import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockRequest from "../services/useStockRequest";
import { useEffect, useState } from "react";
import ProductsTable from "../components/ProductsTable";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const { getStock } = useStockRequest();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [info, setInfo] = useState({ categoryId: "", brandId: "", name: "" });
  const handleClose = () => {
    setOpen(false);
    setInfo({ categoryId: "", brandId: "", name: "" });
  };
  useEffect(() => {
    getStock("products");
    getStock("categories");
    getStock("brands");
    // eslint-disable-next-line
  },[]);
  return (
    <div>
      <Typography color="red" variant="h4" mb={1}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>

      <ProductsTable />

      <ProductModal
        open={open}
        info={info}
        setInfo={setInfo}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Products;
