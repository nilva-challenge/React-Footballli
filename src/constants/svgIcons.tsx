interface IProps{
  isActive?:boolean,
  width?:string,
  height?:string
}
export const SearchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#B4B8C4"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  )
}

export const PersonIcon = ({isActive,width,height}:IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width} fill={isActive?"#379237":"#B4B8C4"}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  )
}
export const LeagueIcon = ({isActive,width,height}:IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width} fill={isActive?"#379237":"#B4B8C4"}><rect fill="none" height="24" width="24"/><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z"/></svg>
  )
}
export const CompassIcon = ({isActive,width,height}:IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width}  fill={isActive?"#379237":"#B4B8C4"}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
  )
}
export const BallIcon = ({isActive,width,height}:IProps) => {
  return (
    <svg    xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width} fill={isActive?"#379237":"#B4B8C4"}><g><rect  fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,5.3l1.35-0.95 c1.82,0.56,3.37,1.76,4.38,3.34l-0.39,1.34l-1.35,0.46L13,6.7V5.3z M9.65,4.35L11,5.3v1.4L7.01,9.49L5.66,9.03L5.27,7.69 C6.28,6.12,7.83,4.92,9.65,4.35z M7.08,17.11l-1.14,0.1C4.73,15.81,4,13.99,4,12c0-0.12,0.01-0.23,0.02-0.35l1-0.73L6.4,11.4 l1.46,4.34L7.08,17.11z M14.5,19.59C13.71,19.85,12.87,20,12,20s-1.71-0.15-2.5-0.41l-0.69-1.49L9.45,17h5.11l0.64,1.11 L14.5,19.59z M14.27,15H9.73l-1.35-4.02L12,8.44l3.63,2.54L14.27,15z M18.06,17.21l-1.14-0.1l-0.79-1.37l1.46-4.34l1.39-0.47 l1,0.73C19.99,11.77,20,11.88,20,12C20,13.99,19.27,15.81,18.06,17.21z"/></g></g></svg>
  )
}
export const FootballBitchIcon = ({isActive,width,height}:IProps) => {
  return (

    <svg fill={isActive?"#629F49":"#B4B8C4"} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 440 370" xmlSpace="preserve">
 <g>
   <path d="M270.141,227.5c0-18.235-11.508-33.826-27.641-39.909v79.818C258.632,261.326,270.141,245.735,270.141,227.5z"/>
   <rect y="173.5" width="55" height="108"/>
   <path d="M184.859,227.5c0,18.235,11.508,33.826,27.641,39.909v-79.818C196.368,193.674,184.859,209.265,184.859,227.5z"/>
   <path d="M242.5,71.5v84.926c32.88,6.931,57.641,36.162,57.641,71.074s-24.76,64.143-57.641,71.074V383.5H455v-72h-85v-168h85v-72
     H242.5z"/>
   <path d="M0,143.5h85v168H0v72h212.5v-84.926c-32.88-6.931-57.641-36.162-57.641-71.074s24.76-64.143,57.641-71.074V71.5H0V143.5z"
     />
   <rect x="400" y="173.5" width="55" height="108"/>
 </g>
 </svg>

  )
}
export const ChevronLeftIcon = ({isActive,width,height}:IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 96 960 960" width={width}><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/></svg>
  )
}

