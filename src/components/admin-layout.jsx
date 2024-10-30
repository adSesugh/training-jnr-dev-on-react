import logo from '../assets/logo.png'
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses
} from 'react-pro-sidebar'
import {
    DashboardIcon,
    VerificationIcon,
    MoneyIcon,
    UserIcon
} from './icons'
import { Link, useLocation } from 'react-router-dom'

const AdminLayout = ({ children }) => {
    const location = useLocation()

    return (
        <div className="flex flex-row h-screen w-full">
            <div className="w-1/6 h-full overflow-hidden border-r">
                <div className="flex h-[15%] w-full place-content-center">
                    <img src={logo} className='h-auto w-auto self-center' alt='Logo' />
                </div>
                <div className="h-[85%] scrollbar-thin overflow-y-scroll">
                    <Sidebar
                        width='100%'
                        rootStyles={{
                            [`.${sidebarClasses.container}`]: {
                              height: '90%',
                              backgroundColor: '#ffffff'
                            },
                        }}
                    >
                        <Menu
                            menuItemStyles={{
                                button: {
                                  [`&.active`]: {
                                    backgroundColor: '#fcfcfc',
                                    color: '#D9912B',
                                  },
                                },
                            }}
                        >
                            <MenuItem
                                icon={<DashboardIcon fill={location.pathname === '/' ? '#D9912B' : '#686677'} />}
                                component={<Link to={'/'} />}
                                active={location.hash === '/' ? true : false}
                            >
                                Dashboard
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <MenuItem
                                icon={<VerificationIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}
                                component={<Link to={'/api'} />}
                            >
                                Verification
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <SubMenu label='Users' icon={<UserIcon  fill={location.pathname.includes('users') ? '#D9912B' : '#686677'} />}>
                                <Menu>
                                    <MenuItem
                                        component={<Link to={'/users'} />}
                                    >
                                        List
                                    </MenuItem>
                                </Menu>
                                <Menu>
                                    <MenuItem>
                                        Active
                                    </MenuItem>
                                </Menu>
                                <Menu>
                                    <MenuItem>
                                        Archived
                                    </MenuItem>
                                </Menu>
                            </SubMenu>
                        </Menu>
                        <Menu>
                            <MenuItem
                                icon={<MoneyIcon fill={location.pathname.includes('wallet') ? '#D9912B' : '#686677'} />}
                                component={<Link to={'/wallet'} />}
                            >
                                Wallet
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
            </div>
            <div className="w-5/6 h-full overflow-hidden">
                <main className="h-full w-full overflow-y-scroll">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout