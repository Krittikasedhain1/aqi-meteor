import { clsx } from "clsx";

const skeletonDefaultClasses =
  "block w-fit max-w-full rounded bg-gray-200 animate-pulse";

const Skeleton = ({
  className,
  children = "",
}: {
  className: string;
  children?: React.ReactNode;
}) => {
  return (
    <span className={clsx(skeletonDefaultClasses, className)}>{children}</span>
  );
};

export default Skeleton;
