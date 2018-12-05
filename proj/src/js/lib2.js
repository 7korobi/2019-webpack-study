

export default function ( process = {} ) {
  const { versions, env } = process
  return {
    versions,
    env,
  }
}
