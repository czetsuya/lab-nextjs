import {Authenticator, CheckboxField, useAuthenticator} from "@aws-amplify/ui-react";

const {withAuthenticator} = require("@aws-amplify/ui-react");

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
                <CheckboxField
                    errorMessage={validationErrors.acknowledgement}
                    hasError={!!validationErrors.acknowledgement}
                    name="acknowledgement"
                    value="yes"
                >
                  I agree with the Terms & Conditions
                </CheckboxField>
              </>
          );
        },
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