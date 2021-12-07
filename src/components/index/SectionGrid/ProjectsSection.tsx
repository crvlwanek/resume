import * as React from "react"
import useGitHub from "../../../hooks/useGitHub"
import IndexDivider from "../../common/IndexDivider"
import GitHubRepo from "./ProjectsSection/GitHubRepo"
import GenericSection from "./GenericSection"

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  const repos = ["resume", "digital-music", "leetcode"]
  const repoList = useGitHub("users/crvlwanek/repos")
  return (
    <GenericSection name="projects">
      {repos.map((repo, index) => (
        <div key={repo}>
          <IndexDivider index={index} />
          <GitHubRepo user="crvlwanek" name={repo} />
        </div>
      ))}
    </GenericSection>
  )
}

export default ProjectsSection
