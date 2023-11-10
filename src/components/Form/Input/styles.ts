import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  width: 100%;
  padding: 12px 18px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  margin-bottom: 16px;
`
