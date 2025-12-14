interface SectionProps {
  width: number;
  title: string;
  description: string;
  content: React.ReactNode;
}
export const SectionCard: React.FC<SectionProps> = ({ width, title, description, content }) => {
  return (
    <div
      className="h-[250px] flex flex-col  bg-[#ECECEC] rounded-lg pt-8 pb-4 px-3"
      style={{ width: `calc(1/${width} * 100%` }}
    >
        <div className="flex flex-col items-center">
            <p className="font-bold text-lg">{title}</p>
            <p className="font-light">{title}</p>
        </div>
        <div className="flex flex-col justify-between h-full">
                      <p>One</p>
                      <div>
                        <p>Box</p>
                      </div>
                    </div>
        {/* {content} */}
    </div>
  );
};
