import type { ReactNode } from "react";
import { Card, Label, Value } from "./styles";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
};

function StatCard({ icon, label, value, suffix }: StatCardProps) {
  return (
    <Card>
      <Label>
        {icon}
        {label}
      </Label>
      <Value>
        {value}
        {suffix && <span>{suffix}</span>}
      </Value>
    </Card>
  );
}

export default StatCard;
