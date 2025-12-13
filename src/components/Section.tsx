interface SectionProps {
  content: React.ReactNode;
  backgroundColor?: string;
}
export const Section: React.FC<SectionProps> = ({
  content,
  backgroundColor,
}) => {
  return (
    <div className="flex items-center justify-center" style={{ backgroundColor: backgroundColor ? backgroundColor : "" }}>
      <div className="max-w-[1200px] w-full">{content}</div>
    </div>
  );
};
