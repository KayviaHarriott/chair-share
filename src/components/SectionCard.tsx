interface SectionProps {
  width: number;
  title: string;
  description: string;
  content?: React.ReactNode;
  image?: string;
}
export const SectionCard: React.FC<SectionProps> = ({
  width,
  title,
  description,
  image,
}) => {
  return (
    <div
      className="h-[300px] flex flex-col rounded-lg pt-8 pb-4 px-3"
      style={{ width: `calc(1/${width} * 100%` }}
    >
      <div className="flex flex-col pt-3 items-center">
        <img className="h-[150px] w-full object-cover rounded-sm" src={image} />
      </div>
      <div className="flex flex-col items-center text-center pt-2">
        <p className="font-bold">{title}</p>
        <p className="font-light text-sm text-slate-600 max-w-60">
          {description}
        </p>
      </div>
    </div>
  );
};
