import { clsx } from "clsx";

const skeletonDefaultClasses =
  "block w-full max-w-full rounded bg-gray-200 animate-pulse";

const Skeleton = ({ className }: { className: string }) => {
  return <div className={clsx(skeletonDefaultClasses, className)} />;
};

export default Skeleton;
