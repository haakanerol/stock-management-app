import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import BrandCard from "../components/BrandCard";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BrandModal from "../components/BrandModal";

const Brands = () => {
  const { getStock } = useStockRequest();
  const { brands } = useSelector((state) => state.stock);
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
    getStock("brands");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Typography color="red" variant="h4">
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Brand
      </Button>

      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Grid container gap={2} mt={2} justifyContent={"center"}>
        {brands.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard brand={brand} handleOpen={handleOpen} setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brands;
