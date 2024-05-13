import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../services/useStockRequest";

export default function BrandCard({ brand, handleOpen, setInfo }) {
  const { name, image, _id } = brand;
  const { deleteStock } = useStockRequest();

  return (
    <Card sx={{ width: 340, margin: "8px" }}>
      <Typography variant="h5" component="div" textAlign="center" mt="20px">
        {name}
      </Typography>
      <CardMedia
        component="img"
        sx={{ height: 180, margin: "10px 0" }}
        image={image}
        title={name}
      />

      <CardActions
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button size="small" onClick={() => deleteStock("brands", _id)}>
          <DeleteIcon />
        </Button>
        <Button
          size="small"
          onClick={() => {
            handleOpen();
            setInfo(brand);
          }}
        >
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
