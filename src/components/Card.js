import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../styles/main.scss";

// This component brings in parameters from the products component.
export default function MediaCard({ name, price, desc, img, id }) {
  return (
    <Card className="product-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        className="card-img"
        sx={{ height: 250 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions className="card-buttons">
        <Button className="price-button" size="small">
          {price} $
        </Button>
        <Button className="more-btn" size="small">
          <Link className="more-btn-more" to={"../Product/" + id}>
            More info
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
