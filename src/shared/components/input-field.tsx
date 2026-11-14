type Props = { children: React.ReactNode };

export default function InputField({ children }: Props) {
  return <div className="input-field flex gap-1.5 flex-col">{children}</div>;
}
