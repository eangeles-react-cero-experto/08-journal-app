import { Grid, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing="0"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: "4",
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ padding: 3, borderRadius: 2, bgcolor: "white" }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>
      </Grid>
    </Grid>
  );
};
