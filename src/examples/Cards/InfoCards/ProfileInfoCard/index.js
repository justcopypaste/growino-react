import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function ProfileInfoCard({ title, dob, info }) {
  const labels = [];
  const values = [];

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // DOB
  labels.push("date of birth")
  values.push(new Date(dob).toLocaleDateString('en-GB', { timeZone: 'UTC' }))

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <VuiBox key={label} display="flex" py={1} pr={2}>
      <VuiTypography variant="button" color="text" fontWeight="regular" textTransform="capitalize">
        {label}: &nbsp;
      </VuiTypography>
      <VuiTypography variant="button" fontWeight="regular" color="white">
        &nbsp;{values[key]}
      </VuiTypography>
    </VuiBox>
  ));

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <VuiBox display="flex" mb="14px" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox opacity={0.3}>
          <Divider />
        </VuiBox>
        <VuiBox>
          {renderItems}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired
};

export default ProfileInfoCard;
