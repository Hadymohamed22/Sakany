import LandingFooter from "./_components/landing-footer";
import LandingHeader from "./_components/landing-header";

type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return (
    <>
      {/* Landing Page Header */}
      <LandingHeader />

      <main>{children}</main>

      {/* Landing Page Footer */}
      <LandingFooter />
    </>
  );
}
