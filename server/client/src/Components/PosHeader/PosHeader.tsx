import React from 'react';
import logo from '../Images/pos-icon.png';
import UserImage from '../Images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@material-ui/core/Link';
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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';

import { useHistory} from 'react-router-dom';
import LanguageList from './LanguageList';


 

interface HeaderItemProps {
  icon: JSX.Element;
  headerItemName: string;
}
const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { icon,  headerItemName } = props;

  const handleClick = () => {
    history.push('/'+headerItemName);
}

  return (
    <li className={classes.item}>
      <Link
        onClick={handleClick}
        className={classes.headerLink}
      >
        {icon}
        {headerItemName}
      </Link>
    </li>
  );
};


interface HeaderListItemProps {
  icon: JSX.Element;
  headerItemName: string;
  list : string [];
}

const HeaderListItem: React.FC<HeaderListItemProps> = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { icon, headerItemName } = props;

  const handleClick = () => {
    history.push('/'+headerItemName);
}

  return (
    <li className={classes.lisItem}>
      <Link
        onClick={handleClick}
        className={classes.headerLink}
      >
        {icon}
        {headerItemName}
        <ArrowDropDownIcon className={classes.arrowDropDown} />
      </Link>
    </li>
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
          
          headerItemName="POS"
        />
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faArchive} className={classes.linkIcon} />
          }
          
          headerItemName="Products"
        />
        <HeaderListItem
          icon={<FontAwesomeIcon icon={faUsers} className={classes.linkIcon} />}
          
          headerItemName="People"
          list={[]}
        />

        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faMoneyBill} className={classes.linkIcon} />
          }
          
          headerItemName="Sales"
        />
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faDollarSign} className={classes.linkIcon} />
          }
          
          headerItemName="Expense"
        />
        <HeaderListItem
          icon={
            <FontAwesomeIcon icon={faBookmark} className={classes.linkIcon} />
          }
          
          headerItemName="Categories"
          list={[]}
        />
        <HeaderItem
          icon={<FontAwesomeIcon icon={faCogs} className={classes.linkIcon} />}
          
          headerItemName="Setting"
        />
        
        <HeaderItem
          icon={
            <FontAwesomeIcon icon={faChartLine} className={classes.linkIcon} />
          }
          
          headerItemName="Reports"
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
