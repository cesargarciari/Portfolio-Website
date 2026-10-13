import { cva } from "class-variance-authority"

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
