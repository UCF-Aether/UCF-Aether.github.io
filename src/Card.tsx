import { makeStyles } from "gitlanding/theme";
import type { ReactNode } from "react";
import { memo } from "react";

export type GlCardProps = {
    className?: string;
    children?: ReactNode;
    link?: {
        href: string;
        onClick?: () => void;
    };
};

export const Card = memo((props: GlCardProps) => {
    const { children, className } = props;

    const { classes, cx } = useStyles();

    return (
        <div
            className={cx(classes.root, className)}
        >
            {children}
        </div>
    );
});

const useStyles = makeStyles({ "name": { Card } })(theme => ({
    "root": {
        "borderRadius": 16,
        "transition": "box-shadow 200ms",
        "margin": theme.spacing(2),
        "boxShadow": theme.shadows[1],
        "backgroundColor": theme.colors.useCases.surfaces.surface1,
        "pointerEvents": "auto",
    },
}));
