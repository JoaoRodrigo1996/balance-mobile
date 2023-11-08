import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View``

export const Card = styled.View`
  width: 100%;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 4px;
  margin-top: 16px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const CardIcon = styled(Feather).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.MD,
}))``

export const Amount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
