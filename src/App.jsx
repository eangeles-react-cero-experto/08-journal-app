import { MainRouter } from "./router/MainRouter.jsx";
import { AppTheme } from "./theme/AppTheme.jsx";

export const App = () => {
  return (
    <AppTheme>
      <MainRouter />
    </AppTheme>
  );
};
