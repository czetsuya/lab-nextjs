import HomePage from "../views/HomePage";
import withSecurity from "../utils/withSecurity";

const Home = () => {
  return (
    <HomePage/>
  )
}

export default withSecurity(Home);