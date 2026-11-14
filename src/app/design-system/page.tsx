import InputField from "@/shared/components/input-field";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { BadgeCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 py-5">
      {/* Buttons */}
      <div className="buttons flex gap-4 items-center justify-center">
        {/* Primary Button */}
        <Button>Primary</Button>

        {/* Secondary Button */}
        <Button variant={"secondary"}>Secondary</Button>

        {/* Destructive Button */}
        <Button variant={"destructive"}>Destructive</Button>

        {/* Ghost Button */}
        <Button variant={"ghost"}>Ghost</Button>

        {/* Outline Button */}
        <Button variant={"outline"}>Outline</Button>
      </div>

      {/* Badges */}
      <div className="badges flex flex-wrap items-center justify-center gap-4">
        <Badge variant="verified">
          <BadgeCheck aria-hidden className="text-teal-300" />
          موثق
        </Badge>
        <Badge variant="hero-badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#F59E0B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-star preview-icon"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
          للطلبة فى جامعات مصر
        </Badge>
        <Badge variant="nearby">قريب من الجامعة</Badge>
        <Badge variant="reserved">محجوز</Badge>
        <Badge variant="neutral">محايد</Badge>
        <Badge variant="new">جديد</Badge>
        <Badge variant="basic">أساسي</Badge>
      </div>

      {/* Inputs */}
      <div className="inputs flex flex-wrap items-center justify-center gap-4">
        {/* Default Input */}
        <InputField>
          <Label htmlFor="name">الإسم الأول</Label>
          <Input placeholder="مثال: يوسف أحمد" id="name" />
        </InputField>

        {/* Destructive Input */}
        <InputField>
          <Label htmlFor="name">رقم الهاتف</Label>
          <Input
            placeholder="مثال: يوسف أحمد"
            id="name"
            data-destructive={true}
          />
        </InputField>

        {/* Default Input */}
        <InputField>
          <Label htmlFor="name">الإسم الأول</Label>
          <Input placeholder="مثال: يوسف أحمد" id="name" disabled />
        </InputField>
      </div>
    </div>
  );
}
