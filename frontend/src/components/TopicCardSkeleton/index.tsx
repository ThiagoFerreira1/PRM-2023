import React from "react";
import { Box, Skeleton } from "@mui/material";

function TopicCardSkeleton() {
  return (
    <div id="topic-card-skeleton">
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton width={150} />
        <Skeleton width={150} />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        marginTop="1rem"
        marginLeft={'1rem'}
      >
        <Skeleton width={60} />
        <Skeleton width={60} />
        <Skeleton width={60} />
      </Box>
    </div>
  );
}

export default TopicCardSkeleton;
