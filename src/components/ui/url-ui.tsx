import type { ComponentProps, ReactNode } from "react";


interface UrlUiProps extends ComponentProps<"a"> {
  children: ReactNode,
  text: string
}

export function UrlUi({ children, text,...props }: UrlUiProps) {


  return (
    <a
      {...props}
      className="`font-sans flex items-center   justify-left  gap-5  w-full px-4  py-1 rounded-lg  bg-transparent hover:bg-[#D0D0D0] transition-all "
    >
      <span>{children}</span>
        {text}
    </a>
  );
}
