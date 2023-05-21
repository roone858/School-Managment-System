import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function InsetDividers({ messages }: any) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      {messages.map((mess: any, index: number) => (
        <div key={index}>
          <ListItem style={{ borderBottom: '1px  solid #eee' }}>
            <ListItemAvatar>
              <CampaignIcon
                style={{ fontSize: '2rem', color: '#ddd' }}
              ></CampaignIcon>
            </ListItemAvatar>
            <ListItemText
              style={{ fontSize: '0.8rem' }}
              primary={mess.message}
              secondary={
                mess.generated_at.slice(0, 10) +
                ' ' +
                mess.generated_at.slice(11, 16)
              }
            />
          </ListItem>
        </div>
      ))}
    </List>
  );
}
