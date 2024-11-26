import style from "./PageHeader.module.css"
interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader(props: Props) {
  return (
    <div className={style.page_header}>
      <h1 className={style.page_header__title}>{props.title}</h1>
      <h2 className={style.page_header__subtitle}>{props.subtitle}</h2>
    </div>
  );
}
