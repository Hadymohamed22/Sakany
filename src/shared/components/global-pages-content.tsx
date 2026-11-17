import Image from "next/image";

/** Props for the shared content displayed on global error and not-found pages. */
type Props = {
  /** Image source for the page illustration. */
  imageSrc: string;
  /** Accessible text describing the illustration. */
  alt: string;
  /** Main page heading. */
  title: string;
  /** Supporting message shown below the heading. */
  subtitle: string;
  /** Page actions, such as links or buttons. */
  children: React.ReactNode;
};

/**
 * Renders an illustration image, title , subTitle , and actions for a global error or
 * not-found page.
 *
 * @param props - illustration image, title , subTitle , and actions to display content
 * @returns The shared global page content layout.
 */
export default function GlobalPagesContent({
  imageSrc,
  alt,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="content relative z-10 grow flex flex-col items-center justify-center">
      {/* Not Found Image */}
      <Image src={imageSrc} alt={alt} loading="eager" />

      {/* Title */}
      <h3 className="text-[#111827] font-bold text-3xl md:text-4xl">{title}</h3>

      {/* Sub Title */}
      <p className="text-[#4B5563] text-sm md:text-base mt-3 px-4 md:px-0">
        {subtitle}
      </p>

      {/* Actions */}
      <div className="actions flex items-center gap-3 mt-8">{children}</div>
    </div>
  );
}
