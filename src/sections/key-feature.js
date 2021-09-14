/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Hızlı Performan",
    title: "Hızlı Performans",
    text: "En hızlı ve operatif bilgi ala bileceğiniz firmalardan biriyiz",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Bayilik Servisi",
    title: "Bayilik Servisi",
    text:
      "Bayilik servisi ile birlikte bizimle çalışabilir ve daha fazla gelir elde ede bilirsiniz",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Üst düzey müşteriler",
    title: "Üst düzey müşteriler",
    text:
      "Bizimle yaptığın işbirligi ile siz kendinize daha fazla biznes partneri bula bilirsiniz",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Müşteri hizmetleri",
    title: "Müşteri hizmetleri",
    text:
      "Satıştan sonra bile işletmeniz için daha fazla işe yarayacağımızdan eminiz",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.KeyFeature" }} id='feature'>
      <Container>
        <SectionHeader slogan='Slogan girin' title='Text girin' />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
