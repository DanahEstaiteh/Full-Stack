import React from 'react';
import Link from '@material-ui/core/Link';
import logo from '../Images/pos-icon.png';
import UserImage from '../Images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faUsers,
  faCogs,
  faArchive,
  faBookmark,
  faDollarSign,
  faChartLine,
  faSignOutAlt,
  faMoneyBill
} from '@fortawesome/free-solid-svg-icons';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import { Collapse } from '@material-ui/core';

const preventDefault = (event: React.MouseEvent<HTMLElement>) =>
  event.preventDefault();

interface HeaderItemProps {
  icon: JSX.Element;
  linkHref: string;
  name: string;
}
const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const classes = useStyles();
  const { icon, linkHref, name } = props;
  return (
    <li className={classes.item}>
      <Link
        href={linkHref}
        onClick={preventDefault}
        className={classes.headerLink}
      >
        {icon}
        {name}
      </Link>
    </li>
  );
};
interface HeaderListItemProps extends HeaderItemProps {
  list: string[];
}
const HeaderListItem: React.FC<HeaderListItemProps> = (props) => {
  const classes = useStyles();
  const { icon, linkHref, name } = props;
  return (
    <li className={classes.lisItem}>
      {/* TODO: Pass the icon itself */}

      <Link
        href={linkHref}
        onClick={preventDefault}
        className={classes.headerLink}
      >
        {icon}
        {name}
        <ArrowDropDownIcon className={classes.arrowDropDown} />
      </Link>
    </li>
  );
};
const LanguageList: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useStyles();

  const language = ['arabic', 'Hindi', 'Chinese'];
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItem>
        <LanguageIcon />
        {open ? (
          <ArrowDropUpIcon onClick={handleClick} />
        ) : (
          <ArrowDropDownIcon onClick={handleClick} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.nestedList}>
          {language.map((el) => (
            <ListItem button key={el} className={classes.nested}>
              {el}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};
const PosHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img src={logo} alt="poslogo" />

      <ul className={classes.headerListLeft}>
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faCreditCard} className={classes.linkIcon} />
          }
          linkHref="#"
          name="POS"
        />
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faArchive} className={classes.linkIcon} />
          }
          linkHref="#"
          name="Products"
        />
        <HeaderListItem
          icon={<FontAwesomeIcon icon={faUsers} className={classes.linkIcon} />}
          linkHref="#"
          name="People"
          list={[]}
        />

        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faMoneyBill} className={classes.linkIcon} />
          }
          linkHref="#"
          name="Sales"
        />
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faDollarSign} className={classes.linkIcon} />
          }
          linkHref="#"
          name="Expense"
        />
        <HeaderListItem
          icon={
            <FontAwesomeIcon icon={faBookmark} className={classes.linkIcon} />
          }
          linkHref="#"
          name="Categories"
          list={[]}
        />
        <HeaderItem
          icon={<FontAwesomeIcon icon={faCogs} className={classes.linkIcon} />}
          linkHref="#"
          name="Setting"
        />
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faChartLine} className={classes.linkIcon} />
          }
          linkHref="#"
          name="Reports"
        />
      </ul>
      <ul className={classes.headerListRight}>
        <Avatar alt="userInfo" src={UserImage} className={classes.UserImage} />
        <div className={classes.UserType}>admin</div>
        <LanguageList />
        <FontAwesomeIcon icon={faSignOutAlt} />
      </ul>
    </header>
  );
};

export default PosHeader;
