/* eslint-disable @typescript-eslint/no-namespace */
import { memo } from "react";
import { makeStyles, Text } from "gitlanding/theme";
import { GlLogo } from "gitlanding/utils/GlLogo";
import { GlCard } from "gitlanding/GlCards/GlCard";
import type { GlCardProps } from "gitlanding/GlCards/GlCard";
import { breakpointsValues } from "gitlanding/theme";
import { GlButton } from "gitlanding/utils/GlButton";
import { Markdown } from "gitlanding/tools/Markdown";
import { Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { Popper, Paper, Typography } from "@mui/material";
import {
  usePopupState,
  bindHover,
  bindPopover,
  bindPopper,
} from "material-ui-popup-state/hooks";

export type MarkdownCardProps = GlCardProps & {
  iconUrls?: string[];
  title?: string;
  paragraph?: string;
  buttonLabel?: string;
  overlapIcons?: boolean;
  github?: string;
  source?: string;
  sourcePopup?: string;
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
};

export const MarkdownCard = memo((props: MarkdownCardProps) => {
  const {
    className,
    iconUrls,
    paragraph,
    title,
    buttonLabel,
    overlapIcons,
    link,
    github,
    source,
    sourcePopup,
  } = props;

  const { classes, cx, css } = useStyles(
    {
      overlapIcons: overlapIcons ?? false,
    },
    { props }
  );

  const sourcePopupState = usePopupState({
    variant: "popper",
    popupId: "sourcePopper",
  });

  const githubPopupState = usePopupState({
    variant: "popper",
    popupId: "githubPopper",
  });

  return (
    <GlCard link={link} className={cx(classes.root, className)}>
      {iconUrls && (
        <div className={classes.iconWrapper}>
          {iconUrls
            .map((url, index) => (
              <GlLogo
                className={cx(
                  classes.icon,
                  css({
                    //"zIndex": iconUrls.length - index,
                    //"order": iconUrls.length - index
                  })
                )}
                logoUrl={url}
                key={index}
              />
            ))
            .reverse()}
        </div>
      )}

      <div className={classes.textWrapper}>
        {title !== undefined && (
          <Text typo="section heading" className={classes.title}>
            {title}
          </Text>
        )}
        {paragraph !== undefined && (
          <Markdown className={classes.paragraph}>{paragraph}</Markdown>
        )}
      </div>

      <Stack direction="row" alignItems="center">
        {buttonLabel !== undefined && (
          <GlButton
            type="submit"
            href={link?.href}
            variant="secondary"
            onClick={link?.onClick}
            className={classes.button}
          >
            {buttonLabel}
          </GlButton>
        )}
        {github && (
          <div>
            <IconButton
              href={"https://github.com/" + github}
              color="inherit"
              sx={{ py: 0, ml: 2, mr: 0, pr: 0 }}
              {...bindHover(githubPopupState)}
            >
              <GitHubIcon />
            </IconButton>
            <HoverPopover
              {...bindPopover(githubPopupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography style={{ margin: 10 }}>View GitHub Repository</Typography>
            </HoverPopover>
          </div>
        )}
        {source && (
          <div>
            <IconButton
              href={source}
              color="inherit"
              sx={{ py: 0, ml: 2, mr: 0, pr: 0 }}
              {...bindHover(sourcePopupState)}
            >
              <CodeIcon />
            </IconButton>
            <HoverPopover
              {...bindPopover(sourcePopupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography style={{ margin: 10 }}>
                {sourcePopup ?? "Download source"}
              </Typography>
            </HoverPopover>
          </div>
        )}
      </Stack>
    </GlCard>
  );
});

const useStyles = makeStyles<{
  overlapIcons: boolean;
}>({ name: { MarkdownCard } })((theme, { overlapIcons }) => ({
  root: {
    padding: theme.spacing({
      rightLeft: 3,
      topBottom: 4,
    }),
    boxShadow: theme.shadows[1],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: (() => {
      if (theme.windowInnerWidth >= breakpointsValues.lg) {
        return undefined;
      }

      return theme.spacing(1);
    })(),
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    transform: "rotate(180deg)",
    ...(overlapIcons
      ? {
          marginLeft: -theme.spacing(3),
        }
      : {}),
  },

  icon: {
    transform: "rotate(180deg)",
    ...(!overlapIcons
      ? {
          ...theme.spacing.rightLeft("margin", `${theme.spacing(1)}px`),
        }
      : {
          marginLeft: -theme.spacing(3),
        }),
    ...(() => {
      const value = (() => {
        if (theme.windowInnerWidth >= breakpointsValues.lg) {
          return 50;
        }

        return 40;
      })();

      return {
        width: value,
        fill: theme.colors.palette.focus.main,
        "& svg": {
          width: value,
          height: value,
        },
      };
    })(),
  },
  title: {
    marginTop: theme.spacing(4),
  },
  paragraph: {
    marginTop: theme.spacing(4),
  },
  textWrapper: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  button: {},
}));
