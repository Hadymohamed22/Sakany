import { UserGroup, Moon, MapPin } from "lucide-react";

type IconData = {
  icon: React.ReactNode;
  color: string;
};

// Variables
const icons = {
  group: {
    icon: <UserGroup size={18} />,
    color: "#2DD4BF",
  },
  moon: {
    icon: <Moon size={18} />,
    color: "#F87171",
  },
  location: {
    icon: <MapPin size={18} />,
    color: "#FBBF24",
  },
} satisfies Record<string, IconData>;

export type FeatureCardIconKey = keyof typeof icons;

type Props = {
  icon: FeatureCardIconKey;
  title: string;
  subtitle: string;
};

export default function FeatureCard({ icon, title, subtitle }: Props) {
  return (
    <div className="card border border-[#302C2C] space-y-2.5 text-center p-6 rounded-xl bg-[#242020]">
      {/* Icon */}
      <div
        className={
          "size-10 flex items-center justify-center mx-auto rounded-full"
        }
        style={{
          color: icons[icon].color,
          backgroundColor: `${icons[icon].color}33`,
        }}
      >
        {icons[icon].icon}
      </div>

      {/* Title */}
      <h5 className="text-sm md:text-base font-bold text-gray-100">{title}</h5>

      {/* Subtitle */}
      <p className="text-[0.625rem] md:text-xs text-[#9CA3AF]">{subtitle}</p>
    </div>
  );
}
