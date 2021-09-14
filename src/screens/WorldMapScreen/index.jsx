
import React, { useState, useEffect } from 'react'
import { Container, Paper, Box, Grid, Typography } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import readme from './README.md';
import WorldMap from './WorldMap';

function WorldMapScreen() {
    const [markdownText, setMarkdownText] = useState();

    useEffect(() => {
        fetch(readme).then(async res => {
            const text = await res.text();
            setMarkdownText(text);
        }).catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <Container>
            <Paper style={{ padding: 25 }}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h2">World Map</Typography>
                    <WorldMap />
                </Box>
                <Box>
                    
                    <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
                </Box>
            </Paper>
        </Container>
    )
}

export default WorldMapScreen
