import type { IconProps } from "./types";

export const Icon: React.FC<IconProps & { children?: React.ReactNode }> = (
  props
) => {
  const { size, children, ...svgProps } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...svgProps}
      height={size}
      width={size}
    >
      {children}
    </svg>
  );
};
