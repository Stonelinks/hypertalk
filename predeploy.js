const fs = require("fs")
const path = require("path")
const { spawnSync } = require("child_process")

const AUTOGEN_WARNING =
  "This is autogenerated, please modify predeploy.js to change this"

function staticFiles() {
  const STATIC_BUCKET_NAME = "hypertalk-static"

  spawnSync("gsutil", [
    "-m",
    "rsync",
    "-r",
    "./static",
    `gs://${STATIC_BUCKET_NAME}/`
  ])

  let staticIndex = `// ${AUTOGEN_WARNING}\nmodule.exports = {\n`
  fs.readdirSync("./static").forEach(file => {
    staticIndex += `'${file}': 'https://storage.googleapis.com/${STATIC_BUCKET_NAME}/${encodeURIComponent(
      file
    )}',\n`
  })
  staticIndex += `}\n`
  writeFileSync("./src/staticFiles.js", staticIndex)
}

function appYaml() {
  writeFileSync(
    "./app.yaml",
    `# ${AUTOGEN_WARNING}

runtime: nodejs
env: flex

# This sample incurs costs to run on the App Engine flexible environment.
# The settings below are to reduce costs during testing and are not appropriate
# for production use. For more information, see:
# https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml
manual_scaling:
  instances: 1
resources:
  cpu: 1
  memory_gb: 0.5
  disk_size_gb: 10

# none of these matter on the chat server
# env_variables:
#   REACT_APP_CHATSERVER_ENDPOINT: '${
      process.env.REACT_APP_CHATSERVER_ENDPOINT
    }'
#   REACT_APP_USE_LOCAL_ASSETS: 'false'
`
  )
}

function writeFileSync(filename, contents) {
  fs.writeFileSync(filename, contents, "utf8")
}

appYaml()
staticFiles()
