export function Container({ children, color, className }) {
  return (
    <div className={`px-[16px] lg:px-[165px] ${color} ${className}`}>{children}</div>
  );
}

export default Container;
