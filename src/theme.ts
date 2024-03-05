import { ThemeConfig  , extendTheme} from "@chakra-ui/react";






// annotete to access properties 
const config: ThemeConfig = {
    initialColorMode : 'dark'
}

 const theme  =extendTheme({ config})

 export default theme;



 