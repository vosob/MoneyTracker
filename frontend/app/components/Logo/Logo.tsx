interface LogoProps {
  textColor?: string;
}

export const Logo = ({ textColor }: LogoProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-14 h-14 bg-[var(--main-dark)]"></div>

      {/* h2 */}
      <h2
        style={{ color: textColor || "var(--main-dark)" }}
        className="text-2xl font-bold"
      >
        Spendy
      </h2>
    </div>
  );
};
