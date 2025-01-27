import { IconType } from "react-icons";
import { BsThreeDots } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { Card, CardProps } from "../../../../common/Card";
import theme from "../../../../service/tailwindTheme";

type MergeProps = {
  icon: IconType;
  title: string;
  value: string;
  type: "actual" | "block" | "access";
};

type CardDashboardProps = MergeProps & CardProps;

// Continuar os preparativos para esse cara aqui, melhorando a lógica do mesmo

const objBgPrimary = {
  actual: "bg-primary-800",
  access: "bg-primary-600",
  block: "bg-primary-200 text-primary-400",
};

export const CardDashboard = ({
  icon: Icon,
  onClick,
  title,
  value,
  type,
}: CardDashboardProps) => {
  const iconRight =
    type === "block" ? (
      <MdLockOutline size={24} color={theme.colors.primary[600]} />
    ) : (
      <BsThreeDots
        size={24}
        color={theme.colors.primary[400]}
        className="cursor-pointer"
      />
    );
  return (
    <Card
      className={`${objBgPrimary[type]} selection:bg-transparent select-none`}
      onClick={onClick}
    >
      <>
        <div className="flex justify-between gap-2 mb-2.5">
          <Icon size={24} color={theme.colors.primary[400]} />
          {iconRight}
        </div>
        <div className="space-y-2.5 font-bold">
          <p className="text-base">{title}</p>
          <p className="text-2xl">{value}</p>
        </div>
      </>
    </Card>
  );
};
