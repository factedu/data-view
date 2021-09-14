import { Box, Container, Paper, Typography } from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import ReactMarkdown from 'react-markdown'
import aboutMd from './README.md';
import Logo from '../assets/images/dataviewlogo.png';
function AboutScreen() {
    const [markdownText,setMarkdownText]=useState();
    useEffect(() => {
        fetch(aboutMd).then(async res=>{
            const text = await res.text();
            setMarkdownText(text);
        }).catch(error=>{
            console.log(error);
        })
    }, [])
    return (
        <Container>
            
            <Paper style={{ padding: 25 }}>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <img src={Logo} widht="200" height="200" />
                    <Typography variant="h2" noWrap>
                        DataView
                    </Typography>
                </Box>
                <ReactMarkdown className="markdown-body">{markdownText}</ReactMarkdown>
            </Paper>
        </Container>
    )
}

export default AboutScreen
