import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../Authentication/IntroScreen";
import { Theme } from "../Branding/Theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LandingScreen from "../Authentication/LandingScreen";
import { DrawerNavigator } from "./DrawerNavigation";
import LoginScreen from "../Authentication/Login";
import SignUpScreen from "../Authentication/SignUp";
import OTPScreen from "../Authentication/Otp";
import VerificationLinkScreen from "../Authentication/VerificationLinkScreen";
import PasswordOTPScreen from "../Authentication/PasswordOTPResetScreen";
import ForgottenPassword from "../Authentication/ForgottenPassword";
import PullUpTestScreen from "../Screens/TestScreens/PullUpTestScreen";
import ResetPassword from "../Authentication/ResetPassword";
import PushUpsTestScreen from "../Screens/TestScreens/PushUpTestScreen";
import SprintTestScreen from "../Screens/TestScreens/SprintTestScreen";
import SitUpTestScreen from "../Screens/TestScreens/SitUpTextScreen";
import RunningTestScreen from "../Screens/TestScreens/RunningTestScreen";
import PullUpHistory from "../Screens/TestHistory/PullUpHistory";
import PushUpHistory from "../Screens/TestHistory/PushUpHistory";
import RunningHistory from "../Screens/TestHistory/RunningHistory";
import SitUpHistory from "../Screens/TestHistory/SitUpHistory";
import SprintHistory from "../Screens/TestHistory/SprintingHistory";
import PersonalInfo from "../Screens/PersonalInfo";

const Stack = createStackNavigator();


const StackNavigation: React.FC = () => {
    // const { isSignedIn } = useAuth();

    return (
        <GestureHandlerRootView style={{
            flex: 1
        }}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: Theme.colors.backgroundColor
                        }
                    }}
                >
                    <Stack.Screen name="IntroScreen" component={IntroScreen} />
                    <Stack.Screen name="LandingScreen" component={LandingScreen} />
                    <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    <Stack.Screen name="OTPScreen" component={OTPScreen} />
                    <Stack.Screen name="VerificationScreen" component={VerificationLinkScreen} />
                    <Stack.Screen name="PasswordOTPScreen" component={PasswordOTPScreen} />
                    <Stack.Screen name="PullUpScreen" component={PullUpTestScreen} />
                    <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen name="PushUpsScreen" component={PushUpsTestScreen} />
                    <Stack.Screen name="SprintScreen" component={SprintTestScreen} />
                    <Stack.Screen name="SitUpScreen" component={SitUpTestScreen} />
                    <Stack.Screen name="RunningScreen" component={RunningTestScreen} />
                    <Stack.Screen name="PullUpsHistory" component={PullUpHistory} />
                    <Stack.Screen name="PushUpHistory" component={PushUpHistory} />
                    <Stack.Screen name="RunningHistory" component={RunningHistory} />
                    <Stack.Screen name="SitUpHistory" component={SitUpHistory} />
                    <Stack.Screen name="SprintHistory" component={SprintHistory} />
                    <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}

export default StackNavigation;
