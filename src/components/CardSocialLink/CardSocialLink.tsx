import { Avatar, Box, Button, Link, SxProps, Typography } from '@mui/material'
import React from 'react'
import {DataSocialLink, Link as TypeLink} from '../../interfaces/cardSocialLink.interface';
import { widthMobile, neutralDarkGrey,  neutralWhite, fontFamily, primaryColor, neutralGrey } from '../../styles/styleVariables';

export interface Props {
  persona: DataSocialLink;
}

export interface styledCard {
  mainBoxStyle: SxProps;
  iconContainer: SxProps;
  name: SxProps;
  location: SxProps;
  description: SxProps;
  buttonContainer: SxProps;
  buttonStyle: SxProps;
  linkStyle: SxProps;
}

const CardSocialLinkStyles: styledCard = {
  mainBoxStyle:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'20%',
    minWidth: widthMobile,
    backgroundColor:neutralDarkGrey,
    borderRadius: '20px',
    '@media screen and (max-width: 375px)': {
      width:'100%',
    },
  },

  iconContainer:{
    width:'100px',
    height:'100px',
    margin:'2.5rem',
  },
  name:{
    fontFamily: fontFamily,
    fontWeight:'600',
    fontSize:'1.6rem',
    color: neutralWhite,

  },
  location:{
    padding:'1rem',
    fontFamily: fontFamily,
    fontWeight:'600',
    fontSize:'0.8rem',
    color: primaryColor,

  },
  description:{
    padding:'2rem',
    fontFamily: fontFamily,
    fontWeight:'400',
    fontSize:'0.8rem',
    color: neutralWhite,
  },

  buttonContainer:{
    width:'80%',
    display: 'flex',
    flexDirection:'column',
    gap:'1rem',
    paddingBottom:'2rem'
  },
  buttonStyle:{
    backgroundColor:neutralGrey,
    color: neutralWhite,
    '&:hover':{
      backgroundColor: primaryColor,
      color: neutralGrey,
    }
  },
  linkStyle:{
    width:'100%',
    height:'100%',
    color: 'inherit',
    textDecoration:'none',
    fontSize:'0.8rem',
    fontWeight:'700',
    textTransform: 'none',
    '&:hover':{
      color: 'inherit'
    }
  },



}

const CardSocialLink:React.FC<Props> = ({persona}) => {
  return (
    <Box className="card" sx={CardSocialLinkStyles.mainBoxStyle}>
      
      <Avatar sx={CardSocialLinkStyles.iconContainer} sizes='' alt={persona.fullname} src={persona.iconPhoto} />
      
      <Typography variant='h2' sx={CardSocialLinkStyles.name}>{persona.fullname}</Typography>
      <Typography variant='h5' sx={CardSocialLinkStyles.location}>{persona.location}</Typography>
      <Typography variant='h5' sx={CardSocialLinkStyles.description}>{persona.description}</Typography>
      
      <Box sx={CardSocialLinkStyles.buttonContainer}>    
        {
          persona.socialMedia.map((link:TypeLink, index)=>{
            return (
              <Button sx={CardSocialLinkStyles.buttonStyle} variant='contained' key={index}>
                <Link color="inherit" underline="none" sx={CardSocialLinkStyles.linkStyle} href={link.url}>
                  {link.name}
                </Link>
              </Button>
            )
          })
        }
      </Box>

    </Box>
  )
}

export default CardSocialLink;