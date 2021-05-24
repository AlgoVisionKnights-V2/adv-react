import './NavGroup.css';

// Material UI
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	ListItem,
	ListItemText,
} from '@material-ui/core';

// Child Components
import NavLink from '../navlink/NavLink';

function NavGroup({ group, groups, panel, expanded, handleChange }) {
	const names = groups[group];
	return (
		<Accordion
			id='nav-group'
			expanded={expanded === panel}
			onChange={handleChange(panel)}>
			<ListItem id='nav-group-button' button>
				<AccordionSummary id='accordion-summary'>
					<ListItemText>{group}</ListItemText>
				</AccordionSummary>
			</ListItem>
			<AccordionDetails id='accordion-details'>
				{names.map((name) => (
					<NavLink name={name} />
				))}
			</AccordionDetails>
		</Accordion>
	);
}

export default NavGroup;
