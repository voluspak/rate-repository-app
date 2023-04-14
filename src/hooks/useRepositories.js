import { useEffect, useState } from 'react'

export const useRepositories = () => {
  const [repositories, setRepositories] = useState(null)

  const repositoriesNode = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  const getRepositories = async () => {
    try {
      const response = await globalThis.fetch('http://192.168.43.220:5000/api/repositories')
      if (!response.ok) {
        console.log('Error al hacer la petición')
        return
      }
      const json = await response.json()
      setRepositories(json)
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  useEffect(() => {
    getRepositories()
  }, [])

  return { repositories: repositoriesNode }
}
