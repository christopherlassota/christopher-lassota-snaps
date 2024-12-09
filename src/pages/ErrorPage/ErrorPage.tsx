import "./ErrorPage.scss";
import Header from "../../components/Header/Header";

const ErrorPage = () => {
  return (
    <>
      <Header filterClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        filterMenuToggle={false}/>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </>
  );
};

export default ErrorPage;
