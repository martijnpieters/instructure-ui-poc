import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div
      style={{
        width: 1140,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
