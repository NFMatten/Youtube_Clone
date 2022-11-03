import React from "react";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SearchPage = (props) => {
  const { videos } = props;

  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id.videoId}>
            <Card sx={{ minHeight: 345 }}>
              <CardActionArea sx={{ minHeight: 345 }}>
                <CardMedia
                  component="img"
                  height={video.snippet.thumbnails.medium.height}
                  image={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {video.snippet.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.snippet.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchPage;
