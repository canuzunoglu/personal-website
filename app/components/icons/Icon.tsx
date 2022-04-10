import type { IconProps } from "./types";

export const Icon: React.FC<IconProps & { children?: React.ReactNode }> = (
  props
) => {
  const { size, children, ...svgProps } = props;
  const computedSize = size || "1em";
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...svgProps}
      height={computedSize}
      width={computedSize}
    >
      {children}
    </svg>
  );
};
