import GoogleIcon from "@mui/icons-material/Google";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LoginIcon from "@mui/icons-material/Login";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

export const accountArray = [
  {
    icon: <GoogleIcon />,
    text: "Google Account",
    hasArrow:false
  },
  {
    icon: <SwitchAccountIcon />,
    text: "Switch Account",
    hasArrow:true
  },
  {
    icon: <LoginIcon />,
    text: "Login",
    hasArrow:false
  },
];


export const studioAndMembershipArray = [
    {
        icon: <MusicNoteIcon />,
        text: "Youtube Studio",
        hasArrow:false
      },
      {
        icon: <PaidOutlinedIcon />,
        text: "Switch Account",
        hasArrow:false
      },
]

export const dataInYoutubeArray = [
    {
        icon: <AdminPanelSettingsOutlinedIcon />,
        text: "Your data in Youtube",
        hasArrow:false
      },
      {
        icon: <PaidOutlinedIcon />,
        text: "Switch Account",
        hasArrow:false
      },
      {
        icon: <LightModeIcon />,
        icon2: <DarkModeIcon />,
        text: "Appearance:",
        hasArrow:true
      },
      {
        icon: <TranslateOutlinedIcon />,
        text: "Language: English",
        hasArrow:true
      },
      {
        icon: <SecurityOutlinedIcon />,
        text: "Restricted Mode: Off",
        hasArrow:true
      },
      {
        icon: <LanguageOutlinedIcon />,
        text: "Location: United States",
        hasArrow:true
      },
      {
        icon: <KeyboardOutlinedIcon />,
        text: "Keboard shortcuts",
        hasArrow:true
      },
      
]

export const settings = [
    {
        icon: <SettingsOutlinedIcon />,
        text: "Settings",
        hasArrow:false
      },
]

export const helpAndFeedback = [
    {
        icon: <HelpOutlineOutlinedIcon />,
        text: "Help",
        hasArrow:false
      },
      {
        icon: <FeedbackOutlinedIcon />,
        text: "Send Feedback",
        hasArrow:false
      }
]
