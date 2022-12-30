import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Video.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Video = () => {

	const [uri, setURI] = useState('');

	const data = [
	    { id:1, title:"テスト", link:"https://www.youtube.com/watch?v=ZLUm9H8Qyno" },
	    { id:2, title:"テスト", link:"https://www.youtube.com/watch?v=lAvd46qzX7I" },
	    { id:3, title:"テスト", link:"https://www.youtube.com/watch?v=n-LQG83XZ3w" },
	    { id:4, title:"テスト", link:"https://www.youtube.com/watch?v=MuELXqjrI-g" },
	    { id:5, title:"テスト", link:"https://www.youtube.com/watch?v=BO92mg0WdZQ" },
	    { id:6, title:"テスト", link:"https://www.youtube.com/watch?v=vH1RhSsjeIQ" }
	];

	useEffect(() => {
	    setURI(data[0].link)
	}, []);

	const handleOnClick = (v) => {
	    setURI(v)
	};


        const [open, setOpen] = React.useState(true);

	const handleClick = () => {
	    setOpen(!open);
	};

        const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleListItemClick = (
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            index: number,
        ) => {
            setSelectedIndex(index);
        };

	return (
	    <div className="Video">
	        <table>
	            <tbody valign="top">
	    		<tr>
	    		    <td className="Table1">
	    			<div>
	    			    <ReactPlayer
	    				className="react-player"
	    				url={uri}
	    				playing loop controls={true}
	    				width="1280px"
	    				height="720px"
	    			    />
	    			</div>
	    		    </td>
	    		    <td className="Table2">
			      <List
		      		component="nav"
		      		aria-labelledby="nested-list-subheader"
		    	      >
                              <ListItemButton onClick={handleClick}>
		                  <ListItemText primary="セッション1" />
		                  {open ? <ExpandLess /> : <ExpandMore />}
		              </ListItemButton>
		              <Collapse in={open} timeout="auto" unmountOnExit>
		                <Box sx={{ bgcolor: 'background.paper' }}>
		                  <List component="div" disablePadding>
				    {data.map((value, index) => (
				      <ListItemButton key={index} selected={selectedIndex === index} onClick={(event) => {
					  handleOnClick(value.link);
					  handleListItemClick(event, index);
				      }}>
				          <ListItemText primary={`${value.id}. ${value.title}`} />
		                      </ListItemButton>
			            ))}
		                  </List>
		                </Box>
		              </Collapse>
		              </List>
			    </td>
			</tr>
		    </tbody>
		</table>
	    </div>
	);
};

export default Video;
