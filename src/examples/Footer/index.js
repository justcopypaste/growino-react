

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2024 
          <VuiTypography
            component="a"
            variant="button"
            href="https://www.growino.app/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
            ml="5px"
          >
             Growino
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox item xs={10}>
        <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.growino.app/shop"
              variant="body2"
              color="white"
            >
              Shop
            </VuiTypography>
          </VuiBox>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.growino.app/docs"
              variant="body2"
              color="white"
            >
              Docs
            </VuiTypography>
          </VuiBox>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://github.com/justcopypaste/growino"
              variant="body2"
              color="white"
            >
              Github
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              component="a"
              href="https://www.growino.app/license"
              variant="body2"
              color="white"
            >
              License
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
