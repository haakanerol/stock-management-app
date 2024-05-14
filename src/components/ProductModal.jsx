import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import useStockRequest from "../services/useStockRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ open, handleClose, setInfo, info }) {
  const { categories, brands } = useSelector((state) => state.stock);

  //   console.log("categories:", categories, "brands:", brands);

  const { postStock } = useStockRequest();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", info);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                value={info.categoryId}
                label="category"
                onChange={handleChange}
                required
              >
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brandId">Brands</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                value={info.brandId}
                label="brands"
                onChange={handleChange}
                required
              >
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />

            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
