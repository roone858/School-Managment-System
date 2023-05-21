import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button divider>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText
          primary="Drafts"
          onClick={() => console.log('hello from button')}
        />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button divider>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  );
}
