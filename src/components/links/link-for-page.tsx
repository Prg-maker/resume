import { ComponentProps, ReactNode, useState } from "react";

interface LinkForPageProps extends ComponentProps<"a"> {
  children: ReactNode,
  text: string
}

export function LinkForPage({ children, text,...props }: LinkForPageProps) {

  const [font , _] = useState(window.localStorage.getItem("font")?? "Inter")

  return (
    <a
      {...props}
      className={`font-${font} flex items-center  lg:justify-start justify-center  gap-4  w-full px-4  py-1 rounded-lg  bg-transparent hover:bg-[#D0D0D0] transition-all `}
    >
      <span>{children}</span>
        {text}
    </a>
  );
}
