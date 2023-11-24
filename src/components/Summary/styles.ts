import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type TypeProps = {
  type: 'INCOME' | 'OUTCOME' | 'TOTAL'
}

export const Container = styled.View<TypeProps>`
  padding: 20px 24px;
  border-width: 1px;
  border-style: solid;
  ${({ theme, type }) =>
    type === 'INCOME' &&
    css`
      border-color: ${theme.COLORS.GREEN_100};
    `}
  ${({ theme, type }) =>
    type === 'OUTCOME' &&
    css`
      border-color: ${theme.COLORS.RED_100};
    `}
  ${({ theme, type }) =>
    type === 'TOTAL' &&
    css`
      border-color: ${theme.COLORS.GRAY_100};
    `}
  border-radius: 4px;
  margin-right: 16px;
  width: 250px;
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

export const CardIcon = styled(Feather)<TypeProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  ${({ type }) =>
    type === 'INCOME' &&
    css`
      color: ${({ theme }) => theme.COLORS.GREEN_500};
    `}
  ${({ type }) =>
    type === 'OUTCOME' &&
    css`
      color: ${({ theme }) => theme.COLORS.RED_500};
    `}
  ${({ type }) =>
    type === 'TOTAL' &&
    css`
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    `}
`

export const Amount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
