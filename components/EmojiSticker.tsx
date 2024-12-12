import { Image, ImageSource } from "expo-image"
import { View } from "react-native"

interface Props {
  imageSize: number
  stickerSource: ImageSource
}
export function EmojiSticker({ imageSize, stickerSource }: Props) {
  console.log(stickerSource)
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  )
}
