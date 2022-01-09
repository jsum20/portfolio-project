import Particles from "react-tsparticles";
import styled from "styled-components";

const ParticleBackground = () => {
    return (
        <ParticlesStyled>
            <Particles 
            options={{
                fpsLimit: 60,
                interactivity:{
                    detect_on:"canvas",
                    events:{
                        resize:true
                    }
                },
                particles:{
                    number:{
                        density:{
                            enable:true,
                            area:1080
                        },
                        limit:0,
                        value:400
                    },
                    opacity:{
                        animation:{
                            enable:true,
                            minimumValue:0.1,
                            speed:3,
                            sync:false
                        },
                        random:{
                            enable:true,
                            minimumValue:0.1
                        },
                        value:1
                    },
                    shape:{
                        type: "circle"
                    },
                    size:{
                        random:{
                            enable:true,
                            minimumValue:0.5
                        },
                        value:1
                    }
                }
            }}
            />
        </ParticlesStyled>
    )
}

const ParticlesStyled = styled.div`
    z-index:-10;
`;

export default ParticleBackground
