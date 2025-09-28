import { cn } from "@/lib/utils";

export const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [integerPart, decimalPart] = stringValue.split(".");

  if (decimalPart === "00") {
    return <div className={className}>${integerPart}</div>;
  }
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integerPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  );
};
