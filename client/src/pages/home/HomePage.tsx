import PageHeader from "../../components/page/PageHeader";
import { Link } from "react-router-dom";
import style from "./HomePage.module.css"

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="Welcome to BabyHub"
        subtitle="Connect with trusted babysitters and find the perfect match for your family."
      />

      <section className={style.cta_section}>
        <h2>Ready to Get Started?</h2>
        <p>Join us today and find the perfect babysitter for your needs!</p>
        <button className="cta-button">
          <Link to="/login">Get Started</Link>
        </button>
      </section>
    </>
  );
}
