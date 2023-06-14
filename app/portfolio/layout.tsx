export const metadata = {
  title: "Welcome to my portfolio!",
  description: `Let's work together!`,
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
