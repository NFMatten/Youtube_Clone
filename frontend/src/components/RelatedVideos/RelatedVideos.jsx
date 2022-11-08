import * as React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

const RelatedVideos = (props) => {
  const { relatedVideos } = props;

  return (
    <Grid>
      {relatedVideos.map((video) => (
        <Card key={video.id.videoId} sx={{ marginBottom: "10px" }}>
          <CardActionArea
            sx={{ display: "flex", justifyContent: "flex-start" }}
            component={Link}
            to={`/video/${video.id.videoId}`}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                height: video.snippet.thumbnails.default.height,
              }}
            >
              <CardContent sx={{ flex: "0" }}>
                <div
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "9rem",
                  }}
                >
                  <Typography
                    noWrap
                    component="div"
                    variant="body1"
                    sx={{ overflow: "hidden" }}
                  >
                    {video.snippet.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    marginTop="5px"
                    paddingBottom="-5px"
                  >
                    {video.snippet.channelTitle}
                  </Typography>
                </div>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  minWidth: video.snippet.thumbnails.default.width,
                  minHeight: video.snippet.thumbnails.default.height,
                  width: 150,
                  height: 120,
                  position: "absolute",
                  right: 0,
                  flex: "1",
                  top: 0,
                  bottom: 0,
                  margin: "auto",
                }}
                image={video.snippet.thumbnails.default.url}
                alt="Live from space album cover"
              />
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
};

export default RelatedVideos;
