import React , {useEffect , useState} from "react";
import "./styles.css";
import Login from "./component/Login";
import {getTokenFromUrl} from "./component/spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./component/Player"
import {useDataLayerValue } from "./component/DataLayer"

const spotify = new SpotifyWebApi();

export default function App() {

  // const [Authtoken, settoken] = useState(null)

  const [{user,token},dispatch] = useDataLayerValue();

  // const [Authtoken, settoken] = useState(token)

    useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash="";
      const _token = hash.access_token

      if(_token){

        dispatch({
          type:'SET_TOKEN',
          token:_token
        })

        // settoken(_token)
        spotify.setAccessToken(_token);

        spotify.getMe().then(user => {
         
          dispatch({
            type:'SET_USER',
            user:user
          })
  
        })

        spotify.getUserPlaylists().then((playlists)=>{

          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists
          })
        })

        spotify.getPlaylist('4XaGqdrPrVTqDsW3XlIG0r').then(response => 

          dispatch({
            type:"SET_DISCOVERY",
            discover_weekly:response
          })

          )

       
      }        
  
    }, [])
    console.log('persone',user)
    
  return (
    <div className="app">
        {token ? <Player spotify={spotify} /> : <Login />}
      
    </div>
  );
}
 