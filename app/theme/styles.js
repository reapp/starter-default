import { makeStyles } from 'reapp-ui';
const requirer = name => require(`./styles/${name}`);

// override default component styles

export default makeStyles(requirer, [
  'TitleBar'
]);