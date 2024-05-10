import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import BrandCard from "../components/BrandCard";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Brands = () => {
  const { getStock } = useStockRequest();
  const { brands } = useSelector((state) => state.stock);

  useEffect(() => {
    getStock("brands");
    // eslint-disable-next-line
  }, []);
  
  return (
    <Box>
      <Typography  color="red" variant="h4">Brands</Typography>
      <Button variant="contained">New Brand</Button>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {brands.map((brand) => (<BrandCard key={brand._id} {...brand} />))}
    </div>
    </Box>
  );
};

export default Brands;
