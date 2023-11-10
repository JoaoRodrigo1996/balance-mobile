import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

type ContainerProps = {
  isActive: boolean
  type: 'INCOME' | 'OUTCOME'
}

type IconProps = {
  type: 'INCOME' | 'OUTCOME'
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;

  ${({ isActive, type }) =>
    isActive &&
    type === 'INCOME' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GREEN_100};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === 'OUTCOME' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_100};
    `}
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'INCOME' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
