/* eslint-disable no-console */
if (process.platform === 'linux') {
  console.log('export STORYBOOK_HOST="localhost:6006"');
} else {
  console.log('export STORYBOOK_HOST="host.docker.internal:6006"');
}
