import { Container, SxProps } from '@mui/material'
import './App.css'
import { CardSocialLink } from './components'
import { widthMobile } from './styles/styleVariables'
import avatar from './assets/avatar-jessica.jpeg'
function App() {
  
  const mainTheme:SxProps = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    minWidth: widthMobile,
    height: '100vh',
    '@media screen and (max-width: 375px)': {
      width:'100%',
    },
  }

  
  const personInfo = {
    iconPhoto : avatar,
    fullname: 'Jessica Randall',
    location: 'London, United Kingdom',
    description: 'Front-end developer and avid reader.',
    socialMedia: [
      {
        name:"GitHub",
        url: 'https://github.com/username'
      },
      {
        name:"FrontendMentor",
        url: 'https://www.frontendmentor.io/profile/username'
      },
      {
        name:"LinkedIn",
        url: 'https://www.linkedin.com/in/username'
      },
      {
        name:"Twitter",
        url: 'https://twitter.com/username'
      },
      {
        name:"Instagram",
        url: 'https://www.instagram.com/username/'
      }
    ]
  };
  

  return (
      <Container className='main-container' maxWidth={false} sx={mainTheme}  > 
        <CardSocialLink persona={personInfo}/>
      </Container>
  )
}

export default App
