import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <>
            <Box
                sx={{
                    mt: {lg: '212px', xs: '70px'},
                    ml: {sm: '50px'}
                }} 
                position= "relative" 
                p= "20px"
            >
                <Typography 
                    color="#ff2625"
                    fontWeight={600}
                    fontSize="26px"    
                >
                    Fitness club
                </Typography>
                <Typography 
                    fontWeight={700}
                    sx={{fontSize: {lg: '44px', xs: '40px'}}}    
                    mb="23px"
                    mt="30px"
                >
                    Swet, Smile <br /> and Repeat 
                </Typography>
                <Typography 
                    fontSize="22px" 
                    lineHeight="35px" 
                    mb={4}
                >
                    Check out the most effected exercises
                </Typography>
                <Stack>
                    <a 
                        href='#exercises' 
                        style= {{marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', backgroundColor: '#ff2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px'}}
                    >
                        Explore Exercise
                    </a>
                </Stack>
                <Typography 
                    fontWeight= {600} 
                    color= '#ff2625' 
                    sx= {{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} 
                    fontSize= '200px'
                >
                    Exercises
                </Typography>
                <img src={HeroBannerImg} alt="bannerimg" className='hero-banner-img' />
            </Box>
        </>
    )
}

export default HeroBanner
