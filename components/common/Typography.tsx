import { cn } from "@/lib/utils";

interface TypographyProps {
  className?: string;
  text: string;
}

function H1({ className, text }: TypographyProps) {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{text}</h1>;
}

function H2({ className, text }: TypographyProps) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {text}
    </h2>
  );
}

function H3({ className, text }: TypographyProps) {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{text}</h3>;
}

function H4({ className, text }: TypographyProps) {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{text}</h4>;
}

const Typography = {
  H1,
  H2,
  H3,
  H4,
};

export default Typography;
