import { StyleSheet, Dimensions } from 'react-native'
import { Button, HStack, Icon, Text, View, VStack } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { CloseButton } from '~components/CloseButton'
import { commonColors, fontSizes, space } from '~constants'

interface DirectionsTabProps {
  currentDistance: number
  duration: number
  onCancel: () => void
  onOpenRoute: () => void
}

export const DirectionsTab = ({ onCancel, currentDistance, duration, onOpenRoute }: DirectionsTabProps) => {
  return (
    <View style={styles.tabContainer}>
      <VStack style={styles.container} space={space[1]}>
        <CloseButton onClose={onCancel} avatarProps={{ style: styles.closeButton }} />
        <HStack justifyContent="center" space={space[1]}>
          <HStack alignItems="center" space="4px">
            <Icon color="white" as={MaterialIcons} name="location-on" size="lg" />
            <Text bold fontSize={fontSizes.md}>
              {currentDistance.toFixed(2)}km
            </Text>
          </HStack>
          <HStack alignItems="center" space="4px">
            <Icon color="white" as={MaterialIcons} name="access-time" size="lg" />
            <Text bold fontSize={fontSizes.md}>
              {Math.round(duration)}m
            </Text>
          </HStack>
        </HStack>
        <Button
          variant="solid"
          bgColor={commonColors.background}
          color={commonColors.lightText}
          onPress={onOpenRoute}
        >
          Confirmar Rota
        </Button>
      </VStack>
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: commonColors.primary[700]
  },
  container: {
    paddingHorizontal: space[4],
    flex: 1
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: -24
  }
})
