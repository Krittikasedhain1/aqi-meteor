import clsx from "clsx";
import Link from "next/link";

const Footer = ({ className }: { className?: string }) => (
  <footer
    className={clsx(
      " rounded-t-2xl mt-8 text-gray-700 p-8 text-center flex flex-col gap-1",
      className || "bg-green-300"
    )}
  >
    <p className="text-xs">⚡️ Breathe Easy with AQI Magic ⚡️</p>
    <p className="text-xs ">
      Proudly powered by the mystical&nbsp;
      <Link
        href="https://waqi.info/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Wizards at WAQI
      </Link>
    </p>
    <p className="text-xs  mt-2">
      Spellbound by{" "}
      <span role="img" aria-label="sparkle" className="text-yellow-300">
        ✨
      </span>{" "}
      <span className="font-bold"> AQI Meteor </span>
      <span role="img" aria-label="sparkle" className="text-yellow-300">
        ✨
      </span>
    </p>
  </footer>
);

export default Footer;
