/* eslint-disable @typescript-eslint/no-namespace */
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Stack, Typography } from "@mui/material";
import type { GlCardProps } from "gitlanding/GlCards/GlCard";
import { breakpointsValues, makeStyles, Text } from "gitlanding/theme";
import { Markdown } from "gitlanding/tools/Markdown";
import { GlButton } from "gitlanding/utils/GlButton";
import {
    bindHover,
    bindPopover,
    usePopupState
} from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { useDomRect } from "powerhooks/useDomRect";
import { memo, useEffect, useState } from "react";
import { Card } from "./Card";

export type GlProjectCardProps = GlCardProps & {
  projectImageUrl: string;
  badgeLabel?: string;
  badgeColor?: string;
  badgeBackgroundColor?: string;
  title?: string;
  name: string;
  subtitle?: string;
  text?: string;
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  social?: {
    linkedin?: string;
    github?: string;
  };
};

export const PersonCard = memo((props: GlProjectCardProps) => {
  const {
    className,
    text,
    projectImageUrl,
    subtitle,
    title,
    name,
    badgeLabel,
    link,
    badgeBackgroundColor,
    badgeColor,
    social,
  } = props;

  const [imgAspectRatio, setImgAspectRatio] = useState<number | undefined>(
    undefined
  );

  const {
    ref: headerRef,
    domRect: { width: headerWidth },
  } = useDomRect();

  const img = new Image();

  useEffect(() => {
    img.src = projectImageUrl;
    img.onload = () => {
      setImgAspectRatio(img.height / img.width);
    };
  }, [projectImageUrl]);

  const { classes, cx } = useStyles(
    {
      badgeColor,
      badgeBackgroundColor,
      projectImageUrl,
      headerWidth,
      imgAspectRatio,
    },
    { props }
  );

  const githubPopupState = usePopupState({
    variant: "popper",
    popupId: "githubPopper",
  });

  const linkedinPopupState = usePopupState({
    variant: "popper",
    popupId: "githubPopper",
  });

  return (
    <Card className={cx(classes.root, className)}>
      <div ref={headerRef} className={classes.header}>
        {badgeLabel !== undefined && (
          <GlButton
            type="submit"
            className={classes.button}
            variant="ternary"
            href={link?.href}
            onClick={link?.onClick}
          >
            {badgeLabel}
          </GlButton>
        )}
      </div>
      <div className={classes.footer} style={{ pointerEvents: "auto" }}>
        <Stack direction="row" justifyContent="space-between">
          <Text typo="object heading" className={classes.footerTitle}>
            {name}
          </Text>
          <div style={{ display: "flex" }}>
            {social?.github && (
              <div>
                <IconButton
                  href={"https://github.com/" + social.github}
                  color="inherit"
                  sx={{ py: 0 }}
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
                  <Typography style={{ margin: 10 }}>
                    View GitHub Profile
                  </Typography>
                </HoverPopover>
              </div>
            )}
            {social?.linkedin && (
              <div>
                <IconButton
                  href={"https://www.linkedin.com/in/" + social.linkedin}
                  color="inherit"
                  sx={{ py: 0 }}
              {...bindHover(linkedinPopupState)}
                >
                  <LinkedInIcon />
                </IconButton>
                <HoverPopover
                  {...bindPopover(linkedinPopupState)}
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
                    View LinkedIn Profile
                  </Typography>
                </HoverPopover>
              </div>
            )}
          </div>
        </Stack>
        {subtitle !== undefined && (
          <Markdown className={classes.footerSubtitle}>{subtitle}</Markdown>
        )}
        {text !== undefined && (
          <Markdown className={classes.footerText}>{text}</Markdown>
        )}
      </div>
    </Card>
  );
});

const useStyles = makeStyles<
  Pick<
    GlProjectCardProps,
    "badgeBackgroundColor" | "badgeColor" | "projectImageUrl"
  > & {
    headerWidth: number;
    imgAspectRatio: number | undefined;
  }
>()(
  (
    theme,
    {
      badgeBackgroundColor,
      badgeColor,
      projectImageUrl,
      headerWidth,
      imgAspectRatio,
    }
  ) => ({
    root: {
      transition: "opacity 300ms",
      opacity: headerWidth === 0 || imgAspectRatio === undefined ? 0 : 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      pointerEvents: "auto",
      margin: (() => {
        if (theme.windowInnerWidth >= breakpointsValues.lg) {
          return undefined;
        }

        return theme.spacing(1);
      })(),
    },

    footer: {
      flex: 1,
      backgroundColor: theme.isDarkModeEnabled
        ? theme.colors.palette.dark.greyVariant1
        : theme.colors.palette.light.light,
      padding: [4, 5, 4, 5]
        .map((spacing) => `${theme.spacing(spacing)}px`)
        .join(" "),
    },

    footerTitle: {
      marginBottom: theme.spacing(1),
    },

    footerSubtitle: {
      marginBottom: theme.spacing(1),
    },

    header: {
      width: "100%",
      margin: 0,
      background: `url("${projectImageUrl}")`,
      minHeight:
        imgAspectRatio === undefined ? undefined : headerWidth * imgAspectRatio,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      padding: theme.spacing(3),
    },

    button: {
      marinLeft: theme.spacing(7),
      border: "none",
      backgroundColor: badgeBackgroundColor ?? undefined,
      color: (() => {
        if (badgeColor !== undefined) {
          return `${badgeColor} !important`;
        }

        return undefined;
      })(),
    },
    footerText: {},
  })
);
