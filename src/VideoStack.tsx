import { Stack } from "@mui/material";
import { css } from "gitlanding";
import { GlYoutubeVideoSection } from "gitlanding/GlYoutubeVideoSection";
import { breakpointsValues, useTheme } from "gitlanding/theme";

export interface VideoStackProps {
  videos: {
    src: string;
    title: string;
  }[];
}

export const VideoStack = (props: VideoStackProps) => {
  const theme = useTheme();

  const { videos } = props;
  let width: number | string = "90%";
  let height: number | string | undefined = undefined;

  if (theme.windowInnerWidth >= breakpointsValues["md"]) {
    width = 0.9 * theme.windowInnerWidth / videos.length;
    height = width / 100 * 60;
  }
  else if (theme.windowInnerWidth >= breakpointsValues.sm) {
    width = 500;
    height = width / 100 * 60;
  }

  return (
    <Stack
      direction={{ xs: "column", md: "row", lg: "row" }}
      spacing={0}
      alignSelf="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      {videos.map(({ title, src }) => (
        <GlYoutubeVideoSection
          title={title}
          src={src}
          hasAnimation={true}
          width={width}
          height={height}
          classes={{
            root: css({
              padding: 10
            })
          }}
        />
      ))}
    </Stack>
  );
};
