import React from "react";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { decode } from "html-entities";

const SearchPage = (props) => {
  const { videos } = props;
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {videos.map((video) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`${
              video.id.hasOwnProperty("videoId") ? video.id.videoId : video.id
            }`}
          >
            <Card sx={{ height: 360 }}>
              <CardActionArea
                sx={{ height: 360 }}
                component={Link}
                to={`/video/${
                  video.id.hasOwnProperty("videoId")
                    ? video.id.videoId
                    : video.id
                }`}
                value={video}
              >
                <CardMedia
                  component="img"
                  height={video.snippet.thumbnails.medium.height}
                  image={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <CardContent sx={{ height: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {decode(video.snippet.title)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {decode(video.snippet.description)}
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
