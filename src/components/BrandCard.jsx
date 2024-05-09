import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function BrandCard({ name, image }) {
  return (
    <Card sx={{ width: 340, margin: "8px" }}>
      <Typography variant="h5" component="div" textAlign="center" mt="20px">
        {name}
      </Typography>
      <CardMedia
        component="img"
        sx={{ height: 180, margin:"10px 0"}}
        image={image}
        title={name}
      />

      <CardActions
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button size="small">
          <DeleteIcon />
        </Button>
        <Button size="small">
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
