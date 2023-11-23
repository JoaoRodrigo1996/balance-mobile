import styled, { css } from 'styled-components/native'
import { MonitorOff } from 'lucide-react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
`

export const Icon = styled(MonitorOff)`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Title = styled.Text`
  text-align: center;
  margin-top: 16px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
