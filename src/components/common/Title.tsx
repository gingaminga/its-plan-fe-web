export interface TitleProps {
  title: string;
  subTitle?: string;
}

export default function Title({ subTitle, title }: TitleProps) {
  return (
    <div className="max-sm:prose-sm prose mb-4 text-center">
      <h3 className="m-0">{title}</h3>
      {subTitle && <h5>{subTitle}</h5>}
    </div>
  );
}
