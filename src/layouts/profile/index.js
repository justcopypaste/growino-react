import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Header from "layouts/profile/components/Header";
import Footer from "../../examples/Footer";
import { useEffect, useState } from "react";

function Overview() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const userid = window.localStorage.getItem("userid")
    fetch(`https://www.growino.app:420/api/profile?userid=${userid}`)
      .then((res) => res.json())
      .then((res) => {
        let p = res[0]
        p.fullName = p.name + " " + p.surname
        setProfile(p)
        console.log(p);
      }).catch((err) => console.log(err))
  }, [])

  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={6}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              dob={profile.dob}
              info={{
                fullName: profile.fullName,
                email: profile.email
              }}
            />
          </Grid>
          {/* <Grid
            item
            xs={12}
            xl={6}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <PlatformSettings />
          </Grid> */}
        </Grid>
      </VuiBox>
        <Footer />
    </DashboardLayout>
  );
}

export default Overview;
