import {Authenticator, CheckboxField, useAuthenticator, withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

const withSecurity = (Component) => {

  return withAuthenticator(Component, {
    loginMechanisms: ['email'],
    socialProviders: ['facebook', 'google'],
    signUpAttributes: ['family_name', 'given_name'],
    components: {
      // Customize `Authenticator.SignUp.FormFields`
      SignUp: {
        FormFields() {
          const {validationErrors} = useAuthenticator();

          return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields/>

                {/* Append & require Terms & Conditions field to sign up  */}
                {/*<CheckboxField*/}
                {/*    errorMessage={validationErrors.acknowledgement}*/}
                {/*    hasError={!!validationErrors.acknowledgement}*/}
                {/*    name="acknowledgement"*/}
                {/*    value="yes"*/}
                {/*>*/}
                {/*  I agree with the <a href="/terms-and-conditions">Terms & Conditions</a>*/}
                {/*</CheckboxField>*/}
              </>
          );
        }
      }
    },
    services: {
      async validateCustomSignUp(formData) {
        if (!formData.acknowledgement) {
          return {
            acknowledgement: 'You must agree to the Terms & Conditions',
          };
        }
      },
    }
  })
}

export default withSecurity;