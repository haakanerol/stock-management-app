import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../services/useStockRequest";

export default function FirmCard({ name, image, address, phone,_id}) {

  const {deleteStock}= useStockRequest()
  return (
    <Card sx={{ maxWidth: 340, margin: "8px" }}>
      <Typography variant="h5" component="div" textAlign="center" mt="20px">
        {name}
      </Typography>
      <CardMedia
        component="img"
        sx={{ height: 180 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {address}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ marginTop: 1 }}
        >
          {phone}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button size="small" onClick={()=>deleteStock("firms",_id)}>
          <DeleteIcon />
        </Button>
        <Button size="small">
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
