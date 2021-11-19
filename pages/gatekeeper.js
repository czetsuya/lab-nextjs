import withSecurity from "../utils/withSecurity";
import {useRouter} from "next/router";

const Gatekeeper = ({user}) => {

  const router = useRouter();

  console.log(JSON.stringify(user))

  setTimeout(() => {
    router.push("/secured");
  }, 3000);

  return (
      <div>Loading</div>
  )

}

export default withSecurity(Gatekeeper);