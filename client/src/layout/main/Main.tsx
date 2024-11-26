import React from "react";
import CommentRejister from "../../components/CommentRegister";
import "./Main.module.css";
interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
      <CommentRejister id={`$`} />
      <main>{children}</main>
    </>
  );
}
