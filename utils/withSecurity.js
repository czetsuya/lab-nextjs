import React from 'react';
import Link from 'next/link';
import {
  Authenticator,
  Button,
  CheckboxField,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useAuthenticator,
  useTheme,
  View,
  withAuthenticator
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {I18n} from "aws-amplify";

I18n.putVocabulariesForLanguage('en', {
  Email: 'Enter your email', // Username label
  Password: 'Enter your password', // Password label
});

const withSecurity = (Component) => {

  return withAuthenticator(Component, {
    loginMechanisms: ['email'],
    socialProviders: ['facebook', 'google'],
    signUpAttributes: ['family_name', 'given_name'],
    components: {
      Header() {
        const {tokens} = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
              <Image
                  alt="Czetsuya Tech"
                  src="https://4.bp.blogspot.com/-mjqhWWOAQ4k/YHGCZ8vh16I/AAAAAAAAMk4/ciGAb0cebQkuXMS_2y_r_BIa20aaXgoYgCK4BGAYYCw/s1600/Artboard%2B1.png"
              />
            </View>
        );
      },
      // Customize `Authenticator.SignUp.FormFields`
      SignUp: {
        FormFields() {
          const {validationErrors} = useAuthenticator();

          return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields/>

                {/*Append & require Terms & Conditions field to sign up*/}
                <CheckboxField
                    errorMessage={validationErrors.acknowledgement}
                    hasError={!!validationErrors.acknowledgement}
                    name="acknowledgement"
                    value="yes"
                    label="I agree with the Terms & Conditions"
                >
                </CheckboxField>
              </>
          );
        }
      },
      SignIn: {
        Header() {
          const {tokens} = useTheme();

          return (
              <Heading
                  padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                  level={3}
              >
                Sign in to your account
              </Heading>
          );
        },
        Footer() {
          const {toResetPassword} = useAuthenticator();

          return (
              <View textAlign="center">
                <Button
                    fontWeight="normal"
                    onClick={toResetPassword}
                    size="small"
                    variation="link"
                >
                  Reset Password
                </Button>
              </View>
          );
        },
      },
      Footer() {
        const {tokens} = useTheme();

        return (
            <React.Fragment>
              <View textAlign="center" padding={tokens.space.large}>
                <Text color={`${tokens.colors.neutral['80']}`}>
                  Czetsuya Tech &copy; All Rights Reserved 2021
                </Text>
              </View>
              <Divider/>
              <View textAlign="center" padding={tokens.space.large}>
                <Flex direction="column">
                  <Link href="/resources/terms-and-conditions">
                    <a>Terms and Conditions</a>
                  </Link>
                  <Link href="/resources/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </Flex>
              </View>
            </React.Fragment>
        );
      },
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