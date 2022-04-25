import { useTheme, breakpointsValues } from "gitlanding/theme";
import { GlYoutubeVideoSection } from "gitlanding/GlYoutubeVideoSection";
import { Stack } from "@mui/material";

export interface VideoStackProps {
  videos: {
    src: string;
    title: string;
  }[];
}

export const VideoStack = (props: VideoStackProps) => {
  const theme = useTheme();

  const { videos } = props;
  let width: number | string = "100%";
  let height: number | string | undefined = undefined;

  if (theme.windowInnerWidth >= breakpointsValues["lg+"]) {
    width = 0.9 * theme.windowInnerWidth / videos.length;
    height = width / 100 * 60;
  }
  else if (theme.windowInnerWidth >= breakpointsValues.lg) {
    width = 600;
  }
  else if (theme.windowInnerWidth >= breakpointsValues.md) {
    width = 500;
  }
  else if (theme.windowInnerWidth >= breakpointsValues.sm) {
    width = 500;
  }

console.log(theme.windowInnerWidth, breakpointsValues, width);
  return (
    <Stack
      direction={{ xs: "column", md: "column", lg: "row" }}
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
        />
      ))}
    </Stack>
  );
};
