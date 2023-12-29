import { ReactNode } from "react";

type MessageProps = {
  children: ReactNode;
};
const Message = ({ children }: MessageProps) => {
  return <h2 className="text-center text-red-500 text-3xl font-semibold capitalize">{children}</h2>;
};

export default Message;
