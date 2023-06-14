export const metadata = {
  title: "The ARChive",
  description: `My personal blog`,
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
