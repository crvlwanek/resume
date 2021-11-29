import * as React from "react"
import { Box, Button, Chip, IconButton, Link, Typography } from "@mui/material"
import PublicIcon from "@mui/icons-material/Public"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import useGitHub from "../../../../hooks/useGitHub"
import { primary } from "../../../../theme"

import githubColors from "../../../../githubColors.json"

interface GitHubRepoProps {
  name: string
  user: string
}

const GitHubRepo: React.FC<GitHubRepoProps> = ({ name, user }) => {
  const repo = useGitHub(`repos/${user}/${name}`)
  const languages = useGitHub(`repos/${user}/${name}/languages`)
  const total = Object.values(languages || {}).reduce(
    (prev, curr) => prev + parseInt(curr),
    0
  )
  const percentages = {}
  for (const lang in languages) {
    percentages[lang] = `${((parseInt(languages[lang]) / total) * 100).toFixed(
      2
    )}%`
  }
  return (
    <Box p={2}>
      <Box display="flex" gap={2} alignItems="center">
        {repo?.homepage ? (
          <IconButton
            target="_blank"
            href={repo?.homepage}
            sx={{
              "&:hover": {
                color: primary,
              },
            }}
          >
            <PublicIcon />
          </IconButton>
        ) : null}
        <Link
          underline="none"
          href={repo?.owner?.html_url}
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="h5">{user}</Typography>
        </Link>
        <Typography variant="h5"> / </Typography>
        <Link
          underline="none"
          href={repo?.html_url}
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 500 }}>
            {name}
          </Typography>
        </Link>
      </Box>
      <Typography variant="body1" p={2}>
        {repo?.description}
      </Typography>
      <Box sx={{ color: "gray" }} px={2}>
        <Button
          component="a"
          href={`${repo?.html_url}#readme`}
          startIcon={<MenuBookIcon />}
          color="inherit"
        >
          Readme
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="center" py={2} gap={1}>
        {repo?.topics?.map(topic => (
          <Chip
            component="a"
            target="_blank"
            rel="noreferrer"
            clickable
            href={`https://github.com/crvlwanek?tab=repositories&q=${topic}`}
            key={topic}
            label={topic}
            color="primary"
          />
        ))}
      </Box>
      <Box width="min(400px, 100%)">
        <Box display="flex" borderRadius="20px">
          {Object.keys(percentages || {})?.map(percent => (
            <Box
              width={percentages[percent]}
              height="10px"
              bgcolor={githubColors[percent].color}
              key={percent}
            />
          ))}
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          padding="4px"
          gap={3}
          rowGap={0}
        >
          {Object.keys(percentages || {})?.map(percent => (
            <Link
              href={`${repo?.html_url}/search?l=${percent}`}
              target="_blank"
              rel="noreferrer"
              color="inherit"
              underline="none"
              key={percent}
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
                padding: "4px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Box
                height="10px"
                width="10px"
                borderRadius="100%"
                bgcolor={githubColors[percent].color}
              />
              <Typography variant="body2">{percent}</Typography>
              <Typography variant="subtitle2">
                {percentages[percent]}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default GitHubRepo
