import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Header, Container, Background, Menu, Option, Button, Logo } from './styles'
import { HiMenu } from 'react-icons/hi'
import logo from '../../assets/images/logo.svg'

interface OptionProps {
  title: string
  link: string
  expand?: boolean
}

interface NavbarProps {
  expand?: boolean
  options?: OptionProps[]
}

function Navbar({ options }: NavbarProps) {
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const [selectedId, setSelectedId] = useState<number>()

  useEffect(() => {
    options?.forEach((option, id) => {
      if (option.link === location.pathname) {
        setSelectedId(id)
        return
      }
    })
  }, [location.pathname, options])

  function drawOptions() {
    return options?.map((value, key) => (
      <Option
        key={key}
        selected={key === selectedId}
      >
        <Link to={value.link}>{value.title}</Link>
      </Option>
    ))
  }

  return (
    <Fragment>
      <Header>
        <Container>
          <Link to='/dashboard'>
            <Logo src={logo} alt='gofinances logo' />
          </Link>
          <Button onClick={() => setShowMenu(!showMenu)}>
            <HiMenu />
          </Button>
          <Menu visible={showMenu}>
            {drawOptions()}
          </Menu>
        </Container>
      </Header>
      <Background
        expand={(options !== undefined) &&
          (selectedId !== undefined) &&
          options[selectedId]?.expand}
      />
    </Fragment>
  )
}

export default Navbar
