import { cva } from "class-variance-authority"

/**
 * Class names for the three pill variants defined in index.css.
 * Primary is the cobalt "special" button: use it once or twice per view.
 */
export const pill = cva("pill", {
  variants: {
    variant: {
      primary: "pill-primary",
      secondary: "pill-secondary",
      tertiary: "pill-tertiary",
    },
    size: {
      md: "",
      sm: "pill-sm",
    },
    icon: {
      true: "pill-icon",
      false: "",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "md",
    icon: false,
  },
})
