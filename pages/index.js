import Head from 'next/head'
import appConfig from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

function GlobalStyle(){
    return(
        <style global jsx>{`
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
                font-family: 'Ubuntu Mono', monospace;
            }

            .glassEffect {
                background: rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(6.7px);
                -webkit-backdrop-filter: blur(6.7px);
                border: 0.1px solid rgba(255, 255, 255, 0.3);
            }

            /* App fit Height */
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex: 1;
            }
            #__next > * {
                flex: 1;
            }
            /* ./App fit Height */
        `}</style>
    )
}

function TitleWithGradient(props){
    const Tag = props.tag || 'h1';
    const Color1 = props.color1 || '800';
    const Color2 = props.color2 || '900';
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} { 
                    font-weight: 700;
                    font-family: 'Ubuntu Mono', monospace;
                    background: -webkit-linear-gradient(${appConfig.theme.colors.primary[Color1]}, ${appConfig.theme.colors.primary[Color2]});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </>
    )
}

function Subtitle(props){
    const Tag = props.tag || 'h1';
    const Color = props.color || '999';
    const Size = props.size || '16.5';
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals[Color]};
                    font-size: ${Size}px;
                    font-family: 'Ubuntu Mono', monospace;    
                }
            `}</style>
        </>
    )
}

export default function HomePage() {
    const Username = "mathe8";
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet" />
                <title>Firecord 🔥 - Imersão React</title>
            </Head>

            <GlobalStyle/>

            <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.neutrals['400'],
                backgroundImage: 'url(https://drscdn.500px.org/photo/1042872678/q%3D80_m%3D2000/v2?sig=0023cfede5619fbcbd898bb902dd4a7857b7dbfe43a1e0f4549bc9ac1859f746)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
            >
                <Box 
                className="glassEffect"
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    width: '100%', maxWidth: '700px',
                    borderRadius: '5px', padding: '32px', margin: '16px',
                }}
                >
                    {/* Formulário */}
                    <Box
                    as="form"
                    styleSheet={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', paddingTop: '20px',
                    }}
                    >
                        <TitleWithGradient tag="h1" color1="555" color2="111">firecord</TitleWithGradient>
                        <Subtitle tag="h2" color="100">Discord - Alura</Subtitle>
                        
                        <Text variant="body3" styleSheet={{ marginTop: '25px', marginBottom: '10px', color: appConfig.theme.colors.neutrals['000'] }}>
                            {appConfig.name}, é bom te ter de volta!
                        </Text>

                        <TextField
                        fullWidth
                        placeholder="Digite aqui..."
                        textFieldColors={{
                            neutral: {
                            textColor:          appConfig.theme.colors.neutrals['900'],
                            mainColor:          appConfig.theme.colors.primary['444'],
                            mainColorHighlight: appConfig.theme.colors.primary['333'],
                            backgroundColor:    appConfig.theme.colors.neutrals['050'],
                            },
                        }}
                        />
                        <Button
                        type='submit'
                        label='Entrar'
                        fullWidth
                        buttonColors={{
                            contrastColor:   appConfig.theme.colors.neutrals["000"],
                            mainColor:       appConfig.theme.colors.primary['444'],
                            mainColorLight:  appConfig.theme.colors.primary['444'],
                            mainColorStrong: appConfig.theme.colors.primary['333'],
                        }}
                        />

                        <Text variant="body3" styleSheet={{fontSize: '8px', paddingTop: '10px ', color: appConfig.theme.colors.neutrals['100'] }}>
                            Feito com React e Next.js 🔥
                        </Text>
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                    className="glassEffect"
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '200px',
                        padding: '16px',         
                        borderRadius: '10px',
                        flex: 1,
                        minHeight: '240px',
                    }}
                    >
                        <Image
                        styleSheet={{
                            borderRadius: '50%', 
                            marginBottom: '16px',
                            border: '1px solid',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                        }} 
                        src={`https://github.com/${Username}.png`}
                        />
                        <Text
                        className="glassEffect"
                        variant="body4"
                        styleSheet={{
                            padding: '3px 10px',
                            borderRadius: '1000px',
                            color: appConfig.theme.colors.neutrals['000'],
                        }}
                        >
                        {Username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    )
}