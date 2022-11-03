import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RelatedVideos = (props) => {
  const { relatedVideos } = props;
  return (
    <Grid>
      {relatedVideos.map((video) => (
        <Card sx={{ display: "flex" }} key={video.id.videoId}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {video.snippet.title}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: video.snippet.thumbnails.default.width }}
            image={video.snippet.thumbnails.default.url}
            alt="Live from space album cover"
          />
        </Card>
      ))}
    </Grid>
  );
};

export default RelatedVideos;
