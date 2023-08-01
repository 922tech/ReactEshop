import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    
    typography:{    
        fontFamily: 'Shabnam',
        // fontSize: 20
        fontWeight: 'normal'
        
    },
     
    // root:{
    //     display:'flex',
    //     justifyContent:'center',
    // }
    
    // overrides:{
    //     MuiTypography:{
    //         h2:{
    //             fontFamily: 'Shabnam',
    //         }
    //     }

    // },
    // components:{
    //     MuiTypography:{
    //         styleOverrides:{
    //             h2:{
    //                 fontSize:'5rem'
    //             }
    //         }
    //     },
    //     MuiScopedCssBaseline:{
    //         styleOverrides:`
    //         @font-face {
    //             font-family: IRANSans;
    //             src: local("IRANSans"), url('/fonts/iransans.ttf') format('ttf');
    //           }
    //           `
    //     }
    // }
})

export default theme;