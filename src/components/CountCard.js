import React from 'react'
import styled from 'styled-components'

const Card = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: ${p => p.theme.color.brand.white};
  border: 10px solid ${p => p.theme.color.brand.hide};
  border-radius: ${p => p.theme.radius};

  &:hover {
    border-color: ${p => p.theme.color.social[p.name]};
    background-color: ${p => p.theme.color.social[p.name]};
  }
`

const CountCard = ({ name, label, count, url }) => (
  <Card name={name} href={url} target="_blank">
    <span>{count}</span>
    <span>{label}</span>
  </Card>
)

export default CountCard
