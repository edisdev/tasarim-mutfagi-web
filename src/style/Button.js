import styled from 'styled-components'

const Btn = styled.button`
  cursor: pointer;
  position: relative;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${p => p.theme.fingerSize};
  padding-left: 30px;
  padding-right: 30px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: ${p => p.theme.font.size.small.mobile};
  text-transform: uppercase;
  color: ${p => p.theme.color.brand.white};
  background: transparent;
  border-radius: ${p => p.theme.radius};
`

export const BtnWhiteGhost = styled(Btn)`
  border: 1px solid ${p => p.theme.color.brand.white};
`

export const BtnPrimaryGhost = styled(Btn)`
  color: ${p => p.theme.color.brand.primary};
  border: 1px solid ${p => p.theme.color.brand.primary};
`

export const BtnPrimaryFill = styled(Btn)`
  background: ${p => p.theme.color.brand.primary};
`
