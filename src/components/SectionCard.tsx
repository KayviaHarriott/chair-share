interface SectionProps {
  width: number;
  content: React.ReactNode;
}
export const SectionCard: React.FC<SectionProps> = ({ width, content }) => {
  return (
    <div
      className="h-[250px] flex flex-col border-gray-200 bg-white border rounded-lg py-2 px-3"
      style={{ width: `calc(1/${width} * 100%` }}
    >
      {content}
    </div>
  );
};
