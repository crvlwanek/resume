import * as React from "react"
import { Box, Chip, IconButton, Link, Typography } from "@mui/material"
import PublicIcon from "@mui/icons-material/Public"
import useGitHub from "../hooks/useGitHub"

import githubColors from "../githubColors.json"

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
    <div style={{ padding: "8px 16px" }}>
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "4px",
          alignItems: "center",
        }}
      >
        {repo?.homepage ? (
          <IconButton target="_blank" href={repo?.homepage}>
            <PublicIcon />
          </IconButton>
        ) : null}
        <Link underline="none" href={repo?.owner?.html_url}>
          <Typography variant="h5">{user}</Typography>
        </Link>
        <Typography variant="h5"> / </Typography>
        <Link underline="none" href={repo?.html_url}>
          <Typography variant="h5">{name}</Typography>
        </Link>
      </div>
      <Typography variant="body1" p="16px 8px">
        {repo?.description}
      </Typography>
      <Box display="flex" flexWrap="wrap" alignItems="center" mb={2}>
        {repo?.topics?.map(topic => (
          <Chip
            component="a"
            target="_blank"
            rel="noreferrer"
            clickable
            href={`https://github.com/crvlwanek?tab=repositories&q=${topic}`}
            sx={{
              margin: "4px",
            }}
            label={topic}
            color="primary"
          />
        ))}
      </Box>
      <div style={{ width: "min(400px, 100%)", padding: "4px" }}>
        <div style={{ borderRadius: "20px", display: "flex" }}>
          {Object.keys(percentages || {})?.map(percent => (
            <div
              style={{
                width: percentages[percent],
                height: "10px",
                background: githubColors[percent].color,
              }}
            ></div>
          ))}
        </div>
        <Box display="flex" flexWrap="wrap" alignItems="center" padding="4px">
          {Object.keys(percentages || {})?.map(percent => (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
                padding: "4px",
                marginRight: "24px",
              }}
            >
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "100%",
                  background: githubColors[percent].color,
                }}
              ></div>
              <Typography variant="body2">{percent}</Typography>
              <Typography variant="subtitle2">
                {percentages[percent]}
              </Typography>
            </div>
          ))}
        </Box>
      </div>
    </div>
  )
}

export default GitHubRepo
