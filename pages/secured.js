import SecuredPage from "../views/SecuredPage";
import withSecurity from "../utils/withSecurity";

const Secured = ({user, signOut}) => {
  console.log(JSON.stringify(user))
  return (
     <SecuredPage signOut={signOut}/>
  )
}

export default withSecurity(Secured);
