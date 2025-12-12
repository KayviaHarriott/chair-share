interface BannerIconCardProps {
    icon: string;
    alt: string;
    title: string;
    description: string;
    key: number;
}

export const BannerIconCard: React.FC<BannerIconCardProps> = ({icon, alt, title, description, key}) => {
  return (
    <div key={key} className="flex flex-col items-center">
      <div className="h-18 w-18 rounded-full flex items-center justify-center mb-2">
        <img
          src={icon}
          alt={alt}
          className="h-10 w-10"
        />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-green-300">
        {description}
      </p>
    </div>
  );
};
