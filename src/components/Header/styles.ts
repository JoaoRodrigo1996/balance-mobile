import styled, { css } from 'styled-components/native'
import { ChevronLeft, LogOut } from 'lucide-react-native'
export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ChevronLeft).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.GRAY_100,
}))``

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`

export const LogOutButton = styled.TouchableOpacity``

export const LogOutIcon = styled(LogOut).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.GRAY_100,
}))``
