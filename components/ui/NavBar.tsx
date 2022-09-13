import { FC, useContext } from 'react';

import NexLink from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';

export const NavBar: FC = () => {
    const { openSideMenu } = useContext(UIContext)

    return (
        <AppBar position='sticky' >
            <Toolbar>
                <IconButton
                    size='large'
                    edge="start"
                    onClick={openSideMenu}
                >
                    <MenuOutlinedIcon />
                </IconButton>
                <NexLink href='/' passHref>
                    <Link underline='none' color='white'>
                        <Typography variant='h6'>Open Jira</Typography>
                    </Link>
                </NexLink>
            </Toolbar>
        </AppBar>
    )
}
