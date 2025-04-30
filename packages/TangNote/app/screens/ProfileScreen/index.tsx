import { observer } from "mobx-react-lite"
import { FC, useState } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Text, Screen } from "@/components"
import { isRTL } from "@/i18n"
import { useStores } from "@/models"
import { AppStackScreenProps } from "@/navigators"
import { $styles, type ThemedStyle } from "@/theme"
import { useHeader } from "@/utils/useHeader"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { useAppTheme } from "@/utils/useAppTheme"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { TabScreenProps } from '@/navigators/TabNavigator';


export const ProfileScreen: FC<TabScreenProps<"Profile">> = observer(function (_props) {
  const { themed, theme } = useAppTheme();
  const [selected, setSelected] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');

  const { navigation } = _props
  const {
    authenticationStore: { logout },
  } = useStores()

  function backToToday() {
    setSelected(new Date().toISOString().split("T")[0]);
    jumpToMonth(new Date());
  }
  const jumpToMonth = (data: Date) => {
    const dateString = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}-01`;
    console.log(dateString);
    setCurrentMonth(dateString);
  };

  useHeader(
    {
      leftText: "Today",
      onLeftPress: backToToday,
      rightTx: "common:logOut",
      onRightPress: logout,
    },
    [logout],
  )

  return (
    <Screen contentContainerStyle={$styles.flex1}>
      <View style={themed([$styles.boxShadow])}>
        <Text>234234</Text>
      </View>
      <View style={themed($bottomContainer)}>
        
      </View>
    </Screen>
  )
})

const $calendar: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  // justifyContent: "center",
  // paddingHorizontal: spacing.lg,
  backgroundColor: 'red',
  // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
})

const $bottomContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flexGrow: 1,
  backgroundColor: colors.background,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
})

const $welcomeLogo: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
})

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
})
