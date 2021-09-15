import Navigation from "../../components/navigation/Navigation";
import NavigationWithSubMenu from "../../components/navigation/NavigationWithSubMenu";
import GlobalStyles from "../../styles/GlobalStyles";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {/* <NavigationWithSubMenu /> */}
      <main>{children}</main>
    </>
  );
}
